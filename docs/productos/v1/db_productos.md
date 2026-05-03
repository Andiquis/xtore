# Abstraccion de productos para abarrotes y supermercado

Este documento define los datos recomendados para modelar productos de una tienda de abarrotes, minimarket o supermercado. La idea es separar el producto base de sus presentaciones, codigos, precios e inventario, porque un mismo producto puede venderse en distintos formatos.

Ejemplo: `KR Naranja` puede existir como producto base, pero venderse como `Botella 350 ml`, `Botella 625 ml`, `Botella 1.5 L` o `Pack x6`.

## Entidades principales

### 1. Producto base

Representa el articulo comercial general, sin depender todavia de una presentacion especifica.

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Nota |
|---|---:|:---:|---|---|
| id_producto | BIGINT | Si | 1001 | Identificador interno |
| nombre_producto | VARCHAR(200) | Si | KR | Nombre visible del producto |
| descripcion_producto | TEXT | No | Gaseosa sabor naranja | Descripcion corta o comercial |
| id_marca | BIGINT | No | 10 | Marca del producto |
| id_categoria | BIGINT | Si | 1 | Categoria principal |
| id_subcategoria | BIGINT | No | 11 | Subcategoria del producto |
| estado_producto | ENUM | Si | activo | `activo`, `inactivo`, `descontinuado` |
| es_perecible | BOOLEAN | Si | false | Requiere lote o vencimiento |
| requiere_control_lote | BOOLEAN | Si | true | Util para alimentos, lacteos, medicinas |
| imagen_url | VARCHAR(500) | No | /productos/kr.png | Imagen principal |
| fecha_creacion | DATETIME | Si | 2026-04-25 10:00:00 | Auditoria |
| fecha_modificacion | DATETIME | No | 2026-04-25 11:00:00 | Auditoria |

### 2. Marca

| Campo | Tipo sugerido | Obligatorio | Ejemplo |
|---|---:|:---:|---|
| id_marca | BIGINT | Si | 10 |
| nombre_marca | VARCHAR(120) | Si | IMS |
| estado_marca | ENUM | Si | activo |

### 3. Categoria y subcategoria

Permite agrupar productos para busqueda, reportes y promociones.

| Campo | Tipo sugerido | Obligatorio | Ejemplo |
|---|---:|:---:|---|
| id_categoria | BIGINT | Si | 1 |
| nombre_categoria | VARCHAR(120) | Si | Bebidas |
| id_categoria_padre | BIGINT | No | null |
| estado_categoria | ENUM | Si | activo |

Ejemplos de jerarquia:

| Categoria | Subcategoria |
|---|---|
| Bebidas | Gaseosa |
| Bebidas | Jugo |
| Abarrotes | Arroz |
| Abarrotes | Fideos |
| Limpieza | Detergente |
| Lacteos | Leche |
| Cuidado personal | Shampoo |

### 4. Presentacion comercial

Representa la forma exacta en la que se vende o compra un producto. Esta es la pieza mas importante para supermercado, porque el precio, codigo de barras y stock suelen depender de la presentacion.

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Nota |
|---|---:|:---:|---|---|
| id_presentacion | BIGINT | Si | 5001 | Identificador interno |
| id_producto | BIGINT | Si | 1001 | Producto base |
| nombre_presentacion | VARCHAR(160) | Si | Botella 350 ml | Texto visible |
| variante | VARCHAR(120) | No | Naranja | Sabor, color, aroma, tipo |
| contenido_valor | DECIMAL(10,3) | No | 350 | Cantidad contenida |
| contenido_unidad | ENUM | No | ml | `ml`, `l`, `g`, `kg`, `un`, `m`, `cm` |
| unidades_por_presentacion | DECIMAL(10,3) | Si | 1 | Para pack, caja, six pack |
| unidad_venta | ENUM | Si | unidad | `unidad`, `peso`, `volumen`, `paquete`, `caja` |
| sku | VARCHAR(80) | Si | BEB-KR-NAR-350 | Codigo interno |
| codigo_barras | VARCHAR(80) | No | 7750000000012 | EAN/UPC si existe |
| estado_presentacion | ENUM | Si | activo | `activo`, `inactivo`, `descontinuado` |

