import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from 'nav-bar';

@Component({
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
