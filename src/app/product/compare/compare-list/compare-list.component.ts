import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductDataStorageService } from '../../shared/product-data-storage.service';
import { CompareListService } from './compare-list.service';
import { CookieUtils } from 'src/app/shared/utils/cookie-utils';
import { ProductsCompareDetail } from './products-compare-detail.model';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';

@Component({
  selector: 'app-compare-list',
  templateUrl: './compare-list.component.html',
  styleUrls: ['./compare-list.component.css']
})
export class CompareListComponent implements OnInit {
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  productsCompareList: ProductsCompareDetail[];
  compareProductList: string[]; // rootScope
  comapreProductListCount: number[];
  recentlyViewedProducts: any[];

  constructor(
    private router: Router,
    private extensionMethodService: ExtensionMethodService,
    private dataStorageService: ProductDataStorageService,
    private compareListSevice: CompareListService,
  ) { }

  ngOnInit(): void {
    this.setNumberOfCompareProducts();
    this.getCompareListData({ CompareList: CookieUtils.getCookie('CompareList') });
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

  private getCompareListData(compareListStr: { CompareList: string }) {
    this.dataStorageService.fetchCompareList(compareListStr)
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

  // ---------------------------------------------------------------------

  // private getRecentlyViewedProductsList() {
  //   const cookies = CookieUtils.getCookie('RecentlyViewedList');

  //   if (cookies) {
  //     this.dataStorageService.fetchRecentlyViewedCompareList({ CompareList: cookies })
  //       .subscribe(() => this.recentlyViewedProducts = this.compareListSevice.getProductCompareDetails());
  //   }
  // }

  // ---------------------------------------------------------------------

  private setNumberOfCompareProducts() {
    if (this.isMobile) this.comapreProductListCount = [0, 1];
    else this.comapreProductListCount = [0, 1, 2, 3, 4];
  }
}
