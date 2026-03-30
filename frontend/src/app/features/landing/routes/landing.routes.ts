import { Routes } from '@angular/router';
import { LandingLayout } from '../landing-layout/landing-layout';

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    component: LandingLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../landing-layout/landing-layout')
            .then((m) => m.LandingLayout),
      }
    ],
  },
];