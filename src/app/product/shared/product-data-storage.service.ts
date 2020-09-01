import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ProductCategoryService } from '../product-category/product-category.service';
import { ProductCategory } from '../product-category/product-category.model';
import { ProductCategoryBreadcrumb } from '../product-category/product-category-breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataStorageService {
  constructor(
    private http: HttpClient,
    private productCategoryService: ProductCategoryService
  ) { }

  handleError(err: object) {
    console.error(err);

    return throwError('An error occured' + err);
  }

  fetchProductCategory(param: object) {
    return this.http
      .post<ProductCategory>(
        environment.baseUrl + '/api/ProductCategory/FillProductCategoryfromParentToMasterForSite/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(productCat => this.productCategoryService.setProductCategory(productCat))
      )
  }

  fetchProductCategoryBreadcrumb(param: object) {
    return this.http
      .post<ProductCategoryBreadcrumb>(
        environment.baseUrl + '/api/ProductCategory/GetProductCategoryFromChildToParentForSiteMapMenu/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(breadcrumb => this.productCategoryService.setProductCategoryBreadcrumb(breadcrumb))
      )
  }
}