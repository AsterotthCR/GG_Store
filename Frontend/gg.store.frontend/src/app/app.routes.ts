import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Pages/pages.routes').then(m => m.PAGES_ROUTES),
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
];
