# Análisis de autenticación y acceso por roles

## Objetivo

Definir cómo debe funcionar el acceso al sistema según el rol del usuario autenticado.
El sistema puede tener más de una pantalla de login, pero todas deben resolver la sesión
hacia una experiencia centralizada y controlada por permisos.

## Criterio principal

Después de iniciar sesión, el usuario no debería entrar a dashboards distintos por cada
rol. La ruta principal del panel debe ser la misma:

```text
/panel/dashboard
```

El dashboard y el menú lateral se encargan de mostrar u ocultar vistas, acciones y datos
según el rol activo del usuario.

La excepción es el cajero: si el usuario inicia sesión como cajero, debe entrar al flujo
de punto de venta o caja operativa, no al dashboard administrativo completo.

## Roles contemplados

| Rol | Acceso esperado | Descripción |
| --- | --- | --- |
| Root | Dashboard completo | Tiene acceso total a vistas, configuración, usuarios, permisos y datos generales. |
| Admin | Dashboard administrativo limitado | Accede a las vistas necesarias para administrar su alcance operativo. |
| Franquiciado | Dashboard de franquicia | Ve y administra información relacionada con su franquicia. |
| Cajero | Punto de venta / caja | No entra al dashboard general; opera ventas, caja y funciones de atención. |

## Flujo de inicio de sesión

1. El usuario ingresa sus credenciales desde cualquiera de los logins disponibles.
2. El backend valida credenciales, roles asignados y permisos.
3. El frontend guarda la sesión y determina el rol activo.
4. Si el rol activo es `cajero`, se redirige al módulo operativo correspondiente.
5. Si el rol activo es `root`, `admin` o `franquiciado`, se redirige a `/panel/dashboard`.
6. El layout del panel carga el menú, las rutas visibles y los datos permitidos según el rol activo.

## Redirección sugerida por rol

| Rol activo | Ruta inicial sugerida |
| --- | --- |
| Root | `/panel/dashboard` |
| Admin | `/panel/dashboard` |
| Franquiciado | `/panel/dashboard` |
| Cajero | `/panel/caja` o módulo POS dedicado |

> Nota: si se implementa un módulo POS separado del panel, la ruta del cajero debería apuntar a ese feature y no a `/panel/dashboard`.

## Reglas de visualización del dashboard

### Root

- Puede ver todas las secciones del panel.
- Puede editar configuración global.
- Puede gestionar usuarios, roles y permisos.
- Puede ver información consolidada de todo el sistema.
- Puede acceder a reportes globales.

### Admin

- Puede ver las secciones administrativas asignadas a su alcance.
- No debe editar datos que pertenezcan a un rol o alcance superior.
- Puede gestionar información operativa autorizada, como ventas, productos, inventario o reportes según permisos.
- Si necesita operar como cajero o franquiciado, debe cambiar su rol activo si tiene ese rol asignado.

### Franquiciado

- Puede ver datos relacionados con su franquicia.
- No debe ver información de otras franquicias, salvo permiso explícito.
- Puede administrar operaciones propias de su unidad, según permisos configurados.

### Cajero

- No debe acceder al dashboard administrativo general.
- Debe acceder a punto de venta, caja o pantalla operativa.
- Sus acciones deben estar limitadas a venta, cobro, comprobantes y operaciones de caja autorizadas.

## Cambio de rol activo

Un usuario puede tener más de un rol asignado. En ese caso:

- El sistema debe permitir elegir o cambiar el rol activo.
- El cambio de rol debe recalcular permisos, menú visible y rutas disponibles.
- No se debe asumir que un usuario con rol admin puede editar todo desde la sesión admin.
- Para operar como cajero o franquiciado, el usuario debe activar ese rol si lo tiene asignado.

Ejemplo:

```text
Usuario: Anderson
Roles asignados: admin, cajero
Rol activo: admin
Acceso: dashboard administrativo

Si cambia a rol activo: cajero
Acceso: punto de venta / caja operativa
```

## Reglas de permisos

El control de acceso debe aplicarse en dos capas:

1. Frontend: oculta rutas, botones, acciones y bloques de información que el usuario no puede usar.
2. Backend: valida cada acción sensible, incluso si el frontend oculta la opción.

El frontend mejora la experiencia, pero la seguridad real debe estar en el backend.

## Módulos del panel a controlar por permisos

Las rutas actuales del panel incluyen:

| Módulo | Ruta |
| --- | --- |
| Dashboard | `/panel/dashboard` |
| Ventas | `/panel/ventas` |
| Caja | `/panel/caja` |
| Compras | `/panel/compras` |
| Productos | `/panel/productos` |
| Inventario | `/panel/inventario` |
| Usuarios | `/panel/usuarios` |
| Promociones | `/panel/promociones` |
| Reportes | `/panel/reportes` |
| Soporte | `/panel/soporte` |
| Configuración | `/panel/configuracion` |
| Temas / CRUD experimental | `/panel/crud` |

Cada módulo debe declarar qué roles pueden verlo y qué acciones pueden ejecutar.

## Matriz inicial de acceso

Esta matriz es una base para implementar guards, menú dinámico y validación de permisos.

| Módulo | Root | Admin | Franquiciado | Cajero |
| --- | --- | --- | --- | --- |
| Dashboard | Sí | Sí | Sí | No |
| Ventas | Sí | Sí | Según permiso | Sí |
| Caja | Sí | Sí | Según permiso | Sí |
| Compras | Sí | Sí | Según permiso | No |
| Productos | Sí | Sí | Según permiso | No |
| Inventario | Sí | Sí | Según permiso | No |
| Usuarios | Sí | Según permiso | No | No |
| Promociones | Sí | Sí | Según permiso | No |
| Reportes | Sí | Sí | Según permiso | No |
| Soporte | Sí | Sí | Sí | No |
| Configuración | Sí | Según permiso | No | No |
| Temas / CRUD experimental | Sí | No | No | No |

## Consideraciones de implementación

- Crear un guard de autenticación para impedir el acceso a rutas privadas sin sesión.
- Crear un guard de roles/permisos para validar el acceso a cada ruta del panel.
- Construir el menú lateral desde una configuración con `roles` o `permissions` por módulo.
- Evitar hardcodear el usuario, rol o avatar en el layout.
- Obtener el rol activo desde un servicio de autenticación o estado global.
- Redirigir automáticamente al usuario cuando intente abrir una ruta no permitida.
- Mantener una respuesta clara para accesos denegados, por ejemplo una vista `403`.

## Pendientes

- Definir si el cajero usará `/panel/caja` o un feature POS independiente.
- Definir nombres finales de permisos por acción: crear, editar, eliminar, ver, exportar.
- Definir si el rol activo se elige al iniciar sesión o desde el panel del usuario.
- Definir reglas exactas para usuarios con múltiples roles.
- Implementar validación equivalente en backend para todas las acciones sensibles.
