import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Pokemon } from '../util/model';
import { BehaviorSubject, map, Observable } from 'rxjs';

const HOST_URL = 'http://localhost:3001/pokemons';
@Injectable()
export class PokemonService {
  private readonly selectedId$$ = new BehaviorSubject<string | null>(null);
  public readonly selectedId$ = this.selectedId$$.asObservable();
  private readonly http = inject(HttpClient);

  getPokemonById(id: string): Observable<Pokemon> {
    this.selectedId$$.next(id);
    return this.http.get<Pokemon>(`${HOST_URL}/${id}`);
  }

  getPokemonsBySearchTerm(searchTerm: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(HOST_URL, {
      params: new HttpParams().set('name_like', searchTerm),
    }).pipe(map(pokemons => pokemons.slice(0,-1)));
  }
}
