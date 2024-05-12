import {Routes} from "@angular/router";

export const PAGES_ROUTES: Routes = [
  {
    path:"home",
    loadComponent: () => import("./home/home.page").then(m => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

]
