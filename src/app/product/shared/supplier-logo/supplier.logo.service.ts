import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierLogoService {
  private logo;
  logoChange = new Subject<any>();

  setSupplierLogo(logo) {
    this.logo = logo;
    this.logoChange.next(this.logo);
  }

  getSupplierLogo() {
    return this.logo;
  }
}