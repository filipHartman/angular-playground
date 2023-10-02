import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { createItem, Item, ItemsFacade } from '@twit/core-state';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-jetsetter',
  standalone: true,
  providers: [ItemsFacade],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './jetsetter.component.html',
  styleUrls: ['./jetsetter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JetsetterComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly itemsFacade = inject(ItemsFacade);
  readonly newItemControl = this.fb.control('');
  unpackedItems$: Observable<Item[]> = this.itemsFacade.unpackedItems$;
  packedItems$: Observable<Item[]> = this.itemsFacade.packedItems$;

  newItemSubmit() {
    if (this.newItemControl.value) {
      this.itemsFacade.addItem(this.newItemControl.value);
      this.newItemControl.setValue('');
    }
  }

  toggleItem(id: number) {
    this.itemsFacade.toggleItem(id);
  }

  removeItem(id: number) {
    this.itemsFacade.removeItem(id);
  }

  unpackAll() {
    this.itemsFacade.unpackAll();
  }

  removeAll() {
    this.itemsFacade.removeAll();
  }
}
