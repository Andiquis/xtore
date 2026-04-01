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
        loadComponent: () => import('../pages/crud/crud').then((m) => m.Crud),
      },
      {
        path: 'reportes',
        loadComponent: () => import('../pages/reportes/reportes').then((m) => m.Reportes),
      },
      {
        path: 'configuracion',
        loadComponent: () => import('../pages/configuracion/configuracion').then((m) => m.Configuracion),
      }
    ],
  },
];
