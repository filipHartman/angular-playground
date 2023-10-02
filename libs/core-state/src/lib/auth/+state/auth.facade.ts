import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(AuthActions.initAuth());
  }
}
