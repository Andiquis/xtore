import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'panel',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./app/features/landing/routes/landing.routes').then((m) => m.LANDING_ROUTES),
  },
  {
    path: 'panel',
    loadChildren: () =>
      import('./app/features/panel_ctrl/routes/panel_ctrl.routes').then((m) => m.PANEL_CTRL_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'panel',
  },
];
