import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ExtensionMethodService } from '../../shared/extension-method.service';
import { CatalogsService } from './catalogs.service';
import { Catalog } from './catalog.model';
import { SupplierService } from 'src/app/shared/supplier.service';
import { Supplier } from 'src/app/shared/supplier.model';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId = Math.round(Math.random() * 100);
  catalogs: Catalog[] = [];
  suppliers: Supplier[] = [];

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private catalogService: CatalogsService,
    private supplierService: SupplierService
  ) { }

  ngOnInit(): void {
    this.catalogs = this.catalogService.getCatalogs();
    this.suppliers = this.supplierService.getSuppliers();

    console.log(this.catalogs);
    console.log(this.suppliers);
  }

}
