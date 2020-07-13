import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Banner } from '../home/dynamic-slider/banner.model';
import { SliderService } from '../home/dynamic-slider/slider.service';
import { Supplier } from './supplier.model';
import { SupplierService } from './supplier.service';
import { Catalog } from '../header/catalogs/catalog.model';
import { CatalogsService } from '../header/catalogs/catalogs.service';
import { Product } from './carousel/product-carousel/product.model';
import { ProductCarouselService } from './carousel/product-carousel/product-carousel.service';
import { SearchService } from '../header/search/search.service';
import { SearchContent, SearchTrainingCourse, SearchTrainingCourseUser, SearchTrainingCourseBatch, SearchIncident, SearchDefineDetail } from '../header/search/search.model';
import { Incident } from '../about-us/news-and-events/incident/incident-detail/incident.model';
import { IncidentCategory } from '../about-us/news-and-events/incident/incident-list/incident-category.model';
import { IncidentService } from '../about-us/news-and-events/incident/incident.service';
import { IncidentPreview } from '../about-us/news-and-events/incident/incident-list/incident-preview.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private sliderService: SliderService,
    private supplierService: SupplierService,
    private catalogService: CatalogsService,
    private productCarouselService: ProductCarouselService,
    private searchService: SearchService,
    private incidentService: IncidentService
  ) { }

  // homepage requests

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

  // search requests

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
  
  // incident requests

  fetchIncidentPreviews() {
    return this.http
      .post<IncidentPreview[]>(
        environment.baseUrl + '/api/Incident/GetIncidentAll/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(incidentPreviews => this.incidentService.setIncidentPreviews(incidentPreviews))
      );
  }

  fetchIncident(param: object) {
    return this.http
      .post<Incident>(
        environment.baseUrl + '/api/Incident/GetIncidentData_ByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(incident => this.incidentService.setIncident(incident))
      );
  }

  fetchIncidentCategory() {
    return this.http
      .post<IncidentCategory[]>(
        environment.baseUrl + '/api/IncidentCategory/GetIncidentCategory/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(incidentCategories => this.incidentService.setIncidentCategories(incidentCategories))
      );
  }
}