import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductDataStorageService } from '../../shared/product-data-storage.service';
import { CompareListService } from './compare-list.service';
import { CookieUtils } from 'src/app/shared/utils/cookie-utils';
import { ProductsCompareDetail } from './products-compare-detail.model';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { ProductCarouselParams } from 'src/app/shared/product-carousel/product-carousel-params.model';

@Component({
  selector: 'app-compare-list',
  templateUrl: './compare-list.component.html',
  styleUrls: ['./compare-list.component.css']
})
export class CompareListComponent implements OnInit, OnDestroy {
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  productsCompareList: ProductsCompareDetail[];
  compareProductList: string[]; // rootScope
  productCompareListSub: Subscription;
  comapreProductListCount: number[];
  recentlyViewedProducts: any[];
  recentlyViewedProductsSub: Subscription;
  carouselData: ProductCarouselParams = {
    staticUrl: '',
    dynamicFieldName: 'DefineDetailProductPicUrl',
    pageUrlDirection: 'DefineDetailProduct',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 6 } }
    },
    mobileOptions: {
      mobileItems: { maxSize: 500, items: 2.1 },
      tabletItems: { maxSize: 768, items: 0 },
      desktopItems: { maxSize: 1024, items: 4 }
    },
    data: null
  };

  constructor(
    private router: Router,
    private extensionMethodService: ExtensionMethodService,
    private dataStorageService: ProductDataStorageService,
    private compareListSevice: CompareListService,
  ) { }

  ngOnInit(): void {
    this.setNumberOfCompareProducts();
    this.getCompareListData({ CompareList: CookieUtils.getCookie('CompareList') });
    this.getRecentlyViewedProductsList();
  }

  onRunGetComapreListData(compareListStr: string) {
    this.getCompareListData({ CompareList: compareListStr });
  }

  onSendToCompareDetail() {
    if (this.productsCompareList.length === 0) {
      // AutoClosingErrorAlert("!حداقل یک محصول باید انتخاب شود", 10000)
    } else {
      let compareListIdx = '';
      for (let i = 0; i < this.productsCompareList.length; i++) {
        if (i !== 0) compareListIdx += '-';

        compareListIdx += this.productsCompareList[i].IDXDefineDetailProduct;
      }

      this.router.navigate(['product/compare-detail', compareListIdx]);
    }
  }

  ngOnDestroy() {
    if (this.productsCompareList) this.productCompareListSub.unsubscribe();
    if (this.recentlyViewedProducts) this.recentlyViewedProductsSub.unsubscribe();
  }

  private getCompareListData(compareListStr: { CompareList: string }) {
    this.productCompareListSub = this.dataStorageService.fetchCompareList(compareListStr)
      .subscribe(() => {
        this.productsCompareList = this.compareListSevice.getCompareList();

        const cookie: string = CookieUtils.getCookie('CompareList');
        if (cookie !== undefined) {
          this.compareProductList = cookie.split(',');

          if (cookie !== "") {
            CookieUtils.deleteCookie('CompareList');
            this.compareProductList.length = 0;
          } else
            this.compareProductList = undefined;
        }
      });
  }

  private getRecentlyViewedProductsList() {
    const cookies = CookieUtils.getCookie('RecentlyViewedList');

    if (cookies) {
      this.recentlyViewedProductsSub = this.dataStorageService.fetchRecentlyViewedCompareList({ CompareList: cookies })
        .subscribe(() => this.recentlyViewedProducts = this.compareListSevice.getProductCompareDetails());
    }
  }

  private setNumberOfCompareProducts() {
    if (this.isMobile) this.comapreProductListCount = [0, 1];
    else this.comapreProductListCount = [0, 1, 2, 3, 4];
  }
}
