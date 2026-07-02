# Panel de Control (`panel_ctrl`)

Este módulo contiene la estructura principal del panel administrativo de la aplicación. Aquí se agrupan el layout base, los componentes reutilizables, las páginas internas y la configuración de rutas del panel.

## Objetivo

El panel de control permite administrar las áreas principales del sistema:

- Dashboard general del negocio.
- Ventas y caja.
- Productos, marcas, presentaciones e inventario.
- Compras y proveedores.
- Usuarios, roles y permisos.
- Promociones.
- Reportes.
- Configuración general.

## Estructura del Directorio

```text
panel_ctrl/
├── components/
│   ├── crud-buttons/
│   │   ├── crud-buttons.html
│   │   ├── crud-buttons.scss
│   │   └── crud-buttons.ts
│   ├── form1/
│   │   ├── form1.html
│   │   ├── form1.scss
│   │   └── form1.ts
│   └── list-table/
│       ├── list-table.html
│       ├── list-table.scss
│       └── list-table.ts
├── layout/
│   └── panel-layout/
│       ├── panel-layout.html
│       ├── panel-layout.scss
│       └── panel-layout.ts
├── pages/
│   ├── caja/
│   ├── compras/
│   ├── configuracion/
│   ├── crud/
│   ├── dashboard/
│   ├── inventario/
│   ├── productos/
│   ├── promociones/
│   ├── reportes/
│   ├── usuarios/
│   └── ventas/
├── routes/
│   └── panel_ctrl.routes.ts
└── readme.md
```

## Responsabilidades por Carpeta

### `components/`

Contiene componentes reutilizables dentro del panel.

- `crud-buttons/`: Botones comunes para acciones CRUD como crear, editar, eliminar, guardar, cancelar o ver detalles.
- `form1/`: Formulario base reutilizable para capturar o editar información.
- `list-table/`: Tabla reutilizable para listar registros, mostrar estados, paginar, filtrar y ejecutar acciones.

### `layout/`

Contiene la estructura visual principal del panel.

- `panel-layout/`: Layout base que envuelve las páginas internas del panel. Debe incluir sidebar, header, área de contenido y contenedor para rutas hijas.

### `pages/`

Contiene las vistas principales del panel. Cada carpeta representa una sección funcional del sistema.

- `dashboard/`: Resumen general del estado del negocio.
- `ventas/`: Gestión y consulta de ventas.
- `productos/`: Administración de productos, marcas, presentaciones y datos relacionados.
- `inventario/`: Control de stock y movimientos de inventario.
- `compras/`: Registro y seguimiento de compras.
- `usuarios/`: Gestión de usuarios, roles y permisos.
- `caja/`: Control de caja, pagos, ingresos, egresos y cierres.
- `promociones/`: Administración de descuentos, campañas y reglas comerciales.
- `reportes/`: Visualización de reportes operativos, financieros y comerciales.
- `configuracion/`: Ajustes generales del sistema.
- `crud/`: Vista genérica o experimental para probar componentes CRUD reutilizables.

### `routes/`

Contiene la configuración de rutas internas del panel.

- `panel_ctrl.routes.ts`: Define las rutas hijas asociadas al panel administrativo.

## Layout Principal

El layout del panel debe organizar la navegación y el contenido de forma clara.

### Header

El header debe mostrar información contextual y accesos rápidos.

- Nombre de la sección actual.
- Ruta de navegación o breadcrumb.
- Buscador general.
- Icono de notificaciones.
- Alertas inteligentes basadas en ventas, inventario, clientes u operaciones.
- Nombre, rol e imagen del usuario autenticado.

### Sidebar

El sidebar debe permitir la navegación entre las secciones principales.

- Logo y nombre de la empresa.
- Enlace a Dashboard.
- Enlace a Ventas.
- Enlace a Productos.
- Enlace a Inventario.
- Enlace a Compras.
- Enlace a Usuarios.
- Enlace a Caja.
- Enlace a Promociones.
- Enlace a Reportes.
- Enlace a Configuración.
- Acción para cerrar sesión.

## Casos de Uso por Página

Esta sección describe qué debería contener cada página del panel: vistas, secciones internas, acciones, funciones esperadas y datos principales.

## Página Dashboard

Ruta sugerida: `/panel/dashboard`

