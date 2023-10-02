import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { BadgeChange, BadgeComponent, BadgeTheme } from './badge/badge.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatChipsModule, BadgeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  badges: {value: string, theme: BadgeTheme, removable: boolean}[] = [
    {value: 'Badge', theme: 'default', removable: true},
    {value: 'Keyword', theme: 'default', removable: false},
    {value: 'Frytki', theme: 'ai', removable: false},
    {value: 'Bardzo długi tekst ', theme: 'ai', removable: true}
  ];
  onBadgeChange(badgeChange: BadgeChange) {
    console.log('change', badgeChange);
  }
}
