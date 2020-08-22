import { Component, OnInit } from '@angular/core';

import { SupplierService } from './supplier.service';
import { Supplier } from 'src/app/layout/navbar/supplier-menu/supplier.model';
import { toggleMenu } from '../navbar.animation';
import { LayoutDataStorageService } from '../../shared/layout-data-storage.service';

@Component({
  selector: 'app-supplier-menu',
  templateUrl: './supplier-menu.component.html',
  styleUrls: ['./supplier-menu.component.css'],
  animations: [
    toggleMenu
  ],
  host: { '[@toggleMenu]': 'in' }
})
export class SupplierMenuComponent implements OnInit {
  suppliers: Supplier[] = [];

  constructor(
    private supplierService: SupplierService,
    private layoutDataStorageService: LayoutDataStorageService
  ) { }

  ngOnInit(): void {
    this.layoutDataStorageService.fetchSuppliers()
      .subscribe(() => this.suppliers = this.supplierService.getSuppliers());
  }
}
