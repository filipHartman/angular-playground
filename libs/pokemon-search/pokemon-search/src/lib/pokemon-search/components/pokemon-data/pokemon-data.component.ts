import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDataComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly http = inject(HttpClient);
  private readonly pokemonService = inject(PokemonService);
  id$ = this.route.paramMap.pipe(map((paramMap) => paramMap.get('id')));
  pokemonData$ = this.id$.pipe(switchMap(id => {
    if (id) {
      return this.pokemonService.getPokemonById(id);
    }
    return EMPTY;
  }))
}
