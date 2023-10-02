import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { RemoveBadgeDirective } from './remove-badge.directive';
import { BadgeValueDirective } from './badge-value.directive';
import { ActivableDirective } from './activable.directive';

export enum BadgeChangeStatus {
  ACTIVATE = 'activate',
  DEACTIVATE = 'deactivate',
  REMOVE = 'remove',
}

export interface BadgeChange {
  value: string;
  changeStatus: BadgeChangeStatus;
}

export type BadgeTheme = 'default' | 'ai';

let uid = 0
@Component({
  selector: 'app-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  imports: [
    NgIf,
    RemoveBadgeDirective,
    BadgeValueDirective,
    ActivableDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  @Input() removable = false;
  @Input() activeClassName = 'active-badge';
  @Input() id = `prowly-badge-${uid++}`;
  @Input() set theme(theme: BadgeTheme) {
    if(theme) {
      this.themeClass = `badge-${theme}`;
    }
  };
  @Output() badgeChange = new EventEmitter<BadgeChange>();
  @ViewChild(BadgeValueDirective) badgeValue!: BadgeValueDirective;

  themeClass = 'badge-default';
  onRemove() {
    this.badgeChange.emit({
      value: this.badgeValue.value,
      changeStatus: BadgeChangeStatus.REMOVE,
    });
  }

  onActiveChange(changeStatus: BadgeChangeStatus.ACTIVATE | BadgeChangeStatus.DEACTIVATE) {
    this.badgeChange.emit({
      value: this.badgeValue.value,
      changeStatus
    })
  }
}
