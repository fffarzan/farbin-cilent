import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsAndEventsComponent } from './about-us/news-and-events/news-and-events.component';
import { NewsLetterArchiveComponent } from './about-us/news-and-events/news-letter-archive/news-letter-archive.component';
import { NewsLetterComponent } from './about-us/news-and-events/news-letter-archive/news-letter/news-letter.component';
import { IncidentArchiveComponent } from './about-us/news-and-events/incident-archive/incident-archive.component';
import { IncidentComponent } from './about-us/news-and-events/incident-archive/incident/incident.component';
import { SearchComponent } from './header/search/search.component';
import { CatalogsComponent } from './header/catalogs/catalogs.component';
import { ProductBrandsComponent } from './navbar/product-brands/product-brands.component';
import { ContactUsComponent } from './navbar/contact-us/contact-us.component';
import { CompareComponent } from './compare/compare.component';
import { CompareDetailComponent } from './compare/compare-detail/compare-detail.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { IncidentRegisterComponent } from './auth/incident-register/incident-register.component';
import { OwlModule } from 'ngx-owl-carousel';
import { DynamicSliderComponent } from './home/dynamic-slider/dynamic-slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCarouselComponent } from './shared/carousel/product-carousel/product-carousel.component';
import { CatalogPlaceholderDirective } from './shared/catalog-placeholder.directive';
import { CatalogsService } from './header/catalogs/catalogs.service';

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
    AboutUsComponent,
    NewsAndEventsComponent,
    NewsLetterArchiveComponent,
    NewsLetterComponent,
    IncidentArchiveComponent,
    IncidentComponent,
    SearchComponent,
    CatalogsComponent,
    ProductBrandsComponent,
    ContactUsComponent,
    CompareComponent,
    CompareDetailComponent,
    UnsubscribeComponent,
    IncidentRegisterComponent,
    DynamicSliderComponent,
    ProductCarouselComponent,
    CatalogPlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OwlModule,
    FontAwesomeModule
  ],
  providers: [
    CatalogsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CatalogsComponent
  ]
})
export class AppModule { }
