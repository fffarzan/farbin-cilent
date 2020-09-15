import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { environment } from 'src/environments/environment';
import { CookieUtils } from 'src/app/shared/utils/cookie-utils';
import { DataManagementService } from 'src/app/shared/services/data-management.service';
import { SearchProductComapare } from '../search-product-compare.model';
import { ProductDataStorageService } from 'src/app/product/shared/product-data-storage.service';
import { ProductsCompareDetail } from '../products-compare-detail.model';
import { CompareListService } from '../compare-list.service';

@Component({
  selector: 'app-compare-item',
  templateUrl: './compare-item.component.html',
  styleUrls: ['./compare-item.component.css']
})
export class CompareItemComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  @Input() item: ProductsCompareDetail;
  @Input() index: number;
  @Output() changedItem = new EventEmitter<string>();
  compareListCookie;
  partNumberSearches: SearchProductComapare;
  partNumbersSearchText: string;
  visibleIndex = -1;

  constructor(
    private dataManagementService: DataManagementService,
    private dataStorageService: ProductDataStorageService,
    private compareListSevice: CompareListService
  ) { }

  ngOnInit(): void {
    this.compareListCookie = CookieUtils.getCookie('CompareList') === undefined ? '' : CookieUtils.getCookie('CompareList');
  }

  onShowPartNumberSearchbox(index: number) {
    this.partNumberSearches = { RuleDefine: [] };
    this.partNumbersSearchText = '';

    if (this.visibleIndex === index) this.visibleIndex = -1;
    else this.visibleIndex = index;
  }

  onRemoveFromCompareList(id: string) {
    const cookie: string = CookieUtils.getCookie('CompareList');
    let cookieArray: string[];

    cookieArray = cookie.split(',').filter(productId => productId !== id);

    if (cookieArray.length === 0) CookieUtils.deleteCookie('CompareList');
    else CookieUtils.setCookie('CompareList', cookieArray.join());

    // showing add quick button
    this.visibleIndex = -1

    this.changedItem.emit(cookieArray.join());
  }

  onAddToCompareListFromResult(id: string, e: Event) {
    this.partNumberSearches = { RuleDefine: [] };
    this.partNumbersSearchText = '';

    this.dataManagementService.addToCompareList(id, '');
    this.compareListCookie = CookieUtils.getCookie('CompareList') === undefined ? '' : CookieUtils.getCookie('CompareList');
    this.changedItem.emit(this.compareListCookie);
  }

  onChangePartNumberSearchText(text: string) {
    if (this.partNumbersSearchText.length > 2) this.getSearchPartNumers();
    else if (this.partNumbersSearchText.length === 0) this.partNumberSearches = { RuleDefine: [] };
  }

  onAddToMaterialList(id: string) {
    this.dataManagementService.addToMaterialList(id);
  }

  private getSearchPartNumers() {
    this.dataStorageService.fetchProductsSearchResult({ SearchText: this.partNumbersSearchText })
      .subscribe(() => this.partNumberSearches = this.compareListSevice.getProductSearchResult());
  }
}
