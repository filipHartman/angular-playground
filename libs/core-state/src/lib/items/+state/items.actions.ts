import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ItemsActions = createActionGroup({
  source: 'Jetsetter page',
  events: {
    'Add Item': props<{name: string}>(),
    'Remove Item': props<{id: number}>(),
    'Toggle Item': props<{id: number}>(),
    'Remove All': emptyProps(),
    'Unpack All': emptyProps()
  }
})
