import { Component, OnInit } from '@angular/core';

import { ProductDataStorageService } from '../shared/product-data-storage.service';
import { MasterProductService } from './master-product.service';

@Component({
  selector: 'app-master-product',
  templateUrl: './master-product.component.html',
  styleUrls: ['./master-product.component.css']
})
export class MasterProductComponent implements OnInit {

  constructor(
    private dataStorageService: ProductDataStorageService,
    private masterProductService: MasterProductService
  ) { }

  ngOnInit(): void {
    // this.dataStorageService.fetchDefineDetailProducts().subscribe()
  }
}
