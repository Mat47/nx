import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'product',
    title: 'product',
    loadComponent: () => import('@nx/product').then((c) => c.ProductComponent),
  },
  //   {
  //     path: 'shared',
  //     loadComponent: () => import('@nx/shared').then((c) => c.SharedComponent),
  //   },
  {
    path: '**', // 404
    redirectTo: '',
  },
];
