import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: "[appGetScrollData]"
})
export class GetScrollDataDirective {
  @Output() scrolled = new EventEmitter<void>();

  @HostListener('scroll', ['$event'])
  public onScroll(event: Event) {
    const element = (event.srcElement as HTMLElement);

    if (element.scrollTop + element.clientHeight > element.scrollHeight - 1) {
      this.scrolled.emit();
    }
  }
}