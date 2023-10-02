import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { BadgeChangeStatus } from './badge.component';

@Directive({
  selector: 'div[appActivable]',
  standalone: true
})
export class ActivableDirective {
  @Input('appActivable') className!: string;
  @Output() activeChange = new EventEmitter<BadgeChangeStatus.ACTIVATE | BadgeChangeStatus.DEACTIVATE>
  private readonly el: ElementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);


  @HostListener('click', ['$event', '$event.target'])
  public onClick(event: Event, target: HTMLElement) {
    event.preventDefault();
    const el = this.el.nativeElement;
    if(target.tagName !== 'BUTTON') {
      if (el.classList.contains(this.className)) {
        this.renderer.removeClass(el, this.className);
        this.activeChange.emit(BadgeChangeStatus.DEACTIVATE);
      } else {
        this.renderer.addClass(el, this.className);
        this.activeChange.emit(BadgeChangeStatus.ACTIVATE);
      }
    }
  }
}
