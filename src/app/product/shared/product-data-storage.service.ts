import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ProductCategoryService } from '../product-category/product-category.service';
import { ProductCategory } from '../product-category/product-category.model';
import { ProductCategoryBreadcrumb } from '../product-category/product-category-breadcrumb.model';
import { MasterProduct } from '../master-product/master-product.model';
import { MasterProductService } from '../master-product/master-product.service';
import { RelatedDefineDetailProduct } from '../define-detail-product/related-define-detail-product.model';
import { DefineDetailProductService } from '../define-detail-product/define-detail-product.service';
import { AccessoryProduct } from '../define-detail-product/accessory-product.model';
import { TechnicalProperties } from '../define-detail-product/technical-properties.model';
import { DefineDetailProduct } from '../define-detail-product/define-detail-product.model';
import { RuleProperties } from '../define-detail-product/rule-properties.model';
import { ListFolderFile } from '../define-detail-product/list-folder-file.model';
import { OtherImage } from '../define-detail-product/other-image.model';
import { QuestionAndAnswer } from '../define-detail-product/question-and-answer.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataStorageService {
  constructor(
    private http: HttpClient,
    private productCategoryService: ProductCategoryService,
    private masterProductService: MasterProductService,
    private defineDetialProductService: DefineDetailProductService
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

  fetchDefineDetailProducts(param: object) {
    return this.http
      .post<MasterProduct>(
        environment.baseUrl + '/api/DefineDetailProduct/FillDefineDetailProductByIDXProduct/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(masterProduct => this.masterProductService.setMasterProduct(masterProduct))
      )
  }

  fetchMasterProductBreadcrumb(param: object) {
    return this.http
      .post<ProductCategoryBreadcrumb>(
        environment.baseUrl + '/api/ProductCategory/GetProductCategoryFromChildToParentForSiteMapMenu/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(breadcrumb => this.masterProductService.setMasterProductBreadcrumb(breadcrumb))
      )
  }

  fetchDefineDetialProduct(param: object) {
    return this.http
      .post<DefineDetailProduct[]>(
        environment.baseUrl + '/api/DefineDetailProduct/FillDefineDetailProductByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(product => this.defineDetialProductService.setDefineDetailProduct(product))
      )
  }

  fetchRelatedDefineDetailProducts(param: object) {
    return this.http
      .post<RelatedDefineDetailProduct[]>(
        environment.baseUrl + '/api/RelatedDefineDetailProduct/FillRelatedDefineDetailProductDataByIDXDefineDetailProduct/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(products => this.defineDetialProductService.setRelatedDefineDetailProducts(products))
      )
  }

  fetchAccessoryProductsOfDefineDetailProduct(param: object) {
    return this.http
      .post<AccessoryProduct[]>(
        environment.baseUrl + '/api/AccessoryProduct/FillAccessoryProductByIDXDefineDetailProduct/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(products => this.defineDetialProductService.setAccessoryProducts(products))
      )
  }

  fetchDefineDetialProductTechnicalProperties(param: object) {
    return this.http
      .post<TechnicalProperties[]>(
        environment.baseUrl + '/api/TechnicalProperties/FillTechnicalPropertiesByIDXDefineDetailProduct/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(props => this.defineDetialProductService.setTechnicalProperties(props))
      )
  }

  fetchDefineDetailProductRuleProperties(param: object) {
    return this.http
      .post<RuleProperties[]>(
        environment.baseUrl + '/api/DefineDetailProduct/FillRulePropertyProductByIDXDefineDetailProduct/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(props => this.defineDetialProductService.setRuleProperties(props))
      )
  }

  fetchDefineDetailProductListFoldersFiles(param: object) {
    return this.http
      .post<ListFolderFile[]>(
        environment.baseUrl + '/api/AttachInterfaceCategory/ListFoldersFilesByIDXDefineDetailProduct/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(files => this.defineDetialProductService.setListFoldersFiles(files))
      )
  }

  fetchDefineDetailProductOtherImages(param: object) {
    return this.http
      .post<OtherImage[]>(
        environment.baseUrl + '/api/AttachInterfaceCategory/FillOtherImagesOfDefineDetailProductByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(images => this.defineDetialProductService.setOtherImages(images))
      )
  }

  fetchDefineDetailQuestionAndAnswer(param: object) {
    return this.http
      .post<QuestionAndAnswer[]>(
        environment.baseUrl + '/api/QuestionAndAnswer/FillQuestionAndAnswerForDefineDetailProductByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(qAnda => this.defineDetialProductService.setQuestionsAndAnswers(qAnda))
      )
  }
}