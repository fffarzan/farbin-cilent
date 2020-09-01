import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: "[appTriggerScroll]"
})
export class TriggerScrollDirective {
  @Output() scrollTriggered = new EventEmitter<void>();
  @Output() scrollReachedTop = new EventEmitter<void>();

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY === 0) return this.scrollReachedTop.emit();

    return this.scrollTriggered.emit();
  }
}