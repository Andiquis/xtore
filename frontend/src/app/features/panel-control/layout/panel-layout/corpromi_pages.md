# Páginas del panel Corpromi

## Objetivo

Organizar las páginas principales del panel administrativo para una plataforma inmobiliaria
con sedes, asesores, propiedades, clientes, leads, visitas, ventas y alquileres.

El panel debe ayudar a controlar la operación comercial, dar seguimiento a interesados y
medir resultados por sede, asesor o franquicia.

## Estructura principal del panel

| Módulo | Propósito |
| --- | --- |
| Dashboard | Resumen general del negocio y alertas operativas. |
| Propiedades | Registro, publicación, seguimiento y administración de inmuebles. |
| Clientes | Gestión de compradores, arrendatarios, propietarios e inversionistas. |
| Leads / Interesados | Embudo comercial antes de convertir a cliente formal. |
| Asesores | Gestión del equipo comercial, cartera y desempeño. |
| Sedes | Administración de oficinas, equipos y operación por ubicación. |
| Franquicias | Control de franquicias, sedes asociadas y límites operativos. |
| Citas y visitas | Programación, confirmación y resultado de visitas a propiedades. |
| Ventas / Alquileres | Registro de cierres comerciales y estado del proceso. |
| Propietarios | Administración de dueños de inmuebles y sus propiedades. |
| Documentos | Gestión de contratos, fichas, comprobantes y archivos relacionados. |
| Reportes | Métricas por rol, sede, franquicia, asesor y operación. |
| Usuarios y permisos | Control de accesos, roles, permisos y estados de usuario. |
| Configuración | Parámetros generales del sistema. |
| Auditoría | Registro de acciones sensibles y cambios importantes. |

## 1. Dashboard

El dashboard debe mostrar el estado general del negocio y ayudar a tomar decisiones rápidas.
No debe ser solo una colección de gráficos decorativos.

### Indicadores principales

- Propiedades disponibles.
- Propiedades vendidas.
- Propiedades alquiladas.
- Propiedades reservadas.
- Nuevos clientes.
- Nuevos interesados.
- Visitas programadas.
- Ventas del mes.
- Alquileres del mes.
- Asesores activos.

### Bloques recomendados

- Gráfico de ventas.
- Propiedades más vistas.
- Asesores con más cierres.
- Últimos clientes registrados.
- Próximas citas.
- Alertas de seguimiento pendiente.

## 2. Propiedades

Es una de las secciones más importantes del sistema. Debe permitir registrar, publicar,
asignar y dar seguimiento a cada inmueble.

### Acciones

- Registrar propiedad.
- Editar propiedad.
- Publicar o despublicar.
- Asignar asesor.
- Asignar sede.
- Cambiar estado.
- Subir imágenes y videos.
- Registrar ubicación.
- Ver interesados.
- Ver historial.
- Archivar propiedad.

### Estados recomendados

| Estado | Uso |
| --- | --- |
| `BORRADOR` | Propiedad creada, pero incompleta o no lista para revisión. |
| `EN_REVISION` | Propiedad pendiente de validación antes de publicarse. |
| `PUBLICADA` | Propiedad visible en los canales definidos. |
| `DISPONIBLE` | Propiedad lista para venta o alquiler. |
| `RESERVADA` | Propiedad apartada por un interesado. |
| `VENDIDA` | Propiedad cerrada por venta. |
| `ALQUILADA` | Propiedad cerrada por alquiler. |
| `INACTIVA` | Propiedad fuera de operación o archivada. |

### Datos de propiedad

- Título.
- Descripción.
- Tipo de inmueble.
- Operación: venta o alquiler.
- Precio.
- Moneda.
- Dirección.
- Distrito.
- Provincia.
- Área.
- Habitaciones.
- Baños.
- Estacionamientos.
- Características.
- Propietario.
- Asesor responsable.
- Sede.

## 3. Clientes

Esta sección administra personas interesadas, compradores, arrendatarios, propietarios e
inversionistas.