El dashboard debe funcionar como la primera vista del panel y mostrar un resumen rápido del estado del negocio.

### Casos de Uso

- El administrador revisa el estado general del negocio al iniciar sesión.
- El encargado detecta ventas bajas, productos agotados o alertas importantes.
- El usuario accede rápidamente a ventas, inventario, productos o reportes.

### Secciones

- Banner de bienvenida con fecha actual.
- Tarjetas KPI con métricas principales.
- Resumen de ventas.
- Resumen de inventario.
- Resumen de clientes.
- Alertas importantes.
- Accesos rápidos.
- Gráficos de comportamiento.

### Vistas o Bloques Visuales

- Cards de KPIs.
- Gráfico de ventas por hora, día, semana o mes.
- Tabla corta de productos con bajo stock.
- Lista de alertas críticas.
- Ranking de productos más vendidos.
- Botones de acceso rápido a módulos principales.

### Funciones Esperadas

- `cargarResumenGeneral()`: Obtiene KPIs principales del negocio.
- `cargarVentasResumen(periodo)`: Obtiene ventas por día, semana, mes o rango personalizado.
- `cargarAlertas()`: Obtiene alertas de inventario, ventas, caja o usuarios.
- `cargarProductosMasVendidos()`: Obtiene el ranking de productos con mayor venta.
- `cargarResumenInventario()`: Obtiene productos agotados, bajo stock y rotación.

### Datos Principales

- Ventas del día.
- Ingresos totales.
- Cantidad de pedidos.
- Ticket promedio.
- Clientes atendidos.
- Productos con bajo stock.
- Productos agotados.
- Variación frente a periodos anteriores.

## Página Ventas

Ruta sugerida: `/panel/ventas`

Esta página administra el flujo de ventas, consulta de comprobantes y detalle de transacciones.

### Casos de Uso

- El vendedor registra una nueva venta.
- El administrador consulta ventas por fecha, cliente, usuario o método de pago.
- El encargado revisa el detalle de una venta específica.
- El usuario anula, imprime o reenvía un comprobante.

### Secciones 

- Listado de ventas.
- Registro de nueva venta.
- Detalle de venta.
- Filtros por fecha, cliente, estado, método de pago o vendedor.
- Resumen rápido de ventas del día.
- Historial de comprobantes.

### Vistas o Bloques Visuales

- Tabla de ventas.
- Formulario o pantalla de punto de venta.
- Modal de detalle de venta.
- Panel de totales.
- Selector de productos.
- Selector de cliente.
- Estado de comprobante.

### Funciones Esperadas

- `cargarVentas(filtros)`: Lista ventas según filtros aplicados.
- `crearVenta(venta)`: Registra una nueva venta.
- `agregarProductoAVenta(producto, cantidad)`: Agrega productos al carrito o detalle de venta.
- `calcularTotales()`: Calcula subtotal, descuentos, impuestos y total.
- `verDetalleVenta(id)`: Obtiene información completa de una venta.
- `anularVenta(id, motivo)`: Cambia el estado de una venta a anulada.
- `imprimirComprobante(id)`: Genera o imprime el comprobante.

### Datos Principales

- Cliente.
- Productos vendidos.
- Cantidades.
- Precios unitarios.
- Descuentos.
- Impuestos.
- Método de pago.
- Estado de venta.
- Usuario vendedor.
- Fecha y hora.

## Página Productos

Ruta sugerida: `/panel/productos`

Esta página debe funcionar como un módulo CRUD completo para administrar productos y datos relacionados como marcas, categorías, presentaciones, unidades de medida y atributos comerciales.

### Casos de Uso

- El administrador registra productos nuevos.
- El usuario edita precios, stock mínimo, códigos o descripciones.
- El encargado administra marcas disponibles.
- El encargado administra presentaciones como unidad, caja, paquete, botella o kilogramo.
- El administrador relaciona productos con categorías, marcas, proveedores o impuestos.
- El usuario activa, desactiva o elimina productos que ya no se venden.

### Secciones

- Catálogo de productos.
- Formulario de producto.
- Gestión de marcas.
- Gestión de categorías.
- Gestión de presentaciones.
- Gestión de unidades de medida.
- Gestión de códigos de barra o SKU.
- Configuración de precios.
- Configuración de stock mínimo y máximo.
- Productos relacionados o equivalentes.

