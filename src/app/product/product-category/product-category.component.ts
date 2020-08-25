import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductCategoryService } from './product-category.service';
import { ProductDataStorageService } from '../shared/product-data-storage.service';
import { ProductCategory, ProductCategorySupplier, ProductChildCategory } from './product-category.model';
import { ProductCategoryCarouselParams } from './product-category-carousel/product-category-carousel.model';
import { ProductCategoryBreadcrumb } from './product-category-breadcrumb.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  private breadcrumbData: ProductCategoryBreadcrumb;
  private supplierLogoData: ProductCategorySupplier[];
  private childCategoryData: ProductChildCategory[];
  productCategories: ProductCategory;
  fixedMenuData: { breadcrumbData: ProductCategoryBreadcrumb, supplierLogoData: ProductCategorySupplier[], childCategoryData: ProductChildCategory[] } = {
    breadcrumbData: this.breadcrumbData,
    supplierLogoData: this.supplierLogoData,
    childCategoryData: this.childCategoryData
  };
  productCategoryCarouelParams: ProductCategoryCarouselParams = {
    staticUrl: "",
    dynamicFieldImage: 'ProductUrl',
    pageUrlDirection: 'MasterProduct',
    dynamicFieldName: 'Name_En',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 6 } }
    },
    mobileOptions: {
      mobileItems: { maxSize: 500, items: 2.5 },
      tabletItems: { maxSize: 768, items: 0 },
      desktopItems: { maxSize: 1024, items: 5 }
    }
  };

  constructor(
    private productCategoryService: ProductCategoryService,
    private dataStorageService: ProductDataStorageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getProductCategoryData({ IDXSupplier: +params['supplierId'], IDXParentCategory: +params['parentCateoryId'] });
      this.getProductCategoryBreadcrumbData({ IDXParentCategory: +params['parentCateoryId'] });
    });
  }

  private getProductCategoryData(param: { IDXSupplier: number, IDXParentCategory: number }) {
    this.dataStorageService.fetchProductCategory(param)
      .subscribe(() => {
        this.productCategories = this.productCategoryService.getProductCategory()[0];
        this.fixedMenuData.supplierLogoData = this.productCategories.Supplier;
        this.fixedMenuData.childCategoryData = this.productCategories.ChildCategories;
      });
  }

  private getProductCategoryBreadcrumbData(param: { IDXParentCategory: number }) {
    this.dataStorageService.fetchProductCategoryBreadcrumb(param)
      .subscribe(() => {
        this.breadcrumbData = this.productCategoryService.getProductCategoryBreadcrumb();
        this.fixedMenuData.breadcrumbData = this.breadcrumbData;
      });
  }
}
