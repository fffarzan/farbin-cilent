import { Component, OnInit, OnChanges, ElementRef, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { ProductDataStorageService } from '../../shared/product-data-storage.service';
import { CompareListService } from './compare-list.service';
import { CookieUtils } from 'src/app/shared/utils/cookie-utils';
import { ProductsCompareDetail } from './products-compare-detail.model';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { SearchProductComapare } from './search-product-compare.model';
import { DataManagementService } from 'src/app/shared/services/data-management.service';

@Component({
  selector: 'app-compare-list',
  templateUrl: './compare-list.component.html',
  styleUrls: ['./compare-list.component.css']
})
export class CompareListComponent implements OnInit, OnChanges {
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  compareListCookie: { CompareList: string } = { CompareList: this.getCompareListFromCookie() };
  productsCompareList: ProductsCompareDetail[];
  compareProductList: string[]; // rootScope
  comapreProductListCount: number[];
  compareProductListDetail;
  partNumberSearches: SearchProductComapare;
  recentlyViewedProducts: any[];
  partNumbersSearchText: string;
  visibleIndex = -1;

  constructor(
    private router: Router,
    private dataManagementService: DataManagementService,
    private extensionMethodService: ExtensionMethodService,
    private dataStorageService: ProductDataStorageService,
    private compareListSevice: CompareListService,
  ) { }

  ngOnInit(): void {
    this.setNumberOfCompareProducts();
    this.getCompareListFromCookie();
    this.getCompareListData();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  onShowPartNumberSearchbox(index: number) {
    this.partNumberSearches = { RuleDefine: [] };
    this.partNumbersSearchText = '';

    if (this.visibleIndex === index) this.visibleIndex = -1;
    else this.visibleIndex = index;
  }

  onAddToCompareListFromResult(id: string, e: Event) {
    this.partNumberSearches = { RuleDefine: [] };
    this.partNumbersSearchText = '';

    this.dataManagementService.addToCompareList(id, '');
    console.log(CookieUtils.getCookie('CompareList'));
    this.getCompareListData();
    console.log(this.productsCompareList)
  }

  onRemoveFromCompareList(id: string) {
    let cookies: string[] = this.getCompareListFromCookie().split(',');

    cookies = cookies.filter(productId => productId !== id);

    console.log(cookies)

    if (cookies.length === 0) {
      CookieUtils.deleteCookie('CompareList');
      // location.reload();
    } else {
      CookieUtils.setCookie('CompareList', cookies.join());
    }

    this.getCompareListData();
  }

  private getCompareListData() {
    this.dataStorageService.fetchComapareList(this.compareListCookie)
      .subscribe(() => {
        this.productsCompareList = this.compareListSevice.getCompareList();
        console.log(this.productsCompareList)

        const cookie: string = this.getCompareListFromCookie();
        if (cookie !== undefined) {
          this.compareProductList = cookie.split(',');

          if (cookie !== "") {
            CookieUtils.deleteCookie('CompareList');
            this.compareProductList.length = 0;
            // window.location.reload();
          } else {
            this.compareProductList = undefined;
          }
        }
      });
  }

  private getCompareListFromCookie(): string {
    console.log(CookieUtils.getCookie('CompareList'))
    return CookieUtils.getCookie('CompareList') === undefined ? '' : CookieUtils.getCookie('CompareList');
  }

  // ---------------------------------------------------------------------

  onChangePartNumberSearchText(text: string) {
    if (this.partNumbersSearchText.length > 2) this.getSearchPartNumers();
    else if (this.partNumbersSearchText.length === 0) this.partNumberSearches = { RuleDefine: [] };
  }

  private getSearchPartNumers() {
    this.dataStorageService.fetchProductsSearchResult({ SearchText: this.partNumbersSearchText })
      .subscribe(() => {
        this.partNumberSearches = this.compareListSevice.getProductSearchResult();
      });
  }

  // ---------------------------------------------------------------------

  // onSendToCompareDetail() {
  //   if (this.compareProductListDetail === 0) {
  //     // AutoClosingErrorAlert("!حداقل یک محصول باید انتخاب شود", 10000)
  //   } else {
  //     let compareListIdx = '';
  //     for (let i = 0; i < this.compareProductListDetail.length; i++) {
  //       if (i !== 0) compareListIdx += '-';

  //       compareListIdx += this.compareProductListDetail[i].IDXDefineDetailProduct;
  //     }

  //     this.router.navigate(['product/compare-detail', compareListIdx]);
  //   }
  // }

  // onAddToMaterialList(id: string) {
  //   this.dataManagementService.addToMaterialList(id);
  // }

  // private getRecentlyViewedProductsList() {
  //   const cookies = CookieUtils.getCookie('RecentlyViewedList');

  //   if (cookies) {
  //     this.dataStorageService.fetchRecentlyViewedCompareList({ CompareList: cookies })
  //       .subscribe(() => this.recentlyViewedProducts = this.compareListSevice.getProductCompareDetails());
  //   }
  // }

  private setNumberOfCompareProducts() {
    if (this.isMobile) this.comapreProductListCount = [0, 1];
    else this.comapreProductListCount = [0, 1, 2, 3, 4];
  }
}
