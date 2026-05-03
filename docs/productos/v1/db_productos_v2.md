# Modelo de datos de productos e inventario v2

## Informacion del documento

| Campo | Detalle |
|---|---|
| Documento | Modelo de datos de productos e inventario v2 |
| Modulo | Productos, compras, ventas e inventario |
| Contexto | Tienda de abarrotes, minimarket, supermercado o negocio comercial |
| Version | 2.0 |
| Estado | Propuesta tecnica |
| Ultima actualizacion | 2026-04-26 |

## Objetivo

Definir una estructura de base de datos para administrar productos comerciales y su relacion con presentaciones, codigos, precios, almacenes, stock, lotes, movimientos, compras y ventas.

El enfoque principal es separar:

- Lo que es el producto base.
- La forma exacta en que se vende o compra.
- El precio vigente e historico.
- El stock disponible.
- Los movimientos que explican por que sube o baja el inventario.
- Los lotes y vencimientos cuando aplica.

En un sistema comercial, el inventario no debe tratarse como un numero suelto editable. El stock debe ser el resultado de movimientos: compras, ventas, devoluciones, ajustes, mermas, traslados y anulaciones.

## Alcance

Este documento cubre:

- Catalogo de productos.
- Marcas y categorias.
- Presentaciones comerciales.
- Codigos alternativos por presentacion.
- Precios por presentacion.
- Almacenes, stock, lotes y movimientos.
- Compras, ventas y sus detalles.
- Kardex comercial.
- Reglas de negocio y campos minimos para una primera version.

Quedan fuera de esta version:

- Facturacion electronica completa.
- Contabilidad.
- Promociones avanzadas.
- Multiples cajas y cierres de caja.
- Integracion con proveedores externos.

## Indice

