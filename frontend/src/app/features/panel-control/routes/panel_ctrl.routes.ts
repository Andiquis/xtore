import { Routes } from '@angular/router';
import { PanelLayout } from '../layout/panel-layout/panel-layout';
export const PANEL_CTRL_ROUTES: Routes = [
  {
    path: '',
    component: PanelLayout,
    children: [
      {
        path: '', // ruta vacía dentro del panel
        redirectTo: 'dashboard', // redirige automáticamente al dashboard
        pathMatch: 'full', // importante para rutas exactas
      },
      {
        path: 'dashboard', // /panel/dashboard
        loadComponent: () => import('../pages/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'ventas',
        loadComponent: () => import('../pages/ventas/ventas').then((m) => m.Ventas),
      },
      {
        path: 'productos',
        loadComponent: () => import('../pages/productos/productos').then((m) => m.Productos),
        children: [
          {
            path: '',
            redirectTo: 'precios',
            pathMatch: 'full',
          },
          {
            path: 'lista',
            loadComponent: () =>
              import('../pages/productos/productos-lista/productos-lista').then((m) => m.ProductosLista),
          },
          {
            path: 'presentacion',
            redirectTo: 'presentaciones',
            pathMatch: 'full',
          },
          {
            path: 'presentaciones',
            loadComponent: () =>
              import('../pages/productos/productos-presentacion/productos-presentacion').then((m) => m.ProductosPresentacion),
          },
          {
            path: 'precios',
            loadComponent: () =>
              import('../pages/productos/productos-precios/productos-precios').then((m) => m.ProductosPrecios),
          },
          {
            path: 'codigos',
            loadComponent: () =>
              import('../pages/productos/productos-codigos/productos-codigos').then((m) => m.ProductosCodigos),
          },
          {
            path: 'categorias',
            loadComponent: () =>
              import('../pages/productos/productos-categorias/productos-categorias').then((m) => m.ProductosCategorias),
          },
          {
            path: 'marcas',
            loadComponent: () =>
              import('../pages/productos/productos-marcas/productos-marcas').then((m) => m.ProductosMarcas),
          },
        ],
      },
      {
        path: 'inventario',
        loadComponent: () => import('../pages/inventario/inventario').then((m) => m.Inventario),
      },
      {
        path: 'compras',
        loadComponent: () => import('../pages/compras/compras').then((m) => m.Compras),
      },
      {
        path: 'usuarios',
        loadComponent: () => import('../pages/usuarios/usuarios').then((m) => m.Usuarios),
      },
      {
        path: 'caja',
        loadComponent: () => import('../pages/caja/caja').then((m) => m.Caja),
      },
      {
        path: 'promociones',
        loadComponent: () => import('../pages/promociones/promociones').then((m) => m.Promociones),
      },
      {
        path: 'reportes',
        loadComponent: () => import('../pages/reportes/reportes').then((m) => m.Reportes),
      },
      {
        path: 'soporte',
        loadComponent: () => import('../pages/soporte/soporte').then((m) => m.Soporte),
      },
      {
        path: 'crud',
        loadComponent: () => import('../pages/crud/crud').then((m) => m.Crud),
      },
      {
        path: 'configuracion',
        loadComponent: () => import('../pages/configuracion/configuracion').then((m) => m.Configuracion),
      }
    ],
  },
];
