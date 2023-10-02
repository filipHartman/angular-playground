import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'jetsetter',
    loadComponent: () => import('./pages/jetsetter/jetsetter.component').then(c => c.JetsetterComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'pokemon-search',
    loadComponent: () => import('@pokemon-search').then(c => c.PokemonSearchComponent),
    children: [
      {
        path: ':id',
        loadComponent: () => import('@pokemon-search').then(c => c.PokemonDataComponent)
      }
    ]
  }

];
