import { Component, OnInit } from '@angular/core';

import { SupplierService } from '../../shared/supplier.service';
import { Supplier } from 'src/app/shared/supplier.model';
import { toggleMenu } from '../navbar.animation';

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

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.suppliers = this.supplierService.getSuppliers();
  }
}