### Acciones

- Registrar cliente.
- Editar datos.
- Asignar asesor.
- Registrar preferencias.
- Registrar presupuesto.
- Registrar zona de interés.
- Ver historial de contacto.
- Programar visita.
- Marcar como prospecto o cliente.

### Tipos de cliente

- `PROPIETARIO`
- `COMPRADOR`
- `ARRENDATARIO`
- `INVERSIONISTA`
- `INTERESADO`

## 4. Leads / Interesados

No todo interesado debe crearse inmediatamente como cliente formal. Esta sección funciona
como embudo comercial para registrar contacto, seguimiento y conversión.

### Estados del embudo

| Estado | Descripción |
| --- | --- |
| `NUEVO` | Lead recién ingresado. |
| `CONTACTADO` | Ya se realizó un primer contacto. |
| `CALIFICADO` | Tiene interés real, presupuesto o necesidad clara. |
| `VISITA_PROGRAMADA` | Tiene una visita agendada. |
| `NEGOCIACION` | Está en conversación para cerrar operación. |
| `CERRADO` | Se convirtió en cliente u operación cerrada. |
| `DESCARTADO` | No continuará en el proceso. |

### Acciones

- Asignar asesor.
- Registrar llamada.
- Registrar mensaje.
- Programar seguimiento.
- Convertir a cliente.
- Asociar propiedad.
- Cambiar estado.

## 5. Asesores

Permite administrar al equipo comercial y medir su rendimiento.

### Acciones

- Registrar asesor.
- Asignar sede.
- Asignar propiedades.
- Ver cartera de clientes.
- Ver citas.
- Ver desempeño.
- Activar o desactivar.
- Gestionar permisos.

### Métricas

- Propiedades asignadas.
- Leads atendidos.
- Visitas realizadas.
- Ventas cerradas.
- Alquileres cerrados.
- Tasa de conversión.

## 6. Sedes

Este módulo aplica cuando la inmobiliaria opera con varias oficinas o puntos de atención.

### Acciones

- Crear sede.
- Editar sede.
- Asignar administrador.
- Asignar asesores.
- Ver propiedades de la sede.
- Ver clientes de la sede.
- Ver reportes.

### Datos

- Nombre.
- Dirección.
- Teléfono.
- Horario.
- Responsable.
- Estado.

## 7. Franquicias

Este módulo aplica si la empresa trabaja con franquicias. Una franquicia puede tener varias
sedes y cada sede puede tener varios asesores.

### Acciones

- Registrar franquicia.
- Asignar administrador.
- Crear sedes.
- Ver asesores.
- Ver propiedades.
- Ver reportes.
- Configurar límites.
- Activar o suspender.

### Relación jerárquica

```text
Franquicia
-> Sede
-> Asesor
```

## 8. Citas y visitas

Debe tener vista de calendario y vista de lista para controlar visitas programadas.

### Acciones

- Programar visita.
- Reprogramar.
- Cancelar.
- Confirmar asistencia.
- Registrar resultado.
- Añadir observaciones.
- Asociar cliente.
- Asociar propiedad.
- Asociar asesor.

### Estados

- `PENDIENTE`
- `CONFIRMADA`
- `REALIZADA`
- `CANCELADA`
- `NO_ASISTIO`

## 9. Ventas y alquileres

Aquí se registran los cierres comerciales y el estado del proceso.

### Datos para ventas

- Cliente comprador.
- Propiedad.
- Asesor.
- Precio final.
- Fecha.
- Comisión.
- Estado del proceso.

### Datos para alquileres

- Arrendatario.
- Propiedad.
- Monto mensual.
- Garantía.
- Fecha de inicio.
- Fecha de fin.
- Renovación.

### Estados sugeridos

- `EN_NEGOCIACION`
- `DOCUMENTACION`
- `PAGO_PENDIENTE`
- `CERRADA`
- `CANCELADA`

## 10. Propietarios

