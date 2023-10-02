import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink],
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PokemonService]
})
export class PokemonSearchComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly activateRoute = inject(ActivatedRoute);
  private readonly pokemonService = inject(PokemonService);
  readonly searchControl = new FormControl('', { nonNullable: true });
  pokemons$ = this.activateRoute.queryParams.pipe(
    map((params) => params['name']),
    switchMap((name) => this.pokemonService.getPokemonsBySearchTerm(name))
  );

  pokemonIdentifiers$: Observable<{ name: string; id: string }[]> =
    this.pokemons$.pipe(
      map((pokemons) =>
        pokemons.map(({ name, id }) => ({ name, id: String(id) }))
      )
    );
  ngOnInit(): void {
    combineLatest([
      this.pokemonService.selectedId$,
      this.searchControl.valueChanges.pipe(
        distinctUntilChanged(),
        debounceTime(200)
      ),
    ]).subscribe(([id, searchTerm]) => {
      this.router.navigate(['/pokemon-search', id ?? ''], {
        queryParams: { name: searchTerm },
      });
    });
  }
}
