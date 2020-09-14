import { Injectable } from '@angular/core';

import { CompareList } from './compare-list.model';
import { SearchProductComapare } from './search-product-compare.model';
import { ProductsCompareDetail } from './products-compare-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CompareListService {
  private productCompareList: CompareList[];
  private productsSearchResult: SearchProductComapare;
  private productCompareDetails: ProductsCompareDetail[];

  setCompareList(productList: CompareList[]) {
    this.productCompareList = productList;
  }

  getCompareList() {
    return this.productCompareList;
  }

  setProductSearchResult(searchResult: SearchProductComapare[]) {
    this.productsSearchResult = searchResult;
  }

  getProductSearchResult() {
    return this.productsSearchResult;
  }

  setProductCompareDetails(productDetail: ProductsCompareDetail[]) {
    this.productCompareDetails = productDetail;
  }

  getProductCompareDetails() {
    return this.productCompareDetails;
  }
}