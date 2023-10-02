import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageActions } from '@twit/core-state';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store);

  form = this.fb.nonNullable.group({
    username: this.fb.nonNullable.control(''),
    password: this.fb.nonNullable.control(''),
  });

  submit() {
    const { username, password } = this.form.controls;
    if (username.value && password.value) {
      this.store.dispatch(
        LoginPageActions.submit({
          user: { username: username.value, password: password.value },
        })
      );
    }
  }
}