### Vistas o Bloques Visuales

- Tabla principal de productos.
- Buscador por nombre, SKU, código de barras o marca.
- Filtros por categoría, marca, estado, stock o proveedor.
- Formulario para crear o editar producto.
- Modal para crear marca.
- Modal para crear categoría.
- Modal para crear presentación.
- Vista de detalle del producto.
- Badges de estado: activo, inactivo, agotado, bajo stock.
- Imagen o galería del producto.

### Funciones Esperadas de Productos

- `cargarProductos(filtros)`: Carga productos desde el servidor usando filtros opcionales.
- `obtenerProducto(id)`: Obtiene el detalle completo de un producto.
- `crearProducto(producto)`: Registra un nuevo producto.
- `editarProducto(id, datos)`: Actualiza información de un producto existente.
- `eliminarProducto(id)`: Elimina o desactiva un producto.
- `cambiarEstadoProducto(id, estado)`: Activa o desactiva un producto.
- `subirImagenProducto(id, imagen)`: Asocia una imagen al producto.
- `validarCodigoProducto(codigo)`: Verifica si un SKU o código de barras ya existe.

### Funciones Esperadas de Marcas

- `cargarMarcas()`: Lista marcas registradas.
- `crearMarca(marca)`: Crea una nueva marca.
- `editarMarca(id, datos)`: Actualiza una marca existente.
- `eliminarMarca(id)`: Elimina o desactiva una marca.

### Funciones Esperadas de Categorías

- `cargarCategorias()`: Lista categorías registradas.
- `crearCategoria(categoria)`: Crea una nueva categoría.
- `editarCategoria(id, datos)`: Actualiza una categoría existente.
- `eliminarCategoria(id)`: Elimina o desactiva una categoría.

### Funciones Esperadas de Presentaciones

- `cargarPresentaciones()`: Lista presentaciones disponibles.
- `crearPresentacion(presentacion)`: Crea una presentación nueva.
- `editarPresentacion(id, datos)`: Actualiza una presentación existente.
- `eliminarPresentacion(id)`: Elimina o desactiva una presentación.

### Datos Principales

- Nombre del producto.
- Descripción.
- SKU.
- Código de barras.
- Marca.
- Categoría.
- Presentación.
- Unidad de medida.
- Precio de compra.
- Precio de venta.
- Margen de ganancia.
- Stock mínimo.
- Stock máximo.
- Estado.
- Imagen.
- Proveedor principal.
- Impuestos asociados.

## Página Inventario

Ruta sugerida: `/panel/inventario`

Esta página controla existencias, movimientos, ajustes y alertas de stock.

### Casos de Uso

- El encargado consulta el stock actual de productos.
- El usuario registra entradas o salidas manuales.
- El administrador ajusta inventario por pérdida, merma, devolución o corrección.
- El sistema alerta productos con bajo stock o agotados.
- El encargado revisa el historial de movimientos de un producto.

### Secciones

- Stock actual.
- Movimientos de inventario.
- Ajustes de inventario.
- Alertas de stock.
- Kardex o historial por producto.
- Productos agotados.
- Productos con bajo stock.

### Vistas o Bloques Visuales

- Tabla de stock por producto.
- Tabla de movimientos.
- Formulario de entrada o salida.
- Modal de ajuste de stock.
- Cards de alertas.
- Filtros por producto, categoría, fecha o tipo de movimiento.

### Funciones Esperadas

- `cargarStock(filtros)`: Lista stock actual de productos.
- `cargarMovimientos(filtros)`: Lista movimientos de inventario.
- `registrarEntrada(data)`: Registra ingreso de unidades al inventario.
- `registrarSalida(data)`: Registra salida de unidades del inventario.
- `ajustarStock(data)`: Aplica correcciones manuales al stock.
- `cargarAlertasStock()`: Obtiene productos con bajo stock o agotados.
- `verKardexProducto(productoId)`: Obtiene historial completo de movimientos.

### Datos Principales

- Producto.
- Stock actual.
- Stock mínimo.
- Stock máximo.
- Tipo de movimiento.
- Cantidad.
- Motivo.
- Usuario responsable.
- Fecha y hora.

## Página Compras

Ruta sugerida: `/panel/compras`

Esta página administra compras a proveedores y permite actualizar inventario a partir de órdenes o registros de compra.