Ejemplos:

| Producto | Variante | Presentacion | Contenido | Unidades por presentacion | Unidad venta |
|---|---|---|---:|---:|---|
| KR | Naranja | Botella 350 ml | 350 ml | 1 | unidad |
| KR | Piña | Botella 625 ml | 625 ml | 1 | unidad |
| Arroz Costeño | Extra | Bolsa 5 kg | 5 kg | 1 | unidad |
| Huevos Rosados | Grande | Jaba x30 | 30 un | 30 | paquete |
| Platano de Seda | Maduro | A granel | 1 kg | 1 | peso |

### 5. Precio

El precio debe vivir por presentacion, no solo por producto base.

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Nota |
|---|---:|:---:|---|---|
| id_precio | BIGINT | Si | 9001 | Identificador interno |
| id_presentacion | BIGINT | Si | 5001 | Presentacion comercial |
| precio_compra | DECIMAL(10,2) | No | 0.75 | Costo unitario |
| precio_venta | DECIMAL(10,2) | Si | 1.00 | Precio al cliente |
| precio_mayorista | DECIMAL(10,2) | No | 0.90 | Opcional |
| moneda | CHAR(3) | Si | PEN | Soles peruanos |
| incluye_igv | BOOLEAN | Si | true | Para comprobantes |
| fecha_inicio | DATETIME | Si | 2026-04-25 00:00:00 | Vigencia |
| fecha_fin | DATETIME | No | null | Null = precio actual |
| estado_precio | ENUM | Si | vigente | `vigente`, `vencido`, `programado` |

### 6. Inventario

El stock tambien debe controlarse por presentacion. Si luego se necesita conversion entre caja y unidad, se puede agregar una tabla de equivalencias.

| Campo | Tipo sugerido | Obligatorio | Ejemplo |
|---|---:|:---:|---|
| id_inventario | BIGINT | Si | 3001 |
| id_presentacion | BIGINT | Si | 5001 |
| stock_actual | DECIMAL(12,3) | Si | 24 |
| stock_minimo | DECIMAL(12,3) | Si | 6 |
| stock_maximo | DECIMAL(12,3) | No | 120 |
| ubicacion | VARCHAR(120) | No | Estante A-01 |
| fecha_ultimo_movimiento | DATETIME | No | 2026-04-25 12:30:00 |

### 7. Lotes y vencimientos

Recomendado para alimentos, bebidas, lacteos, carnes, productos de limpieza y cuidado personal.

| Campo | Tipo sugerido | Obligatorio | Ejemplo |
|---|---:|:---:|---|
| id_lote | BIGINT | Si | 7001 |
| id_presentacion | BIGINT | Si | 5001 |
| codigo_lote | VARCHAR(100) | No | LT-2026-04-A |
| fecha_vencimiento | DATE | No | 2026-12-31 |
| stock_lote | DECIMAL(12,3) | Si | 12 |
| costo_lote | DECIMAL(10,2) | No | 0.75 |

## Tabla plana para importacion rapida

Esta tabla sirve para cargar productos desde Excel/CSV antes de normalizarlos en entidades.

