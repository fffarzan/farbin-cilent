import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductCategoryService } from './product-category.service';
import { ProductDataStorageService } from '../shared/product-data-storage.service';
import { ProductCategory } from './product-category.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  productCategoryData: ProductCategory;

  constructor(
    private productCategoryService: ProductCategoryService,
    private dataStorageService: ProductDataStorageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getProductCategoryData({ IDXSupplier: +params['supplierId'], IDXParentCategory: +params['parentCateoryId'] }));
  }

  private getProductCategoryData(param: { IDXSupplier: number, IDXParentCategory: number }) {
    this.dataStorageService.fetchProductCategory(param)
      .subscribe(() => this.productCategoryData = this.productCategoryService.getProductCategory());
  }
}
