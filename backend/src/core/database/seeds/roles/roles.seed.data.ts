import { t_roles_estado_rol } from '@prisma/client';

export const ROLES_SEED = [
  {
    nombre_rol: 'superadmin',
    descripcion_rol:
      'Acceso total al sistema, incluyendo funciones críticas, auditoría y mantenimiento',
    estado_rol: t_roles_estado_rol.activo,
  },
  {
    nombre_rol: 'admin',
    descripcion_rol:
      'Gestión administrativa del sistema, sin acceso a configuraciones críticas',
    estado_rol: t_roles_estado_rol.activo,
  },
  {
    nombre_rol: 'usuario',
    descripcion_rol:
      'Persona registrada en el sistema, aún sin interacción comercial o compra',
    estado_rol: t_roles_estado_rol.activo,
  },
  {
    nombre_rol: 'cliente',
    descripcion_rol: 'Usuario con interacción comercial dentro del sistema',
    estado_rol: t_roles_estado_rol.activo,
  },
  {
    nombre_rol: 'cajero',
    descripcion_rol: 'Registro de ventas, cobros y emisión de comprobantes',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'jefe_caja',
    descripcion_rol: 'Supervisión de caja, arqueos y cierres de turno',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'tesorero',
    descripcion_rol:
      'Gestión de fondos, transferencias y conciliaciones bancarias',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'contador',
    descripcion_rol: 'Registros contables y reportes financieros',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'facturador',
    descripcion_rol: 'Emisión de comprobantes electrónicos',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'almacenero',
    descripcion_rol: 'Gestión de inventario',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'jefe_almacen',
    descripcion_rol: 'Supervisión de inventarios',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'comprador',
    descripcion_rol: 'Gestión de compras a proveedores',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'recepcionista_inventario',
    descripcion_rol: 'Valida entregas de productos',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'control_calidad',
    descripcion_rol: 'Control de calidad de insumos',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'vendedor',
    descripcion_rol: 'Atiende clientes y ventas',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'jefe_ventas',
    descripcion_rol: 'Supervisa equipo de ventas',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'teleoperador',
    descripcion_rol: 'Atención telefónica',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'asistente_comercial',
    descripcion_rol: 'Apoyo comercial',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'community_manager',
    descripcion_rol: 'Gestión de redes sociales',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'mozo',
    descripcion_rol: 'Atención en sala',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'bartender',
    descripcion_rol: 'Preparación de bebidas',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'chef',
    descripcion_rol: 'Responsable de cocina',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'cocinero_auxiliar',
    descripcion_rol: 'Apoyo en cocina',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'hostess',
    descripcion_rol: 'Recepción de clientes',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'delivery',
    descripcion_rol: 'Entrega de pedidos',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'repartidor',
    descripcion_rol: 'Distribución de pedidos',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'coordinador_ruta',
    descripcion_rol: 'Planificación de rutas',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'operador_logistico',
    descripcion_rol: 'Control logístico',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'jefe_logistica',
    descripcion_rol: 'Supervisión logística',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'guia_turistico',
    descripcion_rol: 'Guía de turistas',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'recepcionista',
    descripcion_rol: 'Atención en hotel',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'conserje',
    descripcion_rol: 'Asistencia general',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'agente_reservas',
    descripcion_rol: 'Gestión de reservas',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'chofer',
    descripcion_rol: 'Transporte de clientes',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'desarrollador',
    descripcion_rol: 'Desarrollo de software',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'devops',
    descripcion_rol: 'Infraestructura y despliegues',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'seguridad_informatica',
    descripcion_rol: 'Seguridad del sistema',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'analista_datos',
    descripcion_rol: 'Análisis de datos',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'arquitecto_software',
    descripcion_rol: 'Diseño de arquitectura',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'qa_tester',
    descripcion_rol: 'Pruebas de calidad',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'product_owner',
    descripcion_rol: 'Gestión del producto',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'scrum_master',
    descripcion_rol: 'Gestión ágil',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'abogado',
    descripcion_rol: 'Asesoría legal',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'recursos_humanos',
    descripcion_rol: 'Gestión de personal',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'reclutador',
    descripcion_rol: 'Contratación de personal',
    estado_rol: t_roles_estado_rol.inactivo,
  },
  {
    nombre_rol: 'jefe_rrhh',
    descripcion_rol: 'Dirección de RRHH',
    estado_rol: t_roles_estado_rol.inactivo,
  },
];
