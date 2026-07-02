import { Routes } from '@angular/router';

const DEFAULT_FEATURE = 'panel';
const ACTIVE_FEATURES = ['panel'] as const;

const FEATURE_ROUTES = [
  {
    path: 'panel',
    loadChildren: () =>
      import('./features/panel-control/routes/panel_ctrl.routes').then((m) => m.PANEL_CTRL_ROUTES),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./features/landing/routes/landing.routes').then((m) => m.LANDING_ROUTES),
  },
] satisfies Routes;

const activeFeatureNames = new Set<string>(ACTIVE_FEATURES);
const enabledFeatureRoutes = FEATURE_ROUTES.filter((route) => activeFeatureNames.has(route.path ?? ''));
const disabledFeatureRoutes: Routes = FEATURE_ROUTES
  .filter((route) => !activeFeatureNames.has(route.path ?? ''))
  .map((route) => ({
    path: route.path,
    redirectTo: DEFAULT_FEATURE,
    pathMatch: 'prefix',
  }));

export const routes: Routes = [
  {
    path: '',
    redirectTo: DEFAULT_FEATURE,
    pathMatch: 'full',
  },
  ...disabledFeatureRoutes,
  ...enabledFeatureRoutes,
  {
    path: '**',
    redirectTo: DEFAULT_FEATURE,
  },
];
