import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appBadgeValue]',
  standalone: true,
})
export class BadgeValueDirective implements OnInit {
  private readonly el = inject(ElementRef);
  public value!: string;
  ngOnInit() {
    this.value = this.el.nativeElement.innerText;
  }
}
