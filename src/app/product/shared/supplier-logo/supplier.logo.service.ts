import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierLogoService {
  private logo;

  setSupplierLogo(logo) {
    this.logo = logo;
  }

  getSupplierLogo() {
    return this.logo;
  }
}