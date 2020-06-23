import { Injectable, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavbarService {
  private contactMenuBtnClicked = new Subject<boolean>();
  private suppllierMenuBtnClicked = new Subject<boolean>();
  private isContactMenuOpen: boolean = false;
  private isSupplierMenuOpen: boolean = false;
  contactMenuBtnClickedObs = this.contactMenuBtnClicked.asObservable();
  supplierMenuBtnClickedObs = this.suppllierMenuBtnClicked.asObservable();

  closeAll() {
    this.contactMenuBtnClicked.next(true);
    this.suppllierMenuBtnClicked.next(true);
    this.isSupplierMenuOpen = false;
    this.isContactMenuOpen = false;
  }

  contactMenuToggle(isOpen?: boolean) {
    // close other menues
    this.suppllierMenuBtnClicked.next(true);
    if (this.isSupplierMenuOpen) this.isSupplierMenuOpen = false;

    this.contactMenuBtnClicked.next(this.isContactMenuOpen);
    this.isContactMenuOpen = !this.isContactMenuOpen;
  }

  supplierMenuToggle(isOpen?: boolean) {
    // close other menues
    this.contactMenuBtnClicked.next(true);
    if (this.isContactMenuOpen) this.isContactMenuOpen = false;

    this.suppllierMenuBtnClicked.next(this.isSupplierMenuOpen);
    this.isSupplierMenuOpen = !this.isSupplierMenuOpen;
  }
}