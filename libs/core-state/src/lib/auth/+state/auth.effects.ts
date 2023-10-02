import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import { LoginPageActions } from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly router = inject(Router);
  submit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginPageActions.submit),
      switchMap((action) => {
        console.log('effect', action);
        return of(LoginPageActions.submitSuccessful({ user: action.user }));
      })
    );
  });

  loginSuccessful$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LoginPageActions.submitSuccessful),
        switchMap(() => this.router.navigateByUrl('/'))
      );
    },
    { dispatch: false }
  );

  // init$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.initAuth),
  //     switchMap(() => of(AuthActions.loadAuthSuccess({ auth: [] }))),
  //     catchError((error) => {
  //       console.error('Error', error);
  //       return of(AuthActions.loadAuthFailure({ error }));
  //     })
  //   )
  // );
}
