import { createAction, createActionGroup, props } from '@ngrx/store';
import { AuthEntity, User } from './auth.models';

export const LoginPageActions = createActionGroup({
  source: 'Login Page',
  events: {
    'Submit': props<{user: User}>(),
    'Submit Successful': props<{user: User}>()
  }
})
export const initAuth = createAction('[Auth Page] Init');

export const loadAuthSuccess = createAction(
  '[Auth/API] Load Auth Success',
  props<{ auth: AuthEntity[] }>()
);

export const loadAuthFailure = createAction(
  '[Auth/API] Load Auth Failure',
  props<{ error: any }>()
);
