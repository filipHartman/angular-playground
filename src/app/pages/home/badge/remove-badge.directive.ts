import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: 'button[appRemoveBadge]',
  standalone: true
})
export class RemoveBadgeDirective {
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();

  private readonly el = inject(ElementRef);
  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    this.remove.emit();
    const badge = this.el.nativeElement.parentElement.parentElement;
    if (badge) {
      badge.remove();
    }
  }
}
