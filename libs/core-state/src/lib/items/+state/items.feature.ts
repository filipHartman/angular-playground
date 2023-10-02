import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { createItem, Item } from '../utils/create-item';
import { ItemsActions } from './items.actions';

const initState: Item[] = [
  createItem('Tooth Brush', false),
  createItem('Tooth Paste', false),
  createItem('Deodorant', false),
  createItem('iPhone Charger', false),
  createItem('Hoodie', true),
];

export const itemsFeature = createFeature({
  name: 'items',
  reducer: createReducer(
    initState,
    on(ItemsActions.addItem, (state, action) => [
      ...state,
      createItem(action.name),
    ]),
    on(ItemsActions.toggleItem, (state, action) => {
      const index = state.findIndex((item) => item.id === action.id);
      const newState = [...state];
      newState[index] = { ...newState[index], packed: !newState[index].packed };
      return newState;
    }),
    on(ItemsActions.removeItem, (state, action) => {
      return state.filter((item) => item.id !== action.id);
    }),
    on(ItemsActions.removeAll, () => []),
    on(ItemsActions.unpackAll, (state) => [
      ...state.map((item) => ({ ...item, packed: false })),
    ])
  ),
});

const allItems$ = itemsFeature.selectItemsState;
export const unpackedItems$ = createSelector(allItems$, (items) =>
  items.filter((item) => !item.packed)
);
export const packedItems$ = createSelector(allItems$, (items) =>
  items.filter((item) => item.packed)
);
