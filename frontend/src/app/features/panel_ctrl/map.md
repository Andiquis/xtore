# Estructura del directorio `panel_ctrl`

```
panel_ctrl/
├── components/
│   ├── 1.1. crud-buttons/
│   │       1.1.1. crud-buttons.html
│   │       1.1.2. crud-buttons.scss
│   │       1.1.3. crud-buttons.ts
│   ├── 1.2. form1/
│   │       1.2.1. form1.html
│   │       1.2.2. form1.scss
│   │       1.2.3. form1.ts
│   └── 1.3. list-table/
│           1.3.1. list-table.html
│           1.3.2. list-table.scss
│           1.3.3. list-table.ts
├── layout/
│   └── 2.1. panel-layout/
├── map.md
├── pages/
│   ├── 4.1. caja/
│   ├── 4.2. compras/
│   ├── 4.3. configuracion/
│   ├── 4.4. crud/
│   ├── 4.5. dashboard/
│   ├── 4.6. inventario/
│   ├── 4.7. productos/
│   │       4.7.1. productos.html
│   │       4.7.2. productos.scss
│   │       4.7.3. productos.ts
│   ├── 4.8. promociones/
│   ├── 4.9. reportes/
│   ├── 4.10. usuarios/
│   └── 4.11. ventas/
├── routes/
│   └── 5.1. panel_ctrl.routes.ts
```

## 4.7. `/pages/productos`

4.7.1. **`productos.html`**: Define la estructura y el diseño de la interfaz de usuario para la sección de productos.
4.7.2. **`productos.scss`**: Contiene los estilos específicos para la sección de productos, asegurando un diseño responsivo y atractivo.
4.7.3. **`productos.ts`**: Implementa la lógica y el comportamiento de la sección de productos. Funciones principales:

- `cargarProductos()`: Carga la lista de productos desde el servidor y los muestra en la interfaz.
- `agregarProducto(producto)`: Añade un nuevo producto a la lista y lo envía al servidor.
- `eliminarProducto(id)`: Elimina un producto de la lista y realiza la solicitud al servidor para eliminarlo.
- `editarProducto(id, datos)`: Actualiza los datos de un producto existente y sincroniza los cambios con el servidor.
