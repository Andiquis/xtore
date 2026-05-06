# Módulo de Catálogo (API)

Este documento describe la estructura y los endpoints disponibles en el submódulo de Catálogo. El catálogo está diseñado con una arquitectura relacional sólida para manejar productos y sus múltiples formas de venta (presentaciones).

## Estructura de Entidades

La gestión del catálogo se divide en 6 entidades principales, cada una con su propio controlador y servicio:

1. **Marcas (`/catalogo/marcas`)**: Representa al fabricante o marca del producto.
2. **Categorías (`/catalogo/categorias`)**: Sistema jerárquico (soporta subcategorías) para clasificar los productos.
3. **Productos (`/catalogo/productos`)**: La entidad base que define qué es el artículo, relacionándolo obligatoriamente con una categoría, y opcionalmente con una marca.
4. **Presentaciones (`/catalogo/presentaciones`)**: Define cómo se vende físicamente el producto (Unidad, Caja, Blíster, etc). Es vital porque aquí reside el control de stock, el SKU, el código de barras principal y el factor de conversión.
5. **Códigos Alternativos (`/catalogo/codigos`)**: *(Por implementar)* Permite asignar múltiples códigos (EAN, UPC, código de proveedor) a una misma presentación.
6. **Precios (`/catalogo/precios`)**: *(Por implementar)* Lista de precios por presentación, soportando precio unitario y precio al por mayor.

---

## Endpoints Principales

Todos los endpoints respetan el estándar RESTful y están completamente documentados en Swagger (`/api/v1`).

### Marcas
- `GET /catalogo/marcas`: Lista todas las marcas ordenadas alfabéticamente.
- `GET /catalogo/marcas/:id`: Obtiene el detalle de una marca.
- `POST /catalogo/marcas`: Crea una marca.
- `PATCH /catalogo/marcas/:id`: Actualiza una marca.
- `DELETE /catalogo/marcas/:id`: Elimina una marca (Hard delete).

### Categorías
- `GET /catalogo/categorias`: Lista todas las categorías (incluye la información de su categoría padre).
- `GET /catalogo/categorias/:id`: Devuelve el detalle de la categoría, su categoría padre y la lista de subcategorías (hijos).
- `POST /catalogo/categorias`: Crea una categoría. Soporta `id_categoria_padre`.
- `PATCH /catalogo/categorias/:id`: Actualiza la categoría. Previene ciclos jerárquicos (no puede ser padre de sí misma).
- `DELETE /catalogo/categorias/:id`: Elimina una categoría.

### Productos
- `GET /catalogo/productos`: Lista los productos junto con sus referencias de marca y categoría resueltas.
- `GET /catalogo/productos/:id`: Obtiene el árbol completo del producto: Marca, Categoría y todas sus Presentaciones.
- `POST /catalogo/productos`: Crea un producto (requiere `id_categoria` obligatorio). Retorna 400 si la marca o categoría no existen.
- `PATCH /catalogo/productos/:id`: Actualiza datos generales del producto.
- `DELETE /catalogo/productos/:id`: Elimina un producto.

### Presentaciones
- `GET /catalogo/presentaciones`: Lista todas las formas en las que se venden los productos.
- `GET /catalogo/presentaciones/:id`: Trae el detalle de una presentación, su producto base y sus posibles precios o códigos (en el futuro).
- `POST /catalogo/presentaciones`: Agrega una presentación a un producto. Controla unicidad del SKU (Retorna HTTP 409 Conflict si el SKU ya existe).
- `PATCH /catalogo/presentaciones/:id`: Actualiza factor de conversión, stock flag o unidad de medida.
- `DELETE /catalogo/presentaciones/:id`: Elimina una presentación.

> **Nota**: El flujo recomendado de creación desde el Frontend es: 
> 1. Crear/Seleccionar Marca y Categoría.
> 2. Crear el Producto.
> 3. Crear una o más Presentaciones para dicho Producto.
> 4. *(Próximamente)* Asignar Precios a las presentaciones.
