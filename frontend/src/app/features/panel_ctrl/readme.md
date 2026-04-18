# Estructura del directorio `panel_ctrl`

```
panel_ctrl/
├── components/
│   ├── 1. crud-buttons/
│   │       1. crud-buttons.html
│   │       2. crud-buttons.scss
│   │       3. crud-buttons.ts
│   ├── 2. form1/
│   │       1. form1.html
│   │       2. form1.scss
│   │       3. form1.ts
│   └── 3. list-table/
│           1. list-table.html
│           2. list-table.scss
│           3. list-table.ts
├── layout/
│   └── 1. panel-layout/
├── readme.md
├── pages/
│   ├── 1. caja/
│   ├── 2. compras/
│   ├── 3. configuracion/
│   ├── 4. crud/
│   ├── 5. dashboard/
│   ├── 6. inventario/
│   ├── 7. productos/
│   │       1. productos.html
│   │       2. productos.scss
│   │       3. productos.ts
│   ├── 8. promociones/
│   ├── 9. reportes/
│   ├── 10. usuarios/
│   └── 11. ventas/
├── routes/
│   └── 1. panel_ctrl.routes.ts
```

## 7.  `/pages/productos`

7.1. **`productos.html`**: Define la estructura y el diseño de la interfaz de usuario para la sección de productos.
7.2. **`productos.scss`**: Contiene los estilos específicos para la sección de productos, asegurando un diseño responsivo y atractivo.
7.3. **`productos.ts`**: Implementa la lógica y el comportamiento de la sección de productos. Funciones principales:
   - `cargarProductos()`: Carga la lista de productos desde el servidor y los muestra en la interfaz.
   - `agregarProducto(producto)`: Añade un nuevo producto a la lista y lo envía al servidor.
   - `eliminarProducto(id)`: Elimina un producto de la lista y realiza la solicitud al servidor para eliminarlo.
   - `editarProducto(id, datos)`: Actualiza los datos de un producto existente y sincroniza los cambios con el servidor.
