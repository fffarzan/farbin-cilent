import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Banner } from '../layout/home/dynamic-slider/banner.model';
import { SliderService } from '../layout/home/dynamic-slider/slider.service';
import { Supplier } from './supplier.model';
import { SupplierService } from './supplier.service';
import { Catalog } from '../layout/header/catalogs/catalog.model';
import { CatalogsService } from '../layout/header/catalogs/catalogs.service';
import { Product } from './carousel/product-carousel/product.model';
import { ProductCarouselService } from './carousel/product-carousel/product-carousel.service';
import { SearchService } from '../layout/header/search/search.service';
import { SearchContent, SearchTrainingCourse, SearchTrainingCourseUser, SearchTrainingCourseBatch, SearchIncident, SearchDefineDetail } from '../layout/header/search/search.model';
import { Incident } from '../about-us/incident/incident-detail/incident.model';
import { IncidentCategory } from '../about-us/incident/incident-list/incident-category.model';
import { IncidentService } from '../about-us/incident/incident.service';
import { IncidentPreview } from '../about-us/incident/incident-list/incident-preview.model';
import { of, throwError } from 'rxjs';
import { NewsletterService } from '../about-us/newsletter/newsletter.service';
import { Newsletters } from '../about-us/newsletter/newsletter-list/newsletters.model';
import { Newsletter } from '../about-us/newsletter/newsletter-detail/newsletter.model';
import { TrainingCourseHeldReview } from '../training/training-course-held-review.model';
import { TrainingService } from '../training/training.service';
import { TrainingCoursesReview } from '../training/training-course-review.model';
import { TrainingCourseService } from '../training/training-course/training-course.service';
import { TrainingCourse } from '../training/training-course/training-course.model';
import { TrainingCourseHeldList } from '../training/training-course-held-list/training-course-held-list.model';
import { TrainingCourseHeldListService } from '../training/training-course-held-list/training-course-held-list.service'
import { TrainingCourseHeldCarouselReview } from '../training/shared/training-course-held-carousel-review.model';
import { TrainingCourseHeldBatchListService } from '../training/training-course-held-batch-list/training-course-held-batch-list.service';

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
    private incidentService: IncidentService,
    private newsletterService: NewsletterService,
    private trainingService: TrainingService,
    private trainingCourseService: TrainingCourseService,
    private trainingCourseHeldBatchListService: TrainingCourseHeldBatchListService
    private trainingCourseHeldListService: TrainingCourseHeldListService
  ) { }

  handleError(err: object) {
    console.error(err);

    return throwError('An error occured' + err);
  }

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

  // newsletter requests

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

  fetchNewsletters() {
    return this.http
      .post<Newsletters>(
        environment.baseUrl + '/api/ContentCategoryType/FillNewsLetterCategoryComplete/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(newletters => this.newsletterService.setNewsletters(newletters))
      );
  }

  fetchNewsletter(param: object) {
    return this.http
      .post<Newsletter>(
        environment.baseUrl + '/api/Content/FillContentByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(newsletter => this.newsletterService.setNewsletter(newsletter))
      );
  }

  fetchUnsubscribeData(param: object) {
    return this.http
    .post<{ Email: string }>(
      environment.baseUrl + '/api/NewsLetter/Unsubscribe/',
      param,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
    .pipe(
      catchError(err => this.handleError(err))
    );
  }

  // training requests

  fetchTrainigCoursesReview() {
    return this.http
      .post<TrainingCoursesReview[]>(
        environment.baseUrl + '/api/TrainingCourseCategory/GetTrainingCourseCategory_Tree/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(courses => this.trainingService.setTrainingCoursesReview(courses))
      );
  }

  fetchTrainingCourseHeldReview() {
    return this.http
      .post<TrainingCourseHeldReview[]>(
        environment.baseUrl + '/api/TrainingCourse/GetTrainingCourse/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(coursesHeld => this.trainingService.setTrainingCoursesHeldReview(coursesHeld))
      );
  }

  // training course requests

  fetchTrainingCourse(param: object) {
    return this.http
      .post<TrainingCourse>(
        environment.baseUrl + '/api/TrainingCourseCategory/GetTrainingCourseCategoryByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(trainingCourse => this.trainingCourseService.setTrainingCourse(trainingCourse))
      )
  }

  fetchTrainingCoursesHeldFromCourse(param: object) {
    return this.http
      .post<TrainingCourseHeldCarouselReview>(
        environment.baseUrl + '/api/ContentModuleRet/GetContentModuleByUniqueName/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(trainingCoursesHeld => this.trainingCourseService.setTrainingCoursesHeld(trainingCoursesHeld))
      )
  }

  fetchTrainingCourseHeldList(param: object) {
    return this.http
      .post<TrainingCourseHeldList[]>(
        environment.baseUrl + '/api/TrainingCourse/GetDataForSiteByIDXTrainingCourseCategory/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(coursesHeldList => this.trainingCourseHeldListService.setTrainingCourseHeldList(coursesHeldList))
      )
  }

  fetchTrainingCourseHeldBatchList(param: object) {
    return this.http
      .post<TrainingCourseHeldCarouselReview[]>(
        environment.baseUrl + '/api/ContentModuleRet/GetContentModuleByUniqueName/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(coursesHeld => this.trainingCourseHeldBatchListService.setTrainingCourseHeldBatchListService(coursesHeld))
      )
  }
}