Puede separarse de clientes si se necesita más orden. Es útil porque una propiedad puede
cambiar de asesor, pero sigue perteneciendo al mismo propietario.

### Información recomendada

- Datos personales.
- Propiedades registradas.
- Contratos.
- Comisiones.
- Pagos.
- Historial.

## 11. Documentos

Los documentos deben tener una relación clara con una propiedad, cliente, operación o
contrato.

### Tipos de documento

- Contratos.
- Fichas de propiedad.
- Documentos del propietario.
- Documentos del comprador.
- Comprobantes.
- Actas.
- Fotografías.

### Acciones

- Subir.
- Descargar.
- Reemplazar.
- Clasificar.
- Verificar.
- Marcar como vencido.

## 12. Reportes

Los reportes deben adaptarse al nivel de acceso del usuario.

### Administrador general

- Reporte global.
- Ventas por sede.
- Ventas por franquicia.
- Rendimiento por asesor.
- Propiedades más vistas.
- Conversión de leads.

### Administrador de franquicia

- Sus sedes.
- Sus asesores.
- Sus propiedades.
- Sus cierres.

### Asesor

- Sus propiedades.
- Sus clientes.
- Sus visitas.
- Sus cierres.

## 13. Usuarios, roles y permisos

### Acciones

- Crear usuario.
- Asignar rol.
- Asignar sede o franquicia.
- Activar o bloquear.
- Restablecer contraseña.
- Gestionar permisos.

### Roles mínimos

- `ADMIN_GENERAL`
- `ADMIN_FRANQUICIA`
- `ADMIN_SEDE`
- `ASESOR`
- `CLIENTE`

### Permisos explícitos

- `propiedad.crear`
- `propiedad.editar`
- `propiedad.publicar`
- `cliente.ver`
- `cliente.editar`
- `asesor.gestionar`
- `reporte.ver`
- `usuario.permisos.modificar`

## 14. Configuración

### Opciones

- Datos de empresa.
- Logo.
- Colores.
- Moneda.
- Tipos de inmueble.
- Estados.
- Distritos y zonas.
- Configuración de publicaciones.
- Configuración de comisiones.
- Notificaciones.

## 15. Auditoría

La auditoría es recomendable para una aplicación administrable. Debe registrar acciones
sensibles y cambios importantes.

### Eventos a registrar

- Quién creó una propiedad.
- Quién cambió un precio.
- Quién eliminó un cliente.
- Quién modificó permisos.
- Fecha y hora.
- IP o dispositivo.

## Menú recomendado por rol

### Admin general

- Dashboard.
- Franquicias.
- Sedes.
- Asesores.
- Propiedades.
- Clientes.
- Ventas.
- Reportes.
- Usuarios.
- Permisos.
- Configuración.
- Auditoría.

### Admin de franquicia

- Dashboard.
- Mis sedes.
- Asesores.
- Propiedades.
- Clientes.
- Citas.
- Ventas.
- Reportes.
- Usuarios.

### Admin de sede

- Dashboard.
- Asesores.
- Propiedades.
- Clientes.
- Citas.
- Ventas.
- Reportes.

### Asesor

- Mi panel.
- Mis propiedades.
- Mis clientes.
- Mis interesados.
- Mis citas.
- Seguimiento.
- Mis cierres.
- Mi perfil.

## MVP recomendado

Para una primera versión conviene empezar por los módulos centrales de la operación.

### Primera versión

1. Login y permisos.
2. Dashboard básico.
3. Propiedades.
4. Clientes.
5. Asesores.
6. Sedes.
7. Citas.
8. Leads.
9. Ventas y alquileres.
10. Reportes básicos.

### Después del MVP

- Documentos.
- Comisiones.
- Notificaciones.
- Auditoría avanzada.
- Automatizaciones.
- Integración con WhatsApp.
- Publicación en portales externos.

## Columna vertebral del sistema

```text
Franquicia
-> Sede
-> Asesor
-> Propiedad
-> Lead
-> Cliente
-> Visita
-> Venta o alquiler
```
