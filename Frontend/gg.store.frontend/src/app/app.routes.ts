import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./Pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'product-detail',
    loadComponent: () =>
      import('./Pages/product-detail/product-detail.page').then(
        (m) => m.ProductDetailPage ),
  },
  {
    path: 'intro',
    loadComponent: () =>
      import('./Pages/intro/intro.page').then((m) => m.IntroPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Pages/Auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./Pages/Auth/register/register.page').then((m) => m.RegisterPage),
  },
];
