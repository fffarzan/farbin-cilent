import { Component, OnInit, ElementRef, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';

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
  @ViewChildren('linkOfCatalog') linksOfCatalogs: QueryList<ElementRef>;
  @Output() close = new EventEmitter<void>();
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
  }

  onCopyToClipboard(pdfUrl: string) {
    const tempEl = document.createElement('input');
    tempEl.value = 'http://scmcenter.ir/' + pdfUrl;
    document.body.appendChild(tempEl);
    tempEl.select();
    document.execCommand("copy");
    tempEl.remove();
    // AutoClosingSuccessAlert("Url copied in clipboard", 2000);
  }

  onCloseCatalog() {
    this.close.emit();
  }
}