| sku | codigo_barras | nombre_producto | marca | categoria | subcategoria | variante | presentacion | contenido_valor | contenido_unidad | unidades_por_presentacion | precio_compra | precio_venta | stock_actual | stock_minimo | ubicacion | fecha_vencimiento |
|---|---|---|---|---|---|---|---|---:|---|---:|---:|---:|---:|---:|---|---|
| BEB-KR-NAR-350 | 7750000000012 | KR | IMS | Bebidas | Gaseosa | Naranja | Botella 350 ml | 350 | ml | 1 | 0.75 | 1.00 | 36 | 12 | A-01 | 2026-12-31 |
| BEB-KRIS-CIT-1500 | 7750000000013 | Kris | IMS | Bebidas | Jugo | Citrus Punch | Botella 1.5 L | 1.5 | l | 1 | 4.80 | 6.00 | 18 | 6 | A-02 | 2026-11-30 |
| BEB-LOA-PIN-625 | 7750000000014 | Loa | IMS | Bebidas | Gaseosa | Piña | Botella 625 ml | 625 | ml | 1 | 1.10 | 1.50 | 24 | 8 | A-03 | 2026-10-31 |
| ABA-ARR-COS-5KG | 7750000000101 | Arroz Costeño | Costeño | Abarrotes | Arroz | Extra | Bolsa 5 kg | 5 | kg | 1 | 19.50 | 23.90 | 20 | 5 | B-01 | 2027-01-31 |
| ABA-FID-DON-250 | 7750000000102 | Fideo Don Vittorio | Don Vittorio | Abarrotes | Fideos | Spaghetti | Bolsa 250 g | 250 | g | 1 | 2.40 | 3.20 | 48 | 12 | B-02 | 2027-02-28 |
| LIM-DET-ACE-800 | 7750000000201 | Detergente Ace | Ace | Limpieza | Detergente | Floral | Bolsa 800 g | 800 | g | 1 | 6.80 | 8.50 | 16 | 6 | C-01 | 2028-04-30 |

## Reglas de negocio recomendadas

- El `sku` debe ser unico por presentacion.
- El `codigo_barras` debe ser unico cuando exista, pero puede ser nulo para productos a granel o artesanales.
- El precio vigente se obtiene con `fecha_fin = null` y `estado_precio = vigente`.
- El stock se mueve por entradas, salidas y ajustes; no se deberia editar manualmente sin registrar movimiento.
- Un producto a granel usa `unidad_venta = peso` o `volumen` y permite cantidades decimales.
- Un pack o caja debe indicar `unidades_por_presentacion` para reportes y conversiones.
- Si `es_perecible = true`, se recomienda exigir lote o fecha de vencimiento al ingresar compras.
- La categoria ayuda a reportes; la subcategoria ayuda a filtros y busqueda.

## Modelo relacional sugerido

```text
t_marcas
  1 ── * t_productos

t_categorias
  1 ── * t_productos
  1 ── * t_categorias        (categoria padre)

t_productos
  1 ── * t_producto_presentaciones

t_producto_presentaciones
  1 ── * t_producto_precios
  1 ── 1 t_inventario
  1 ── * t_lotes
  1 ── * t_movimientos_inventario
```

## Campos minimos para la primera version

Si se quiere implementar rapido en el sistema, empezar con estos campos:

| Campo | Pertenece a | Motivo |
|---|---|---|
| nombre_producto | Producto | Busqueda y venta |
| marca | Marca | Filtro comercial |
| categoria | Categoria | Reportes y orden |
| subcategoria | Categoria | Filtros mas finos |
| variante | Presentacion | Sabor, tipo o aroma |
| presentacion | Presentacion | Formato de venta |
| sku | Presentacion | Identificador interno |
| codigo_barras | Presentacion | Venta por scanner |
| precio_venta | Precio | Venta |
| precio_compra | Precio | Margen |
| stock_actual | Inventario | Disponibilidad |
| stock_minimo | Inventario | Alertas |
| fecha_vencimiento | Lote | Control sanitario |

## Ejemplo original simplificado

| Nombre de Producto | Marca | Categoria | Subcategoria | Variante | Presentacion | Precio |
|---|---|---|---|---|---|---:|
| KR | IMS | Bebidas | Gaseosa | Naranja | Botella 350 ml | S/ 1.00 |
| Kris | IMS | Bebidas | Jugo | Citrus Punch | Botella 1.5 L | S/ 6.00 |
| Loa | IMS | Bebidas | Gaseosa | Piña | Botella 625 ml | S/ 1.50 |