### Casos de Uso

- El encargado registra una compra nueva.
- El usuario selecciona proveedor y productos comprados.
- El sistema actualiza stock después de confirmar una compra.
- El administrador consulta compras por proveedor, fecha o estado.
- El encargado revisa pagos pendientes a proveedores.

### Secciones

- Listado de compras.
- Registro de compra.
- Detalle de compra.
- Proveedores.
- Estados de compra.
- Pagos o cuentas por pagar.

### Vistas o Bloques Visuales

- Tabla de compras.
- Formulario de compra.
- Selector de proveedor.
- Selector de productos.
- Panel de totales.
- Modal de detalle.
- Estado de recepción o pago.

### Funciones Esperadas

- `cargarCompras(filtros)`: Lista compras registradas.
- `crearCompra(compra)`: Registra una nueva compra.
- `agregarProductoACompra(producto, cantidad, costo)`: Agrega producto al detalle de compra.
- `confirmarCompra(id)`: Confirma compra y actualiza inventario.
- `verDetalleCompra(id)`: Obtiene el detalle completo de una compra.
- `anularCompra(id, motivo)`: Anula una compra si todavía es permitido.
- `cargarProveedores()`: Lista proveedores disponibles.

### Datos Principales

- Proveedor.
- Productos comprados.
- Cantidades.
- Costo unitario.
- Total.
- Estado de compra.
- Estado de pago.
- Fecha de compra.
- Usuario responsable.

## Página Usuarios

Ruta sugerida: `/panel/usuarios`

Esta página administra usuarios del sistema, roles, permisos y estado de acceso.

### Casos de Uso

- El administrador crea usuarios para empleados.
- El administrador asigna roles y permisos.
- El usuario autorizado edita datos de perfil.
- El administrador bloquea o desactiva cuentas.
- El sistema controla qué secciones puede ver cada usuario.

### Secciones

- Listado de usuarios.
- Formulario de usuario.
- Roles.
- Permisos.
- Estado de cuenta.
- Perfil de usuario.
- Historial de acceso.

### Vistas o Bloques Visuales

- Tabla de usuarios.
- Formulario de creación o edición.
- Selector de rol.
- Matriz de permisos.
- Badges de estado: activo, inactivo, bloqueado.
- Modal de cambio de contraseña.
- Vista de perfil.

### Funciones Esperadas

- `cargarUsuarios(filtros)`: Lista usuarios registrados.
- `crearUsuario(usuario)`: Crea un nuevo usuario.
- `editarUsuario(id, datos)`: Actualiza datos de usuario.
- `cambiarEstadoUsuario(id, estado)`: Activa, desactiva o bloquea usuario.
- `asignarRol(usuarioId, rolId)`: Asigna un rol a un usuario.
- `cargarRoles()`: Lista roles disponibles.
- `actualizarPermisos(rolId, permisos)`: Actualiza permisos de un rol.
- `restablecerPassword(usuarioId)`: Inicia proceso de cambio o recuperación de contraseña.

### Datos Principales

- Nombre.
- Apellido.
- Correo.
- Usuario.
- Rol.
- Permisos.
- Estado.
- Imagen de perfil.
- Último acceso.

## Página Caja

Ruta sugerida: `/panel/caja`

Esta página controla la apertura, movimientos y cierre de caja.

### Casos de Uso

- El cajero abre caja al iniciar turno.
- El cajero registra ingresos y egresos manuales.
- El usuario consulta pagos recibidos por método de pago.
- El encargado realiza cierre de caja.
- El administrador revisa diferencias entre efectivo esperado y efectivo contado.

### Secciones

- Apertura de caja.
- Resumen de caja actual.
- Movimientos de caja.
- Cierre de caja.
- Historial de cierres.
- Métodos de pago.

### Vistas o Bloques Visuales

- Card de caja abierta o cerrada.
- Tabla de movimientos.
- Formulario de ingreso o egreso.
- Panel de totales por método de pago.
- Modal de cierre de caja.
- Historial de cajas por fecha o usuario.

### Funciones Esperadas

