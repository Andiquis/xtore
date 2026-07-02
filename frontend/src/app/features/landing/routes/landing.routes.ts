import { Routes } from '@angular/router';
import { LandingLayout } from '../landing-publico/landing-layout';

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    component: LandingLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../landing-publico/landing-layout')
            .then((m) => m.LandingLayout),
      }
    ],
  },
];