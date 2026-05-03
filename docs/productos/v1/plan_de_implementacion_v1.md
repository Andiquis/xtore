# Plan de implementación v1 - Módulo de productos

## Índice

- [1. Objetivo](#1-objetivo)
- [2. Alcance](#2-alcance)
- [3. Mapa general del módulo](#3-mapa-general-del-módulo)
- [4. Flujo principal](#4-flujo-principal)
- [5. Entidades principales](#5-entidades-principales)
- [6. Modelo conceptual](#6-modelo-conceptual)
- [7. Estado e historial](#7-estado-e-historial)
- [8. Casos borde](#8-casos-borde)
- [9. Responsabilidades del módulo](#9-responsabilidades-del-módulo)
- [10. Versión mínima implementable](#10-versión-mínima-implementable)
- [11. Pendientes futuros](#11-pendientes-futuros)
- [12. Iteraciones propuestas](#12-iteraciones-propuestas)

---

## 1. Objetivo

Diseñar la primera versión del módulo de productos para definir el catálogo comercial del sistema.

Esta versión se enfoca en registrar productos, marcas, categorías, presentaciones, códigos y precios. Todavía no implementa inventario, compras, ventas, lotes, vencimientos ni kardex.

---

## 2. Alcance

### Incluye

- Productos base.
- Marcas.
- Categorías.
- Presentaciones comerciales.
- Códigos de producto.
- Precios por presentación.
- Estados para activar, inactivar o descontinuar registros.

### No incluye todavía

- Stock actual.
- Movimientos de inventario.
- Lotes.
- Vencimientos.
- Compras.
- Ventas.
- Kardex.
- Almacenes.
- Pagos.

---

## 3. Mapa general del módulo

```txt
Productos
|-- Marcas
|-- Categorías
|-- Producto base
|-- Presentaciones
|-- Códigos
`-- Precios
```

El módulo de productos representa el catálogo comercial del sistema. Su responsabilidad es responder qué productos existen, cómo se clasifican, cómo se venden, cómo se identifican y cuánto cuestan.

---

## 4. Flujo principal

1. Crear una marca.
2. Crear una categoría o subcategoría.
3. Crear un producto base con nombre, descripción, marca y categoría.
4. Agregar una o más presentaciones comerciales al producto base.
5. Asignar SKU o código de barras a cada presentación.
6. Asignar precio de venta a cada presentación.
7. Consultar el catálogo desde tienda, app o panel administrativo.
8. Actualizar datos del producto o de sus presentaciones cuando sea necesario.
9. Desactivar o descontinuar productos sin eliminarlos físicamente.

### Ejemplo

Producto base:

- Nombre: KR Naranja
- Marca: IMS
- Categoría: Bebidas > Gaseosa

Presentaciones:

- KR Naranja Botella 350 ml
- KR Naranja Botella 625 ml
- KR Naranja Botella 1.5 L

---

## 5. Entidades principales

| Tabla | Responsabilidad |
| --- | --- |
| `t_marcas` | Guarda las marcas comerciales. |
| `t_categorias` | Guarda categorías y subcategorías. |
| `t_productos` | Guarda el producto base. |
| `t_producto_presentaciones` | Guarda las formas exactas de venta o compra del producto. |
| `t_producto_codigos` | Guarda SKU, código interno o código de barras por presentación. |
| `t_producto_precios` | Guarda precios vigentes e históricos por presentación. |

### Clasificación

Principales:

- Producto.
- Presentación.

Secundarias:

- Marca.
- Categoría.

Soporte:

- Código.
- Precio.

---

## 6. Modelo conceptual

El producto base representa el nombre comercial general.

Ejemplos:

- KR Naranja.
- Arroz Costeño.
- Leche Gloria.

La presentación representa la forma exacta en que se vende o compra.

Ejemplos:

- KR Naranja Botella 350 ml.
- KR Naranja Botella 1.5 L.
- Arroz Costeño Bolsa 5 kg.

Por esta razón, el precio y el código no deben depender solo del producto base. Deben depender de la presentación.

### Regla principal

Un producto puede tener varias presentaciones. Cada presentación puede tener su propio SKU, código de barras y precio.

---

## 7. Estado e historial

### Estado actual

Cada entidad importante debe manejar estado para evitar eliminaciones físicas.

Campos sugeridos:

- `estado_marca`
- `estado_categoria`
- `estado_producto`
- `estado_presentacion`
- `estado_codigo`
- `estado_precio`

Valores sugeridos:

- `activo`
- `inactivo`
- `descontinuado`

### Historial de precios

La tabla `t_producto_precios` debe permitir vigencias.

Campos sugeridos:

- `fecha_inicio`
- `fecha_fin`
- `estado_precio`

Esto permite saber qué precio estuvo vigente en una fecha determinada.

### Regla importante

No se deben borrar productos, presentaciones, códigos o precios que ya pudieron haber sido usados en ventas, compras o inventario. Lo correcto es cambiar su estado.

---

## 8. Casos borde

- Producto sin marca asignada.
- Producto sin categoría asignada.
- Presentación sin código de barras.
- Presentación sin precio definido.
- SKU duplicado.
- Código de barras duplicado.
- Producto perecible que después necesitará lote y vencimiento.
- Producto descontinuado que ya no se vende, pero debe mantenerse en el catálogo.
- Cambio de precio sin perder el precio anterior.
- Producto con varias presentaciones similares.
- Producto vendido por peso, volumen, unidad, paquete o caja.

### Decisión para v1

Un producto puede no tener código de barras, porque algunos productos se venden a granel o con código interno.

El SKU de la presentación sí debe ser único.

---

## 9. Responsabilidades del módulo

### El módulo sí hace

- Registrar productos base.
- Registrar marcas.
- Registrar categorías.
- Registrar presentaciones comerciales.
- Registrar códigos por presentación.
- Registrar precios por presentación.
- Activar, inactivar o descontinuar productos.
- Consultar el catálogo.

### El módulo no hace

- Controlar stock.
- Registrar entradas o salidas de inventario.
- Registrar compras.
- Registrar ventas.
- Calcular kardex.
- Gestionar lotes.
- Gestionar almacenes.
- Procesar pagos.

### Límite del módulo

Responde:

- Qué producto existe.
- Cómo se presenta.
- Cómo se identifica.
- Cuánto cuesta.
- Si está activo o no.

No responde:

- Cuánto stock hay.
- Dónde está almacenado.
- Por qué subió o bajó el stock.
- Quién lo compró o vendió.

---

## 10. Versión mínima implementable

### Tablas mínimas

- `t_marcas`
- `t_categorias`
- `t_productos`
- `t_producto_presentaciones`
- `t_producto_codigos`
- `t_producto_precios`

### Funcionalidades mínimas

- Crear marca.
- Crear categoría.
- Crear producto base.
- Crear presentación.
- Asignar código o SKU.
- Asignar precio.
- Listar catálogo.
- Editar datos básicos.
- Desactivar producto o presentación.

### Regla de implementación

Primero debe funcionar el catálogo. Después se conectará con inventario.

---

## 11. Pendientes futuros

- Inventario por presentación.
- Stock por almacén.
- Movimientos de inventario.
- Lotes y vencimientos.
- Kardex.
- Compras.
- Ventas.
- Promociones.
- Combos.
- Precios por cliente.
- Precios mayoristas avanzados.
- Historial avanzado de cambios del producto.
- Auditoría por usuario.

---

## 12. Iteraciones propuestas

### Versión 1: Catálogo básico

- Producto.
- Marca.
- Categoría.
- Presentación.
- Código.
- Precio.

### Versión 2: Conexión con inventario

- Stock.
- Almacén.
- Movimiento.

### Versión 3: Control avanzado

- Lotes.
- Vencimientos.
- Kardex.
- Costo promedio.

### Versión 4: Optimización comercial

- Promociones.
- Combos.
- Precios por cliente.
- Reportes avanzados.
