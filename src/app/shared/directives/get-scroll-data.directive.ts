import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: "[appGetScrollData]"
})
export class GetScrollDataDirective {
  @Output() scrolled = new EventEmitter<void>();
  @Output() triggered = new EventEmitter<boolean>();

  @HostListener('scroll', ['$event'])
  public onScroll(event: Event) {
    const element = (event.srcElement as HTMLElement);

    if (element.scrollTop + element.clientHeight > element.scrollHeight - 1) {
      this.scrolled.emit();
    }

    if (element.scrollTop > 0) this.triggered.emit(false);

    if (element.scrollTop === 0) this.triggered.emit(true);
  }
}