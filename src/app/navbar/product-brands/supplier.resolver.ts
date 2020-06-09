import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Supplier } from './supplier.model';
import { SupplierService } from './supplier.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierResolver implements Resolve<Supplier[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private supplierService: SupplierService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const suppliers = this.supplierService.getSuppliers();

    if (suppliers.length === 0)
      return this.dataStorageService.fetchSuppliers();
    else 
      return suppliers;
  }
}