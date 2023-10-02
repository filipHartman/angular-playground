import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { packedItems$, unpackedItems$ } from './items.feature';
import { ItemsActions } from './items.actions';

@Injectable()
export class ItemsFacade {
  private readonly store = inject(Store);

  unpackedItems$ = this.store.select(unpackedItems$);
  packedItems$ = this.store.select(packedItems$);

  addItem(name: string) {
    this.store.dispatch(ItemsActions.addItem({ name }));
  }

  toggleItem(id: number) {
    this.store.dispatch(ItemsActions.toggleItem({ id }));
  }

  unpackAll() {
    this.store.dispatch(ItemsActions.unpackAll());
  }
  removeItem(id: number) {
    this.store.dispatch(ItemsActions.removeItem({ id }));
  }

  removeAll() {
    this.store.dispatch(ItemsActions.removeAll());
  }
}
