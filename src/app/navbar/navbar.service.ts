import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavbarService {
  private contactMenuBtnClicked = new Subject<boolean>();
  private suppllierMenuBtnClicked = new Subject<boolean>();
  contactMenuBtnClickedObs = this.contactMenuBtnClicked.asObservable();
  supplierMenuBtnClickedObs = this.suppllierMenuBtnClicked.asObservable();

  contactMenuToggle(isOpen: boolean) {
    // close contact menu
    this.suppllierMenuBtnClicked.next(true);

    this.contactMenuBtnClicked.next(!isOpen);
  }

  supplierMenuToggle(isOpen: boolean) {
    // close supplier menu
    this.contactMenuBtnClicked.next(true);

    this.suppllierMenuBtnClicked.next(!isOpen);
  }
}