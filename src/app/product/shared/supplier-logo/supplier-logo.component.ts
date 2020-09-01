import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { environment } from 'src/environments/environment';
import { SupplierLogoService } from './supplier.logo.service';

@Component({
  selector: 'app-supplier-logo',
  templateUrl: './supplier-logo.component.html',
  styleUrls: ['./supplier-logo.component.css']
})
export class SupplierLogoComponent implements OnInit {
  data;
  enviornment: { production: boolean, baseUrl: string } = environment;

  constructor(private supplierLogoService: SupplierLogoService) { }

  ngOnInit(): void {
    this.data = this.supplierLogoService.getSupplierLogo();
  }
}