- `verEstadoCaja()`: Consulta si existe una caja abierta.
- `abrirCaja(data)`: Registra apertura de caja.
- `registrarMovimientoCaja(data)`: Registra ingreso o egreso manual.
- `cargarMovimientosCaja(filtros)`: Lista movimientos.
- `calcularCierreCaja()`: Calcula totales esperados.
- `cerrarCaja(data)`: Registra cierre de caja.
- `cargarHistorialCajas(filtros)`: Lista cierres anteriores.

### Datos Principales

- Monto inicial.
- Ingresos.
- Egresos.
- Ventas en efectivo.
- Ventas con tarjeta.
- Otros métodos de pago.
- Monto esperado.
- Monto contado.
- Diferencia.
- Usuario responsable.

## Página Promociones

Ruta sugerida: `/panel/promociones`

Esta página administra descuentos, promociones comerciales y reglas aplicables a ventas.

### Casos de Uso

- El administrador crea una promoción por temporada.
- El usuario aplica descuentos a productos específicos.
- El sistema valida si una promoción está vigente.
- El administrador activa o desactiva promociones.
- El encargado revisa el rendimiento de promociones.

### Secciones

- Listado de promociones.
- Formulario de promoción.
- Reglas de descuento.
- Productos incluidos.
- Fechas de vigencia.
- Resultados o métricas de promoción.

### Vistas o Bloques Visuales

- Tabla de promociones.
- Formulario de creación o edición.
- Selector de productos o categorías.
- Selector de tipo de descuento.
- Calendario de vigencia.
- Badges de estado: activa, programada, vencida, pausada.

### Funciones Esperadas

- `cargarPromociones(filtros)`: Lista promociones registradas.
- `crearPromocion(promocion)`: Crea una nueva promoción.
- `editarPromocion(id, datos)`: Actualiza promoción existente.
- `cambiarEstadoPromocion(id, estado)`: Activa, pausa o desactiva promoción.
- `validarPromocion(data)`: Verifica reglas antes de aplicar descuento.
- `cargarProductosPromocion()`: Lista productos disponibles para promoción.
- `cargarMetricasPromocion(id)`: Obtiene resultados de una promoción.

### Datos Principales

- Nombre de promoción.
- Tipo de descuento.
- Valor del descuento.
- Fecha de inicio.
- Fecha de fin.
- Productos o categorías aplicables.
- Condiciones.
- Estado.

## Página Reportes

Ruta sugerida: `/panel/reportes`

Esta página centraliza reportes del negocio para análisis, seguimiento y toma de decisiones.

### Casos de Uso

- El administrador revisa ventas por periodo.
- El encargado exporta reportes de inventario.
- El usuario consulta productos más vendidos.
- El administrador compara ingresos, egresos y utilidad.
- El sistema genera reportes diarios, semanales o mensuales.

### Secciones

- Reporte de ventas.
- Reporte de inventario.
- Reporte de productos.
- Reporte de compras.
- Reporte de caja.
- Reporte de usuarios o actividad.
- Exportación de datos.

### Vistas o Bloques Visuales

- Selector de tipo de reporte.
- Filtros por fecha, usuario, producto, categoría o proveedor.
- Gráficos.
- Tablas detalladas.
- Cards de resumen.
- Botones para exportar PDF, Excel o CSV.

### Funciones Esperadas

- `generarReporteVentas(filtros)`: Obtiene reporte de ventas.
- `generarReporteInventario(filtros)`: Obtiene reporte de inventario.
- `generarReporteCompras(filtros)`: Obtiene reporte de compras.
- `generarReporteCaja(filtros)`: Obtiene reporte de caja.
- `exportarReporte(tipo, formato, filtros)`: Exporta reportes.
- `cargarMetricasComparativas(filtros)`: Obtiene comparaciones entre periodos.

### Datos Principales

- Periodo.
- Ventas totales.
- Compras totales.
- Utilidad estimada.
- Productos más vendidos.
- Movimientos de inventario.
- Métodos de pago.
- Usuario responsable.

## Página Configuración

Ruta sugerida: `/panel/configuracion`

Esta página administra parámetros generales del sistema y preferencias del negocio.

### Casos de Uso

- El administrador actualiza datos de la empresa.
- El usuario configura impuestos o moneda.
- El administrador define parámetros de ventas, inventario o caja.
- El sistema guarda preferencias visuales o de operación.
- El administrador configura integraciones externas.

### Secciones

