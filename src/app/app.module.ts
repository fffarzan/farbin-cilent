import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TrainingCategoryComponent } from './training-category/training-category.component';
import { ArticleCategoryComponent } from './article-category/article-category.component';
import { ArticleComponent } from './article-category/article/article.component';
import { DictionaryComponent } from './article-category/dictionary/dictionary.component';
import { CourseComponent } from './training-category/course/course.component';
import { CourseHeldComponent } from './training-category/course-held/course-held.component';
import { CourseGroupsComponent } from './training-category/course-groups/course-groups.component';
import { CourseGroupComponent } from './training-category/course-groups/course-group/course-group.component';
import { CoursesHeldComponent } from './training-category/courses-held/courses-held.component';
import { CourseAttendanceComponent } from './training-category/course-held/course-attendance/course-attendance.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { MasterProductComponent } from './product-category/master-product/master-product.component';
import { DefineDetailProductComponent } from './product-category/master-product/define-detail-product/define-detail-product.component';
import { SearchComponent } from './header/search/search.component';
import { CatalogsComponent } from './header/catalogs/catalogs.component';
import { SupplierMenuComponent } from './navbar/supplier-menu/supplier-menu.component';
import { ContactMenuComponent } from './navbar/contact-menu/contact-menu.component';
import { CompareComponent } from './compare/compare.component';
import { CompareDetailComponent } from './compare/compare-detail/compare-detail.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { IncidentRegisterComponent } from './auth/incident-register/incident-register.component';
import { DynamicSliderComponent } from './home/dynamic-slider/dynamic-slider.component';
import { CatalogPlaceholderDirective } from './header/catalogs/catalog-placeholder.directive';
import { CatalogsService } from './header/catalogs/catalogs.service';
import { SearchService } from './header/search/search.service';
import { ContactMenuPlaceholderDirective } from './navbar/contact-menu/contact-menu-placeholder.directive';
import { SupplierMenuPlaceholderDirective } from './navbar/supplier-menu/supplier-menu-placeholder.directive';
import { NavbarService } from './navbar/navbar.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    TrainingCategoryComponent,
    ArticleCategoryComponent,
    ArticleComponent,
    DictionaryComponent,
    CourseComponent,
    CourseHeldComponent,
    CourseGroupsComponent,
    CourseGroupComponent,
    CoursesHeldComponent,
    CourseAttendanceComponent,
    ProductCategoryComponent,
    MasterProductComponent,
    DefineDetailProductComponent,
    SearchComponent,
    CatalogsComponent,
    SupplierMenuComponent,
    ContactMenuComponent,
    CompareComponent,
    CompareDetailComponent,
    UnsubscribeComponent,
    IncidentRegisterComponent,
    DynamicSliderComponent,
    CatalogPlaceholderDirective,
    ContactMenuPlaceholderDirective,
    SupplierMenuPlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CarouselModule,
    SharedModule
  ],
  providers: [
    CatalogsService,
    SearchService,
    NavbarService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CatalogsComponent,
    ContactMenuComponent,
    SupplierMenuComponent
  ]
})
export class AppModule { }
