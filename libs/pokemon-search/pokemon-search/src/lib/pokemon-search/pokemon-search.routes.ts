import { Route } from '@angular/router';

export const POKEMON_ROUTES: Route[] = [
  {
    path: 'pokemon-search',
    loadComponent: () => import('./pokemon-search.component').then(c => c.PokemonSearchComponent),
    children: [
      {
        path: ':id',
        loadComponent: () => import('./components/pokemon-data/pokemon-data.component').then(c => c.PokemonDataComponent)
      }
    ]
  }
]
