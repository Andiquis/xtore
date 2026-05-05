# Documentación del Módulo de Productos (v2)

Esta documentación explica la arquitectura de la base de datos para el módulo de productos (`productos_v2.sql`), detallando la responsabilidad de cada tabla, ejemplos prácticos de cómo utilizar sus columnas y las reglas de negocio subyacentes.

---

## 1. Introducción: ¿Qué cubre este módulo?

Este esquema relacional está diseñado para ser **transaccional, rápido y escalable** para sistemas como Puntos de Venta (POS) o ERPs. Cubre las siguientes necesidades:
- Clasificación de inventario mediante **Marcas** y **Categorías** jerárquicas.
- Separación entre el **Producto Conceptual** (ej. "Gaseosa Coca Cola") y sus **Presentaciones/Variantes Físicas** (ej. "Botella de 500ml", "Paquete x6").
- Soporte para **Múltiples Códigos de Barras** en una misma variante (muy común en retail).
- Sistema de **Precios Ágiles**, optimizado para que las consultas de venta sean instantáneas al mantener solo el precio vigente.

---

## 2. Tablas y Casos de Uso (Tutorial)

### 2.1. `t_marcas` y `t_categorias`
Son tablas de catálogo estándar para organizar tu inventario.

- **Uso de `id_categoria_padre`**: Permite jerarquía infinita. 
  - *Ejemplo:* Tienes la categoría "Bebidas" (`id: 1, padre: null`). Luego creas "Gaseosas" (`id: 2, padre: 1`).
- **Por qué no hay campo "nivel"**: El nivel absoluto no importa en la BD. En el backend o frontend, simplemente armas el "árbol" iterando sobre los padres. Esto evita que los niveles se desincronicen si mueves una subcategoría a otro padre.

### 2.2. `t_productos` (El Producto Conceptual)
Guarda la esencia del producto, sin importar cómo se empaca.

- **`tipo_producto`**: 
  - `'producto'`: Se compra y se vende (ej. Gaseosa).
  - `'insumo'`: Se compra para fabricar otra cosa, pero no se vende directo (ej. Harina para una panadería).
  - `'servicio'`: No usa stock (ej. Delivery, Mantenimiento).
  - `'combo'`: Una agrupación temporal de productos para promoción.
- **`es_perecible` / `requiere_lote`**: Si marcas esto como `TRUE`, tu futuro módulo de inventario obligará a pedir "Fecha de Vencimiento" y "Lote" al hacer ingresos.
- **`id_categoria`**: Debes guardar aquí el ID más profundo. Si el producto es una Coca Cola, guardas el ID de "Gaseosas", y por el `id_categoria_padre` el sistema ya sabrá que también pertenece a "Bebidas".

### 2.3. `t_producto_presentaciones` (La Magia del Módulo)
**Aquí es donde ocurre la venta real.** El cliente nunca compra un "t_producto", compra una "presentación" de ese producto.

- **`sku`**: Tu código interno único inventado por la empresa (ej. `B-COCA-500ML`).
- **`codigo_barras`**: El código de barras principal que viene impreso (EAN/UPC). Se pone aquí porque el 99% de las ventas usarán este código. Al tenerlo en esta tabla, cuando pistoletes el código, harás una consulta rapidísima sin hacer `JOINs` complejos.
- **`unidad_medida` y `factor_conversion`** (Crucial para el Kardex):
  - *Caso A (Producto Unitario):* Una galleta. `unidad_medida: 'NIU'` (Unidad), `factor_conversion: 1`. 
  - *Caso B (Venta a Granel):* Carne molida. `unidad_medida: 'KGM'` (Kilo), `factor_conversion: 1`. El cliente puede llevar `0.5` en cantidad.
  - *Caso C (Empaques múltiples):* Compras las gaseosas por unidad, pero también vendes un *Six-Pack*. 
    - Presentación 1: "Botella personal". `unidad_medida: 'NIU'`, `factor_conversion: 1`.
    - Presentación 2: "Six-Pack". `unidad_medida: 'BX'` (Caja), `factor_conversion: 6`. 
    - *Magia:* Cuando vendas un Six-Pack, tu kardex restará `1 * 6 = 6` de la unidad base.

### 2.4. `t_producto_codigos` (Códigos Alternativos)
**¿Cuándo usarla?** Imagina que compras Papas Lays. Hoy vienen con el código de barras `770001`. Mañana el proveedor cambia el diseño del empaque y le pone el código `770002`, pero *sigue siendo exactamente el mismo producto por dentro*.
- En vez de crear una nueva presentación y desordenar tu stock, simplemente agregas `770002` en esta tabla.
- Cuando el cajero escanee cualquiera de los dos códigos, el sistema sabrá que es el mismo `id_presentacion`.

### 2.5. `t_producto_precios` (Lista Vigente)
Esta tabla es de relación 1 a 1 con la presentación (por ahora).
- Guarda tu `precio_compra` (para calcular utilidades) y el `precio_venta` actual.
- **¿Por qué no hay fechas de vigencia?** En un sistema rápido de ventas, la tabla maestra de precios solo debe tener **el precio de hoy**. Si un cajero vende algo, el SQL no debe calcular `WHERE fecha BETWEEN...` porque ralentiza miles de transacciones. Simplemente haces `SELECT precio_venta`. 

---

## 3. Recomendaciones, Mejoras o Pendientes

Aunque el modelo de Catálogo/Productos está 100% completo, para tener un ecosistema de tienda total te faltarán construir estos módulos a futuro:

> [!NOTE]
> **1. Módulo de Inventario / Kardex**
> Este módulo (Productos) define **qué** vendes, pero no **cuánto** tienes. 
> *Pendiente:* Crear `t_inventarios` (id_presentacion, id_sucursal, cantidad_actual) y `t_kardex` (historial de entradas y salidas).

> [!TIP]
> **2. Auditoría de Precios**
> Como la tabla de precios solo guarda el precio actual, si necesitas ver cómo varió el precio en el último año, recomiendo implementar a nivel de backend (NestJS/TypeORM) un "Subscriber" o "Trigger". 
> *Pendiente:* Cada vez que se actualice un registro en `t_producto_precios`, que se inserte una fila en una tabla de logs genérica (ej. `t_log_precios`).

> [!IMPORTANT]
> **3. Multi-Sucursal (Expansión Futura)**
> Siguiendo tu modelo base (`db_xqasis`), si en el futuro decides que la Sucursal A venda el producto a S/ 10 y la Sucursal B a S/ 12, solo tendrás que hacer un cambio:
> Añadir `id_sucursal` a `t_producto_precios` y cambiar la llave única a `UNIQUE(id_presentacion, id_sucursal)`. El resto de la base de datos quedará intacta.