- Datos de empresa.
- Configuración fiscal.
- Moneda e impuestos.
- Numeración de comprobantes.
- Parámetros de inventario.
- Parámetros de ventas.
- Métodos de pago.
- Preferencias del sistema.
- Integraciones.

### Vistas o Bloques Visuales

- Formulario de empresa.
- Formularios por categoría de configuración.
- Tabs o acordeones de configuración.
- Switches de activación.
- Selectores de moneda, país o zona horaria.
- Botones de guardar y restaurar valores.

### Funciones Esperadas

- `cargarConfiguracion()`: Obtiene configuración actual del sistema.
- `guardarConfiguracion(data)`: Guarda cambios generales.
- `actualizarDatosEmpresa(data)`: Actualiza información del negocio.
- `actualizarConfiguracionFiscal(data)`: Guarda impuestos, moneda y comprobantes.
- `actualizarMetodosPago(data)`: Configura métodos de pago disponibles.
- `restaurarConfiguracionDefault()`: Restaura valores predeterminados si aplica.

### Datos Principales

- Nombre de empresa.
- RUC, NIT o identificación fiscal.
- Dirección.
- Teléfono.
- Correo.
- Logo.
- Moneda.
- Impuestos.
- Formatos de comprobante.
- Métodos de pago.

## Página CRUD

Ruta sugerida: `/panel/crud`

Esta página puede usarse como una vista experimental o base para probar componentes reutilizables antes de integrarlos en páginas reales.

### Casos de Uso

- El desarrollador prueba tablas reutilizables.
- El desarrollador prueba formularios genéricos.
- El equipo valida patrones visuales para crear, editar, eliminar y listar datos.
- El módulo sirve como plantilla para nuevas secciones administrativas.

### Secciones

- Tabla de prueba.
- Formulario de prueba.
- Botones CRUD.
- Estados de carga.
- Estados vacíos.
- Validaciones.

### Vistas o Bloques Visuales

- Tabla genérica.
- Formulario dinámico.
- Botones de acción.
- Modal de confirmación.
- Mensajes de error o éxito.

### Funciones Esperadas

- `cargarDatosDemo()`: Carga datos de prueba.
- `crearRegistro(data)`: Crea registro de prueba.
- `editarRegistro(id, data)`: Edita registro de prueba.
- `eliminarRegistro(id)`: Elimina registro de prueba.
- `limpiarFormulario()`: Reinicia el formulario.

## Convenciones Recomendadas

- Mantener cada página dentro de su propia carpeta.
- Usar archivos separados para lógica (`.ts`), plantilla (`.html`) y estilos (`.scss`).
- Reutilizar componentes comunes desde `components/`.
- Mantener las rutas centralizadas en `routes/panel_ctrl.routes.ts`.
- Evitar duplicar lógica entre páginas.
- Nombrar componentes, clases y rutas de forma descriptiva.
- Separar lógica de presentación, validación y comunicación con API.
- Usar interfaces o modelos para entidades principales.
- Manejar estados de carga, error, vacío y éxito en cada página.

## Modelos o Entidades Sugeridas

- `Producto`
- `Marca`
- `Categoria`
- `Presentacion`
- `UnidadMedida`
- `InventarioMovimiento`
- `Venta`
- `VentaDetalle`
- `Compra`
- `CompraDetalle`
- `Proveedor`
- `Usuario`
- `Rol`
- `Permiso`
- `Caja`
- `CajaMovimiento`
- `Promocion`
- `Reporte`
- `ConfiguracionEmpresa`

## Servicios Sugeridos

- `productos.service.ts`
- `marcas.service.ts`
- `categorias.service.ts`
- `presentaciones.service.ts`
- `inventario.service.ts`
- `ventas.service.ts`
- `compras.service.ts`
- `usuarios.service.ts`
- `caja.service.ts`
- `promociones.service.ts`
- `reportes.service.ts`
- `configuracion.service.ts`

## Pendientes Sugeridos

- Definir modelos o interfaces para las entidades principales.
- Crear servicios para comunicación con API.
- Implementar guards de autenticación y autorización.
- Conectar notificaciones con datos reales del negocio.
- Agregar paginación, filtros y búsqueda avanzada en tablas.
- Implementar validaciones de formularios.
- Agregar pruebas unitarias para componentes y páginas principales.
- Definir permisos por rol para cada página y acción.
