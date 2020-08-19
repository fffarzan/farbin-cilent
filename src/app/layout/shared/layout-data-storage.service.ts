import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Banner } from '../home/dynamic-slider/banner.model';
import { SliderService } from '../home/dynamic-slider/slider.service';
import { Supplier } from '../navbar/supplier-menu/supplier.model';
import { SupplierService } from '../navbar/supplier-menu/supplier.service';
import { Catalog } from '../header/catalogs/catalog.model';
import { CatalogsService } from '../header/catalogs/catalogs.service';
import { Product } from '../../shared/carousel/product-carousel/product.model';
import { ProductCarouselService } from '../../shared/carousel/product-carousel/product-carousel.service';
import { SearchService } from '../header/search/search.service';
import { SearchContent, SearchTrainingCourse, SearchTrainingCourseUser, SearchTrainingCourseBatch, SearchIncident, SearchDefineDetail } from '../header/search/search.model';

@Injectable({
  providedIn: 'root'
})
export class LayoutDataStorageService {
  constructor(
    private http: HttpClient,
    private sliderService: SliderService,
    private supplierService: SupplierService,
    private catalogService: CatalogsService,
    private productCarouselService: ProductCarouselService,
    private searchService: SearchService,
  ) { }

  handleError(err: object) {
    console.error(err);

    return throwError('An error occured' + err);
  }

  fetchBanners() {
    return this.http
      .post<Banner[]>(
        environment.baseUrl + '/api/Banner/GetBanner/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(banners => this.sliderService.setBanners(banners))
      );
  }

  fetchSuppliers() {
    return this.http
      .post<Supplier[]>(
        environment.baseUrl + '/api/Supplier/FillSupplier/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(suppliers => this.supplierService.setSuppliers(suppliers))
      );
  }

  fetchProducts(param: object) {
    return this.http
      .post<Product[]>(
        environment.baseUrl + '/api/DefineDetailProduct/FillAllUnderConstractionDefineDetailProduct/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(products => this.productCarouselService.setProducts(products))
      );
  }

  fetchCatalogs() {
    return this.http
      .post<Catalog[]>(
        environment.baseUrl + '/api/Catalog/FillCatalog/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(catalogs => this.catalogService.setCatalogs(catalogs))
      );
  }

  fetchSearchDefineDetailProducts(param: object) {
    return this.http
      .post<SearchDefineDetail[]>(
        environment.baseUrl + '/api/Search/SearchRuleDefineProduct/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(defineDetailProducts => this.searchService.setDefneDetailProducts(defineDetailProducts))
      );
  }

  fetchSearchContent(param: object) {
    return this.http
      .post<SearchContent[]>(
        environment.baseUrl + '/api/Search/SearchContent/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(contents => this.searchService.setContents(contents))
      );
  }

  fetchSearchTrainingCourse(param: object) {
    return this.http
      .post<SearchTrainingCourse[]>(
        environment.baseUrl + '/api/Search/SearchTrainingCourse/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(trainingCourse => this.searchService.setTrainingCourses(trainingCourse))
      );
  }

  fetchSearchTrainingCourseUser(param: object) {
    return this.http
      .post<SearchTrainingCourseUser[]>(
        environment.baseUrl + '/api/Search/SearchTrainingCourseUser/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(trainingCourseUsers => this.searchService.setTrainingCourseUsers(trainingCourseUsers))
      );
  }

  fetchSearchTrainingCourseBatch(param: object) {
    return this.http
      .post<SearchTrainingCourseBatch[]>(
        environment.baseUrl + '/api/Search/SearchTrainingCourseBatch/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(trainingCourseBatchs => this.searchService.setTrainingCourseBatchs(trainingCourseBatchs))
      );
  }

  fetchSearchIncindent(param: object) {
    return this.http
      .post<SearchIncident[]>(
        environment.baseUrl + '/api/Search/SearchIncindet/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(incidents => this.searchService.setIncidents(incidents))
      );
  }
}