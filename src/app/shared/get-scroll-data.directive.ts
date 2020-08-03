import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: "[appGetScrollData]"
})
export class GetScrollDataDirective {
  @HostListener('window:scroll', ['$event'])
  
  public onScroll(event: any): void {
    console.log(window.pageYOffset)
  }
}