- [1. Principios de diseno](#1-principios-de-diseno)
- [2. Convenciones del modelo](#2-convenciones-del-modelo)
- [3. Vista general del modelo](#3-vista-general-del-modelo)
- [4. Catalogo de productos](#4-catalogo-de-productos)
  - [4.1 Tabla `t_productos`](#41-tabla-t_productos)
  - [4.2 Tabla `t_marcas`](#42-tabla-t_marcas)
  - [4.3 Tabla `t_categorias`](#43-tabla-t_categorias)
  - [4.4 Tabla `t_producto_presentaciones`](#44-tabla-t_producto_presentaciones)
  - [4.5 Tabla `t_producto_codigos`](#45-tabla-t_producto_codigos)
  - [4.6 Tabla `t_producto_precios`](#46-tabla-t_producto_precios)
- [5. Inventario](#5-inventario)
  - [5.1 Tabla `t_almacenes`](#51-tabla-t_almacenes)
  - [5.2 Tabla `t_inventario_stock`](#52-tabla-t_inventario_stock)
  - [5.3 Tabla `t_inventario_lotes`](#53-tabla-t_inventario_lotes)
  - [5.4 Tabla `t_inventario_movimientos`](#54-tabla-t_inventario_movimientos)
  - [5.5 Tabla `t_inventario_ajustes`](#55-tabla-t_inventario_ajustes)
  - [5.6 Tabla `t_inventario_ajuste_detalles`](#56-tabla-t_inventario_ajuste_detalles)
- [6. Compras](#6-compras)
  - [6.1 Tabla `t_compras`](#61-tabla-t_compras)
  - [6.2 Tabla `t_compra_detalles`](#62-tabla-t_compra_detalles)
  - [6.3 Tabla `t_proveedores`](#63-tabla-t_proveedores)
- [7. Ventas](#7-ventas)
  - [7.1 Tabla `t_ventas`](#71-tabla-t_ventas)
  - [7.2 Tabla `t_venta_detalles`](#72-tabla-t_venta_detalles)
- [8. Kardex comercial](#8-kardex-comercial)
- [9. Flujo de inventario recomendado](#9-flujo-de-inventario-recomendado)
- [10. Tabla plana para importacion inicial](#10-tabla-plana-para-importacion-inicial)
- [11. Reglas de negocio importantes](#11-reglas-de-negocio-importantes)
- [12. Consultas comerciales soportadas](#12-consultas-comerciales-soportadas)
- [13. Campos minimos para implementar primero](#13-campos-minimos-para-implementar-primero)
- [14. Recomendacion final](#14-recomendacion-final)

## 1. Principios de diseno

- Un producto base puede tener varias presentaciones.
- Cada presentacion puede tener SKU y codigo de barras propio.
- El precio pertenece a la presentacion, no solo al producto base.
- El inventario se controla por presentacion, almacen y lote si corresponde.
- Toda entrada o salida debe generar un movimiento de inventario.
- El stock actual puede guardarse para rapidez, pero debe poder auditarse con movimientos.
- Las ventas descuentan stock.
- Las compras aumentan stock.
- Las anulaciones deben generar movimientos inversos, no borrar historial.
- Los productos perecibles deben permitir lote y vencimiento.

## 2. Convenciones del modelo

| Convencion | Descripcion |
|---|---|
| `id_*` | Identificador interno de cada tabla. |
| `estado_*` | Estado funcional del registro. No debe usarse borrado fisico para informacion historica. |
| `fecha_creacion` | Fecha en que se registra el dato. |
| `fecha_modificacion` | Ultima fecha de actualizacion del dato. |
| `DECIMAL(12,3)` | Recomendado para cantidades porque permite unidades enteras, peso y volumen. |
| `DECIMAL(10,2)` | Recomendado para precios de venta. |
| `DECIMAL(10,4)` | Recomendado para costos unitarios y costo promedio. |
| `PEN` | Moneda por defecto para el contexto peruano. |

## 3. Vista general del modelo

```text
t_marcas
  1 --- * t_productos

t_categorias
  1 --- * t_productos
  1 --- * t_categorias

t_productos
  1 --- * t_producto_presentaciones

t_producto_presentaciones
  1 --- * t_producto_codigos
  1 --- * t_producto_precios
  1 --- * t_inventario_stock
  1 --- * t_inventario_lotes
  1 --- * t_inventario_movimientos

t_almacenes
  1 --- * t_inventario_stock
  1 --- * t_inventario_movimientos

t_compras
  1 --- * t_compra_detalles
  1 --- * t_inventario_movimientos

t_ventas
  1 --- * t_venta_detalles
  1 --- * t_inventario_movimientos
```

### 3.1 Resumen de entidades

| Entidad | Proposito principal | Area |
|---|---|---|
| `t_productos` | Define el producto base. | Catalogo |
| `t_marcas` | Normaliza marcas comerciales. | Catalogo |
| `t_categorias` | Organiza categorias y subcategorias. | Catalogo |
| `t_producto_presentaciones` | Define la forma exacta de venta o compra. | Catalogo |
| `t_producto_codigos` | Registra codigos de barras, SKU, PLU u otros. | Catalogo |
| `t_producto_precios` | Controla precios vigentes e historicos. | Catalogo |
| `t_almacenes` | Define ubicaciones donde se guarda stock. | Inventario |
| `t_inventario_stock` | Guarda stock actual para consulta rapida. | Inventario |
| `t_inventario_lotes` | Controla lote, vencimiento y costo de entrada. | Inventario |
| `t_inventario_movimientos` | Explica cada entrada, salida o ajuste de stock. | Inventario |
| `t_inventario_ajustes` | Registra documentos de ajuste. | Inventario |
| `t_inventario_ajuste_detalles` | Detalla productos ajustados. | Inventario |
| `t_compras` | Registra compras a proveedores. | Compras |
| `t_compra_detalles` | Detalla productos comprados. | Compras |
| `t_proveedores` | Registra datos basicos de proveedores. | Compras |
| `t_ventas` | Registra ventas a clientes. | Ventas |
| `t_venta_detalles` | Detalla productos vendidos y precio aplicado. | Ventas |

## 4. Catalogo de productos

El catalogo define que se vende, como se identifica y que precio tiene. No debe mezclarse con movimientos de stock, porque el inventario pertenece al flujo operativo.

### 4.1 Tabla `t_productos`

Representa el producto comercial base. No define todavia una botella, bolsa, caja o pack especifico.

Ejemplos:

- KR
- Arroz Costeño
- Aceite Primor
- Leche Gloria
- Shampoo Head & Shoulders

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_producto | BIGINT | Si | 1001 | Identificador interno del producto |
| nombre_producto | VARCHAR(200) | Si | KR | Nombre comercial base |
| descripcion_producto | TEXT | No | Gaseosa sabor naranja | Texto descriptivo |
| id_marca | BIGINT | No | 10 | Marca asociada |
| id_categoria | BIGINT | Si | 1 | Categoria principal |
| id_subcategoria | BIGINT | No | 11 | Categoria hija |
| tipo_producto | ENUM | Si | producto | `producto`, `servicio`, `insumo`, `combo` |
| es_perecible | BOOLEAN | Si | true | Indica si puede vencer |
| requiere_lote | BOOLEAN | Si | true | Exige lote al comprar o ingresar stock |
| permite_venta_sin_stock | BOOLEAN | Si | false | Util para servicios o preventas |
| estado_producto | ENUM | Si | activo | `activo`, `inactivo`, `descontinuado` |
| imagen_url | VARCHAR(500) | No | /productos/kr.png | Imagen principal |
| fecha_creacion | DATETIME | Si | 2026-04-25 09:00:00 | Fecha de registro |
| fecha_modificacion | DATETIME | No | 2026-04-25 10:00:00 | Ultima modificacion |

### Ejemplos

| id_producto | nombre_producto | marca | categoria | subcategoria | tipo_producto | es_perecible | requiere_lote | estado |
|---:|---|---|---|---|---|:---:|:---:|---|
| 1001 | KR | IMS | Bebidas | Gaseosa | producto | Si | Si | activo |
| 1002 | Kris | IMS | Bebidas | Jugo | producto | Si | Si | activo |
| 1003 | Arroz Costeño | Costeño | Abarrotes | Arroz | producto | Si | Si | activo |
| 1004 | Bolsa biodegradable | Generico | Empaques | Bolsa | insumo | No | No | activo |
| 1005 | Delivery local | Xtore | Servicios | Entrega | servicio | No | No | activo |

### Analisis

Esta tabla permite reportes por producto base, aunque se venda en varias presentaciones. Por ejemplo, se puede consultar cuanto vendio `KR` sumando botella 350 ml, botella 625 ml y botella 1.5 L. Tambien permite desactivar un producto completo sin borrar sus ventas historicas.

### 4.2 Tabla `t_marcas`

Administra marcas comerciales.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_marca | BIGINT | Si | 10 | Identificador interno |
| nombre_marca | VARCHAR(120) | Si | IMS | Nombre de la marca |
| descripcion_marca | TEXT | No | Marca de bebidas | Detalle opcional |
| logo_url | VARCHAR(500) | No | /marcas/ims.png | Logo opcional |
| estado_marca | ENUM | Si | activo | `activo`, `inactivo` |

### Ejemplos

| id_marca | nombre_marca | descripcion | estado |
|---:|---|---|---|
| 10 | IMS | Bebidas gaseosas y jugos | activo |
| 11 | Costeño | Abarrotes | activo |
| 12 | Gloria | Lacteos | activo |
| 13 | Generico | Productos sin marca | activo |

### Analisis

La marca no debe escribirse como texto libre en cada producto, porque eso genera duplicados como `ims`, `IMS` o `I.M.S.`. Una tabla separada permite filtros limpios y reportes confiables.

### 4.3 Tabla `t_categorias`

Permite organizar el catalogo en niveles. Una misma tabla puede manejar categorias y subcategorias mediante `id_categoria_padre`.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_categoria | BIGINT | Si | 1 | Identificador interno |
| nombre_categoria | VARCHAR(120) | Si | Bebidas | Nombre visible |
| id_categoria_padre | BIGINT | No | null | Categoria superior |
| nivel | INT | Si | 1 | 1 categoria, 2 subcategoria |
| orden | INT | No | 10 | Orden visual |
| estado_categoria | ENUM | Si | activo | `activo`, `inactivo` |

### Ejemplos

| id_categoria | nombre_categoria | categoria_padre | nivel | estado |
|---:|---|---|---:|---|
| 1 | Bebidas | null | 1 | activo |
| 2 | Gaseosa | Bebidas | 2 | activo |
| 3 | Jugo | Bebidas | 2 | activo |
| 4 | Abarrotes | null | 1 | activo |
| 5 | Arroz | Abarrotes | 2 | activo |
| 6 | Fideos | Abarrotes | 2 | activo |
| 7 | Limpieza | null | 1 | activo |
| 8 | Detergente | Limpieza | 2 | activo |

### Analisis

Esta estructura sirve para ventas, inventario y reportes. Por ejemplo, un reporte mensual puede mostrar ventas por `Bebidas`, y luego detallar cuanto corresponde a `Gaseosa` y cuanto a `Jugo`.

### 4.4 Tabla `t_producto_presentaciones`

Representa la forma exacta que se vende, compra o almacena. Esta tabla es clave para un sistema comercial.

Un producto base puede tener varias presentaciones:

- KR botella 350 ml
- KR botella 625 ml
- KR botella 1.5 L
- KR pack x6 botella 350 ml

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_presentacion | BIGINT | Si | 5001 | Identificador interno |
| id_producto | BIGINT | Si | 1001 | Producto base |
| nombre_presentacion | VARCHAR(160) | Si | Botella 350 ml | Nombre del formato |
| variante | VARCHAR(120) | No | Naranja | Sabor, color, aroma o tipo |
| contenido_valor | DECIMAL(10,3) | No | 350 | Cantidad contenida |
| contenido_unidad | ENUM | No | ml | `ml`, `l`, `g`, `kg`, `un`, `m` |
| unidades_por_presentacion | DECIMAL(10,3) | Si | 1 | Cantidad interna de unidades |
| unidad_venta | ENUM | Si | unidad | `unidad`, `peso`, `volumen`, `paquete`, `caja` |
| unidad_inventario | ENUM | Si | unidad | Unidad usada para stock |
| factor_conversion_base | DECIMAL(12,4) | Si | 1 | Conversion frente a unidad base |
| sku | VARCHAR(80) | Si | BEB-KR-NAR-350 | Codigo interno unico |
| controla_stock | BOOLEAN | Si | true | Si afecta inventario |
| estado_presentacion | ENUM | Si | activo | `activo`, `inactivo`, `descontinuado` |

### Ejemplos

| id_presentacion | producto | variante | presentacion | contenido | unidades_por_presentacion | unidad_venta | sku |
|---:|---|---|---|---|---:|---|---|
| 5001 | KR | Naranja | Botella 350 ml | 350 ml | 1 | unidad | BEB-KR-NAR-350 |
| 5002 | KR | Naranja | Pack x6 botella 350 ml | 350 ml | 6 | paquete | BEB-KR-NAR-350-P6 |
| 5003 | Kris | Citrus Punch | Botella 1.5 L | 1.5 l | 1 | unidad | BEB-KRIS-CIT-1500 |
| 5004 | Arroz Costeño | Extra | Bolsa 5 kg | 5 kg | 1 | unidad | ABA-ARR-COS-5KG |
| 5005 | Platano de Seda | Maduro | A granel | 1 kg | 1 | peso | FRU-PLA-SED-KG |

### Analisis

La presentacion permite manejar correctamente productos parecidos pero no iguales. Una botella de 350 ml no debe compartir precio ni stock con una botella de 1.5 L. Tambien permite vender por peso, como frutas, verduras, carnes o granos a granel.

### 4.5 Tabla `t_producto_codigos`

Guarda codigos alternativos por presentacion: codigo de barras, codigo interno antiguo, codigo de proveedor o PLU para balanza.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_codigo | BIGINT | Si | 8001 | Identificador interno |
| id_presentacion | BIGINT | Si | 5001 | Presentacion relacionada |
| tipo_codigo | ENUM | Si | barras | `barras`, `sku`, `proveedor`, `plu`, `interno` |
| codigo | VARCHAR(100) | Si | 7750000000012 | Valor del codigo |
| es_principal | BOOLEAN | Si | true | Codigo preferido |
| estado_codigo | ENUM | Si | activo | `activo`, `inactivo` |

### Ejemplos

| id_codigo | presentacion | tipo_codigo | codigo | es_principal |
|---:|---|---|---|:---:|
| 8001 | KR Naranja Botella 350 ml | barras | 7750000000012 | Si |
| 8002 | KR Naranja Botella 350 ml | sku | BEB-KR-NAR-350 | No |
| 8003 | Platano de Seda kg | plu | 4011 | Si |
| 8004 | Arroz Costeño Bolsa 5 kg | proveedor | PROV-ARR-0005 | No |

### Analisis

Separar codigos evita limitar el sistema a un unico codigo de barras. En tiendas reales, un producto puede tener codigo de proveedor, codigo interno, codigo de balanza o incluso varios codigos de barras por cambios de empaque.

### 4.6 Tabla `t_producto_precios`

Registra precios actuales e historicos por presentacion.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_precio | BIGINT | Si | 9001 | Identificador interno |
| id_presentacion | BIGINT | Si | 5001 | Presentacion comercial |
| precio_compra_referencial | DECIMAL(10,2) | No | 0.75 | Costo base esperado |
| precio_venta | DECIMAL(10,2) | Si | 1.00 | Precio al cliente |
| precio_mayorista | DECIMAL(10,2) | No | 0.90 | Precio por volumen |
| cantidad_minima_mayorista | DECIMAL(12,3) | No | 12 | Minimo para mayorista |
| moneda | CHAR(3) | Si | PEN | Moneda |
| incluye_igv | BOOLEAN | Si | true | Indica si incluye impuesto |
| fecha_inicio | DATETIME | Si | 2026-04-25 00:00:00 | Inicio de vigencia |
| fecha_fin | DATETIME | No | null | Fin de vigencia |
| estado_precio | ENUM | Si | vigente | `programado`, `vigente`, `vencido` |

### Ejemplos

| presentacion | precio_compra_ref | precio_venta | precio_mayorista | minimo_mayorista | estado |
|---|---:|---:|---:|---:|---|
| KR Naranja Botella 350 ml | 0.75 | 1.00 | 0.90 | 12 | vigente |
| KR Naranja Pack x6 | 4.50 | 5.50 | 5.20 | 4 | vigente |
| Arroz Costeño Bolsa 5 kg | 19.50 | 23.90 | 22.50 | 6 | vigente |
| Platano de Seda kg | 2.20 | 3.50 | null | null | vigente |

### Analisis

El precio historico permite saber con que precio se vendia un producto en una fecha anterior. Para ventas ya emitidas, el precio debe quedar copiado en el detalle de venta, porque el historial del producto puede cambiar despues.

## 5. Inventario

El inventario controla donde esta el producto, cuanto stock existe, que lote lo compone y que movimientos explican cada entrada o salida.

### 5.1 Tabla `t_almacenes`

Representa lugares donde se guarda stock. En una tienda pequena puede existir un solo almacen, pero conviene modelarlo desde el inicio.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_almacen | BIGINT | Si | 1 | Identificador |
| nombre_almacen | VARCHAR(120) | Si | Tienda principal | Nombre visible |
| tipo_almacen | ENUM | Si | tienda | `tienda`, `deposito`, `merma`, `transito` |
| direccion | TEXT | No | Av. Principal 123 | Ubicacion |
| estado_almacen | ENUM | Si | activo | `activo`, `inactivo` |

### Ejemplos

| id_almacen | nombre_almacen | tipo_almacen | estado |
|---:|---|---|---|
| 1 | Tienda principal | tienda | activo |
| 2 | Deposito interno | deposito | activo |
| 3 | Merma y vencidos | merma | activo |
| 4 | Mercaderia en transito | transito | activo |

### Analisis

Separar almacenes permite saber si el producto esta disponible para venta, guardado en deposito, en transito o separado por merma. Esto evita vender stock que existe fisicamente pero no esta disponible.

### 5.2 Tabla `t_inventario_stock`

Guarda el stock actual por presentacion, almacen y opcionalmente lote. Es una tabla de consulta rapida.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_stock | BIGINT | Si | 3001 | Identificador |
| id_presentacion | BIGINT | Si | 5001 | Presentacion |
| id_almacen | BIGINT | Si | 1 | Almacen |
| id_lote | BIGINT | No | 7001 | Lote si aplica |
| stock_actual | DECIMAL(12,3) | Si | 36 | Cantidad disponible |
| stock_reservado | DECIMAL(12,3) | Si | 2 | Apartado para pedidos |
| stock_disponible | DECIMAL(12,3) | Si | 34 | Actual menos reservado |
| stock_minimo | DECIMAL(12,3) | Si | 12 | Punto de alerta |
| stock_maximo | DECIMAL(12,3) | No | 120 | Limite sugerido |
| costo_promedio | DECIMAL(10,4) | No | 0.7600 | Costo promedio |
| fecha_ultimo_movimiento | DATETIME | No | 2026-04-25 12:30:00 | Ultima actualizacion |

### Ejemplos

| presentacion | almacen | lote | stock_actual | reservado | disponible | minimo | maximo |
|---|---|---|---:|---:|---:|---:|---:|
| KR Naranja Botella 350 ml | Tienda principal | LT-KR-001 | 36 | 2 | 34 | 12 | 120 |
| KR Naranja Botella 350 ml | Deposito interno | LT-KR-001 | 80 | 0 | 80 | 24 | 240 |
| Arroz Costeño Bolsa 5 kg | Tienda principal | LT-ARR-045 | 20 | 0 | 20 | 5 | 60 |
| Platano de Seda kg | Tienda principal | null | 18.750 | 0 | 18.750 | 5 | 40 |

### Analisis

Esta tabla no reemplaza al kardex. Sirve para consultar rapido cuanto stock hay. El historial real esta en `t_inventario_movimientos`. Si hay una diferencia entre stock actual y movimientos acumulados, el sistema debe permitir una auditoria y ajuste.

### 5.3 Tabla `t_inventario_lotes`

Controla lote, fecha de vencimiento y costo de entrada. Es importante para FEFO: primero vence, primero sale.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_lote | BIGINT | Si | 7001 | Identificador |
| id_presentacion | BIGINT | Si | 5001 | Presentacion |
| codigo_lote | VARCHAR(100) | No | LT-KR-001 | Codigo del lote |
| fecha_fabricacion | DATE | No | 2026-01-10 | Fecha de produccion |
| fecha_vencimiento | DATE | No | 2026-12-31 | Vencimiento |
| costo_unitario | DECIMAL(10,4) | No | 0.7500 | Costo de ingreso |
| estado_lote | ENUM | Si | disponible | `disponible`, `agotado`, `vencido`, `bloqueado` |

### Ejemplos

| id_lote | presentacion | codigo_lote | vencimiento | costo_unitario | estado |
|---:|---|---|---|---:|---|
| 7001 | KR Naranja Botella 350 ml | LT-KR-001 | 2026-12-31 | 0.7500 | disponible |
| 7002 | Kris Citrus Botella 1.5 L | LT-KRIS-018 | 2026-11-30 | 4.8000 | disponible |
| 7003 | Leche Gloria Tarro 400 g | LT-LEC-200 | 2026-07-15 | 3.1000 | disponible |
| 7004 | Yogurt Fresa 1 L | LT-YOG-010 | 2026-04-20 | 5.2000 | vencido |

### Analisis

Para productos perecibles, el lote permite bloquear productos vencidos, priorizar salida por vencimiento y reportar alertas. Si el negocio no quiere manejar lote en todos los productos, puede exigirlo solo cuando `requiere_lote = true`.

### 5.4 Tabla `t_inventario_movimientos`

Es la tabla central del inventario. Cada movimiento explica una entrada, salida o ajuste.

### Tipos de movimiento

| Tipo | Efecto | Ejemplo |
|---|---:|---|
| entrada_compra | Suma | Compra a proveedor |
| entrada_devolucion_cliente | Suma | Cliente devuelve producto |
| entrada_ajuste | Suma | Correccion por conteo fisico |
| salida_venta | Resta | Venta en caja |
| salida_devolucion_proveedor | Resta | Devolucion a proveedor |
| salida_merma | Resta | Vencido, roto, perdido |
| salida_ajuste | Resta | Correccion por conteo fisico |
| traslado_salida | Resta | Sale de un almacen |
| traslado_entrada | Suma | Entra a otro almacen |
| anulacion_movimiento | Inverso | Reversa controlada |

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_movimiento | BIGINT | Si | 4001 | Identificador |
| id_presentacion | BIGINT | Si | 5001 | Producto/presentacion afectada |
| id_almacen | BIGINT | Si | 1 | Almacen afectado |
| id_lote | BIGINT | No | 7001 | Lote afectado |
| tipo_movimiento | ENUM | Si | salida_venta | Tipo de movimiento |
| direccion | ENUM | Si | salida | `entrada`, `salida` |
| cantidad | DECIMAL(12,3) | Si | 2 | Cantidad movida |
| costo_unitario | DECIMAL(10,4) | No | 0.7500 | Costo al momento |
| precio_unitario | DECIMAL(10,2) | No | 1.00 | Precio si viene de venta |
| stock_antes | DECIMAL(12,3) | Si | 36 | Stock antes del movimiento |
| stock_despues | DECIMAL(12,3) | Si | 34 | Stock luego del movimiento |
| motivo | VARCHAR(200) | No | Venta registrada | Explicacion corta |
| documento_origen_tipo | ENUM | No | venta | `compra`, `venta`, `ajuste`, `traslado`, `devolucion` |
| documento_origen_id | BIGINT | No | 15001 | ID de venta, compra, ajuste, etc. |
| id_usuario | BIGINT | Si | 1 | Usuario responsable |
| fecha_movimiento | DATETIME | Si | 2026-04-25 13:10:00 | Fecha real del movimiento |
| estado_movimiento | ENUM | Si | confirmado | `pendiente`, `confirmado`, `anulado` |

### Ejemplos

| id_movimiento | presentacion | almacen | tipo | direccion | cantidad | stock_antes | stock_despues | origen |
|---:|---|---|---|---|---:|---:|---:|---|
| 4001 | KR Naranja Botella 350 ml | Tienda principal | entrada_compra | entrada | 48 | 0 | 48 | compra 900 |
| 4002 | KR Naranja Botella 350 ml | Tienda principal | salida_venta | salida | 2 | 48 | 46 | venta 15001 |
| 4003 | KR Naranja Botella 350 ml | Tienda principal | salida_merma | salida | 1 | 46 | 45 | ajuste 300 |
| 4004 | Arroz Costeño Bolsa 5 kg | Deposito interno | traslado_salida | salida | 10 | 50 | 40 | traslado 88 |
| 4005 | Arroz Costeño Bolsa 5 kg | Tienda principal | traslado_entrada | entrada | 10 | 12 | 22 | traslado 88 |

### Analisis comercial

Esta tabla permite responder preguntas clave:

- Cuanto stock habia antes y despues de una venta.
- Que usuario realizo un ajuste.
- Que compra aumento el stock.
- Que venta descuento unidades.
- Que productos se perdieron por merma.
- Que lote fue vendido.
- Por que el stock actual no coincide con el conteo fisico.

No conviene borrar movimientos. Si se anula una venta o compra, se debe crear un movimiento inverso o marcar el movimiento como anulado con trazabilidad.

### 5.5 Tabla `t_inventario_ajustes`

Registra documentos de ajuste. El detalle real de cantidades tambien debe reflejarse en movimientos.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_ajuste | BIGINT | Si | 300 | Identificador |
| tipo_ajuste | ENUM | Si | conteo_fisico | `conteo_fisico`, `merma`, `correccion`, `vencimiento` |
| motivo | TEXT | Si | Conteo de cierre | Motivo general |
| estado_ajuste | ENUM | Si | confirmado | `borrador`, `confirmado`, `anulado` |
| id_usuario | BIGINT | Si | 1 | Usuario responsable |
| fecha_ajuste | DATETIME | Si | 2026-04-25 20:00:00 | Fecha |

### Ejemplos

| id_ajuste | tipo_ajuste | motivo | estado | usuario |
|---:|---|---|---|---|
| 300 | conteo_fisico | Conteo de cierre diario | confirmado | Anderson |
| 301 | merma | Botellas rotas en exhibicion | confirmado | Carlos |
| 302 | vencimiento | Yogurt vencido retirado | confirmado | Lucia |

### Analisis

Los ajustes deben estar restringidos por permisos, porque modifican stock sin compra o venta. Para control comercial, cada ajuste debe tener motivo, usuario, fecha y detalle.

### 5.6 Tabla `t_inventario_ajuste_detalles`

Detalle de productos incluidos en un ajuste.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_ajuste_detalle | BIGINT | Si | 3010 | Identificador |
| id_ajuste | BIGINT | Si | 300 | Documento padre |
| id_presentacion | BIGINT | Si | 5001 | Presentacion |
| id_almacen | BIGINT | Si | 1 | Almacen |
| id_lote | BIGINT | No | 7001 | Lote |
| stock_sistema | DECIMAL(12,3) | Si | 45 | Stock antes del conteo |
| stock_fisico | DECIMAL(12,3) | Si | 44 | Stock contado |
| diferencia | DECIMAL(12,3) | Si | -1 | Fisico menos sistema |
| observacion | VARCHAR(250) | No | Botella rota | Nota |

### Ejemplos

| ajuste | presentacion | stock_sistema | stock_fisico | diferencia | movimiento generado |
|---:|---|---:|---:|---:|---|
| 300 | KR Naranja Botella 350 ml | 45 | 44 | -1 | salida_ajuste |
| 300 | Arroz Costeño Bolsa 5 kg | 22 | 24 | 2 | entrada_ajuste |
| 302 | Yogurt Fresa 1 L | 8 | 0 | -8 | salida_merma |

### Analisis

El ajuste no debe modificar stock de forma silenciosa. Al confirmar el ajuste, el sistema debe crear los movimientos de entrada o salida necesarios.

## 6. Compras

Las compras representan entradas comerciales desde proveedores. Al confirmarse, deben generar movimientos de inventario y actualizar stock.

### 6.1 Tabla `t_compras`

Documento comercial que registra ingreso de mercaderia desde proveedor.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_compra | BIGINT | Si | 900 | Identificador |
| id_proveedor | BIGINT | Si | 50 | Proveedor |
| tipo_comprobante | ENUM | No | factura | `factura`, `boleta`, `ticket`, `nota_venta`, `sin_comprobante` |
| serie_comprobante | VARCHAR(20) | No | F001 | Serie |
| numero_comprobante | VARCHAR(30) | No | 000123 | Numero |
| fecha_compra | DATETIME | Si | 2026-04-25 08:30:00 | Fecha de compra |
| subtotal | DECIMAL(10,2) | Si | 360.00 | Subtotal |
| impuesto | DECIMAL(10,2) | Si | 64.80 | IGV u otro |
| total | DECIMAL(10,2) | Si | 424.80 | Total |
| estado_compra | ENUM | Si | confirmado | `borrador`, `confirmado`, `anulado` |

### Analisis

Al confirmar una compra se deben generar movimientos `entrada_compra`. Si la compra se anula, se debe validar si aun existe stock suficiente para revertir la entrada.

### 6.2 Tabla `t_compra_detalles`

Detalle de productos comprados.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_compra_detalle | BIGINT | Si | 9101 | Identificador |
| id_compra | BIGINT | Si | 900 | Compra padre |
| id_presentacion | BIGINT | Si | 5001 | Presentacion comprada |
| id_almacen_destino | BIGINT | Si | 1 | Donde ingresa |
| cantidad | DECIMAL(12,3) | Si | 48 | Cantidad comprada |
| costo_unitario | DECIMAL(10,4) | Si | 0.7500 | Costo por unidad |
| descuento | DECIMAL(10,2) | Si | 0.00 | Descuento |
| subtotal | DECIMAL(10,2) | Si | 36.00 | Total de linea |
| codigo_lote | VARCHAR(100) | No | LT-KR-001 | Lote |
| fecha_vencimiento | DATE | No | 2026-12-31 | Vencimiento |

### Ejemplos

| compra | presentacion | cantidad | costo_unitario | almacen | lote | vencimiento |
|---:|---|---:|---:|---|---|---|
| 900 | KR Naranja Botella 350 ml | 48 | 0.7500 | Tienda principal | LT-KR-001 | 2026-12-31 |
| 900 | Arroz Costeño Bolsa 5 kg | 20 | 19.5000 | Deposito interno | LT-ARR-045 | 2027-01-31 |
| 901 | Platano de Seda kg | 25.500 | 2.2000 | Tienda principal | null | null |

### Analisis

La compra alimenta el costo promedio y el stock. Para productos con vencimiento, el detalle debe crear o asociar un lote.

### 6.3 Tabla `t_proveedores`

Datos basicos de proveedores para compras.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_proveedor | BIGINT | Si | 50 | Identificador |
| razon_social | VARCHAR(200) | Si | Distribuidora Lima SAC | Nombre legal |
| ruc | VARCHAR(20) | No | 20123456789 | Documento tributario |
| telefono | VARCHAR(30) | No | 999888777 | Contacto |
| email | VARCHAR(255) | No | ventas@proveedor.pe | Correo |
| direccion | TEXT | No | Lima | Direccion |
| estado_proveedor | ENUM | Si | activo | `activo`, `inactivo` |

### Analisis

Los proveedores permiten analizar costos, compras por periodo, productos mas comprados y comparacion de precios por proveedor.

## 7. Ventas

Las ventas representan salidas comerciales hacia clientes. Al confirmarse, deben descontar stock y guardar el precio aplicado en ese momento.

### 7.1 Tabla `t_ventas`

Documento comercial de salida al cliente.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_venta | BIGINT | Si | 15001 | Identificador |
| id_cliente | BIGINT | No | 200 | Cliente opcional |
| id_usuario | BIGINT | Si | 2 | Cajero o vendedor |
| tipo_comprobante | ENUM | Si | ticket | `ticket`, `boleta`, `factura`, `nota_venta` |
| fecha_venta | DATETIME | Si | 2026-04-25 13:10:00 | Fecha |
| subtotal | DECIMAL(10,2) | Si | 18.00 | Subtotal |
| descuento_total | DECIMAL(10,2) | Si | 0.00 | Descuento |
| impuesto | DECIMAL(10,2) | Si | 3.24 | Impuesto |
| total | DECIMAL(10,2) | Si | 21.24 | Total |
| estado_venta | ENUM | Si | confirmado | `borrador`, `confirmado`, `anulado` |

### Analisis

Al confirmar una venta se deben generar movimientos `salida_venta`. Si el producto controla stock, el sistema debe validar disponibilidad antes de confirmar. Si se anula la venta, se debe generar entrada por anulacion o devolucion, segun la politica comercial.

### 7.2 Tabla `t_venta_detalles`

Detalle de productos vendidos. Debe guardar el precio usado en ese momento.

### Campos

| Campo | Tipo sugerido | Obligatorio | Ejemplo | Descripcion |
|---|---:|:---:|---|---|
| id_venta_detalle | BIGINT | Si | 15100 | Identificador |
| id_venta | BIGINT | Si | 15001 | Venta padre |
| id_presentacion | BIGINT | Si | 5001 | Presentacion vendida |
| id_almacen_origen | BIGINT | Si | 1 | De donde sale el stock |
| id_lote | BIGINT | No | 7001 | Lote usado |
| cantidad | DECIMAL(12,3) | Si | 2 | Cantidad vendida |
| precio_unitario | DECIMAL(10,2) | Si | 1.00 | Precio aplicado |
| descuento | DECIMAL(10,2) | Si | 0.00 | Descuento de linea |
| subtotal | DECIMAL(10,2) | Si | 2.00 | Total de linea |
| costo_unitario | DECIMAL(10,4) | No | 0.7500 | Costo para utilidad |

### Ejemplos

| venta | presentacion | cantidad | precio_unitario | subtotal | movimiento |
|---:|---|---:|---:|---:|---|
| 15001 | KR Naranja Botella 350 ml | 2 | 1.00 | 2.00 | salida_venta |
| 15001 | Arroz Costeño Bolsa 5 kg | 1 | 23.90 | 23.90 | salida_venta |
| 15002 | Platano de Seda kg | 1.250 | 3.50 | 4.38 | salida_venta |

### Analisis

El detalle de venta no debe depender del precio actual del producto. Si manana sube el precio, la venta antigua debe seguir mostrando el precio real usado el dia que se vendio.

## 8. Kardex comercial

El kardex no necesariamente requiere una tabla separada. Puede ser una consulta sobre `t_inventario_movimientos`.

### Formato sugerido

| Fecha | Documento | Tipo | Entrada | Salida | Stock final | Costo unitario | Usuario |
|---|---|---|---:|---:|---:|---:|---|
| 2026-04-25 08:30 | Compra 900 | entrada_compra | 48 | 0 | 48 | 0.7500 | Anderson |
| 2026-04-25 13:10 | Venta 15001 | salida_venta | 0 | 2 | 46 | 0.7500 | Lucia |
| 2026-04-25 16:20 | Ajuste 301 | salida_merma | 0 | 1 | 45 | 0.7500 | Carlos |
| 2026-04-25 20:00 | Ajuste 300 | salida_ajuste | 0 | 1 | 44 | 0.7500 | Anderson |

### Analisis

El kardex permite auditar la historia de un producto. Para un sistema comercial es mas importante que el simple stock actual, porque explica de donde viene cada cantidad.

## 9. Flujo de inventario recomendado

### Compra confirmada

1. Se registra la compra.
2. Se registran detalles con presentacion, cantidad, costo y lote si aplica.
3. Al confirmar, se crean movimientos `entrada_compra`.
4. Se actualiza `t_inventario_stock`.
5. Se recalcula costo promedio si el sistema lo usa.

### Venta confirmada

1. El cajero escanea o busca producto.
2. El sistema identifica la presentacion.
3. Se valida stock disponible si `controla_stock = true`.
4. Al confirmar, se crean movimientos `salida_venta`.
5. Se actualiza `t_inventario_stock`.
6. Se guarda precio y costo en el detalle de venta.

### Ajuste de inventario

1. El usuario registra stock fisico.
2. El sistema calcula diferencia contra stock del sistema.
3. Se confirma el ajuste con motivo.
4. Se crean movimientos `entrada_ajuste`, `salida_ajuste` o `salida_merma`.
5. Se actualiza stock.

### Traslado entre almacenes

1. Se crea documento de traslado.
2. Se genera `traslado_salida` en almacen origen.
3. Se genera `traslado_entrada` en almacen destino.
4. Ambos movimientos deben quedar vinculados al mismo documento.

## 10. Tabla plana para importacion inicial

Esta tabla sirve para cargar datos desde Excel o CSV antes de normalizar.

| sku | codigo_barras | nombre_producto | marca | categoria | subcategoria | variante | presentacion | contenido_valor | contenido_unidad | unidad_venta | precio_compra | precio_venta | stock_actual | stock_minimo | almacen | lote | vencimiento |
|---|---|---|---|---|---|---|---|---:|---|---|---:|---:|---:|---:|---|---|---|
| BEB-KR-NAR-350 | 7750000000012 | KR | IMS | Bebidas | Gaseosa | Naranja | Botella 350 ml | 350 | ml | unidad | 0.75 | 1.00 | 36 | 12 | Tienda principal | LT-KR-001 | 2026-12-31 |
| BEB-KR-NAR-P6 | 7750000000015 | KR | IMS | Bebidas | Gaseosa | Naranja | Pack x6 botella 350 ml | 350 | ml | paquete | 4.50 | 5.50 | 10 | 3 | Tienda principal | LT-KR-001 | 2026-12-31 |
| BEB-KRIS-CIT-1500 | 7750000000013 | Kris | IMS | Bebidas | Jugo | Citrus Punch | Botella 1.5 L | 1.5 | l | unidad | 4.80 | 6.00 | 18 | 6 | Tienda principal | LT-KRIS-018 | 2026-11-30 |
| BEB-LOA-PIN-625 | 7750000000014 | Loa | IMS | Bebidas | Gaseosa | Piña | Botella 625 ml | 625 | ml | unidad | 1.10 | 1.50 | 24 | 8 | Tienda principal | LT-LOA-020 | 2026-10-31 |
| ABA-ARR-COS-5KG | 7750000000101 | Arroz Costeño | Costeño | Abarrotes | Arroz | Extra | Bolsa 5 kg | 5 | kg | unidad | 19.50 | 23.90 | 20 | 5 | Deposito interno | LT-ARR-045 | 2027-01-31 |
| FRU-PLA-SED-KG | null | Platano de Seda | Generico | Frutas | Platano | Maduro | A granel | 1 | kg | peso | 2.20 | 3.50 | 18.750 | 5 | Tienda principal | null | null |
| LIM-DET-ACE-800 | 7750000000201 | Detergente Ace | Ace | Limpieza | Detergente | Floral | Bolsa 800 g | 800 | g | unidad | 6.80 | 8.50 | 16 | 6 | Tienda principal | LT-ACE-100 | 2028-04-30 |

## 11. Reglas de negocio importantes

- El SKU debe ser unico por presentacion.
- El codigo de barras debe ser unico cuando exista.
- Un producto puede no tener codigo de barras si se vende a granel.
- La venta debe descontar stock solo si la presentacion controla stock.
- No se debe permitir stock negativo salvo configuracion explicita.
- El stock disponible debe ser `stock_actual - stock_reservado`.
- Los ajustes deben requerir motivo y usuario.
- Los movimientos confirmados no deben borrarse.
- Las anulaciones deben generar trazabilidad.
- Los productos con vencimiento deben salir por FEFO cuando sea posible.
- Los servicios no deben afectar inventario.
- Los combos pueden descontar stock de sus componentes, no del combo como producto fisico.
- Las compras actualizan costo; las ventas guardan costo para calcular utilidad.

## 12. Consultas comerciales soportadas

- Productos con bajo stock.
- Productos agotados.
- Productos proximos a vencer.
- Margen por producto, categoria o marca.
- Rotacion de inventario.
- Kardex por producto.
- Mermas por periodo.
- Compras por proveedor.
- Ventas por presentacion.
- Productos mas vendidos.
- Stock valorizado a costo promedio.
- Diferencias por conteo fisico.

## 13. Campos minimos para implementar primero

Para una primera version funcional del modulo comercial:

| Modulo | Campos minimos |
|---|---|
| Producto | nombre, marca, categoria, subcategoria, estado |
| Presentacion | variante, presentacion, unidad_venta, sku, codigo_barras |
| Precio | precio_compra_referencial, precio_venta |
| Inventario | stock_actual, stock_minimo, almacen |
| Movimiento | tipo, direccion, cantidad, stock_antes, stock_despues, origen, usuario |
| Compra | proveedor, fecha, detalle, costo |
| Venta | fecha, detalle, precio, total |

## 14. Recomendacion final

Para un sistema comercial, la prioridad no es solo registrar productos, sino asegurar que cada operacion comercial deje evidencia:

- Compra: entrada de stock.
- Venta: salida de stock.
- Devolucion: movimiento inverso.
- Merma: salida justificada.
- Ajuste: correccion auditada.
- Traslado: salida y entrada entre almacenes.

Con esta base, el sistema puede crecer hacia promociones, multiples sucursales, control por caja, facturacion, reportes de utilidad y analisis de rotacion sin rehacer el modelo principal.
