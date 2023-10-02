import { createFeature, createReducer, on } from '@ngrx/store';
import { LoginPageActions } from './auth.actions';
import { AuthState } from './auth.models';

const initState: AuthState = {
  user: null
}
export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initState,
    on(LoginPageActions.submitSuccessful, (state, action) => ({...state, user: action.user}))
  )
})
