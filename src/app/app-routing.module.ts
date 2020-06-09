import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsAndEventsComponent } from './about-us/news-and-events/news-and-events.component';
import { IncidentArchiveComponent } from './about-us/news-and-events/incident-archive/incident-archive.component';
import { IncidentComponent } from './about-us/news-and-events/incident-archive/incident/incident.component';
import { NewsLetterArchiveComponent } from './about-us/news-and-events/news-letter-archive/news-letter-archive.component';
import { NewsLetterComponent } from './about-us/news-and-events/news-letter-archive/news-letter/news-letter.component';
import { ArticleCategoryComponent } from './article-category/article-category.component';
import { ArticleComponent } from './article-category/article/article.component';
import { DictionaryComponent } from './article-category/dictionary/dictionary.component';
import { IncidentRegisterComponent } from './auth/incident-register/incident-register.component';
import { CompareComponent } from './compare/compare.component';
import { CompareDetailComponent } from './compare/compare-detail/compare-detail.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { MasterProductComponent } from './product-category/master-product/master-product.component';
import { DefineDetailProductComponent } from './product-category/master-product/define-detail-product/define-detail-product.component';
import { TrainingCategoryComponent } from './training-category/training-category.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { CourseComponent } from './training-category/course/course.component';
import { CourseGroupsComponent } from './training-category/course-groups/course-groups.component';
import { CourseGroupComponent } from './training-category/course-groups/course-group/course-group.component';
import { CourseHeldComponent } from './training-category/course-held/course-held.component';
import { CourseAttendanceComponent } from './training-category/course-held/course-attendance/course-attendance.component';
import { CoursesHeldComponent } from './training-category/courses-held/courses-held.component';
<<<<<<< develop
import { SliderResolverService } from './home/dynamic-slider/slider-resolver.service';
import { SupplierResolverService } from './navbar/product-brands/supplier-resolver.service';
import { ProductCarouselResolver } from './shared/carousel/product-carousel/product-carousel.resolver'
=======
import { SliderResolver } from './home/dynamic-slider/slider.resolver';
import { SupplierResolver } from './navbar/product-brands/supplier.resolver'
>>>>>>> Creating Fundamentals of Catalog

const routes: Routes = [
  {
    path: '', resolve: [SupplierResolver], children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
<<<<<<< develop
      { path: 'home', component: HomeComponent, resolve: [SliderResolverService, ProductCarouselResolver] },
=======
      { path: 'home', component: HomeComponent, resolve: [SliderResolver] },
>>>>>>> Creating Fundamentals of Catalog
      {
        path: 'about-us', component: AboutUsComponent, children: [
          {
            path: 'news-and-events', component: NewsAndEventsComponent, children: [
              {
                path: 'incidents', component: IncidentArchiveComponent, children: [
                  { path: ':id', component: IncidentComponent }
                ]
              }
            ]
          },
          {
            path: 'news-letters', component: NewsLetterArchiveComponent, children: [
              { path: ':id', component: NewsLetterComponent }
            ]
          }
        ]
      },
      {
        path: 'articles', component: ArticleCategoryComponent, children: [
          { path: 'article/:id', component: ArticleComponent },
          { path: 'dictionary/:id', component: DictionaryComponent }
        ]
      },
      { path: 'auth/incident-register/:id', component: IncidentRegisterComponent },
      {
        path: 'compare', component: CompareComponent, children: [
          { path: ':id', component: CompareDetailComponent }
        ]
      },
      {
        path: 'product-category/:id/:id', component: ProductCategoryComponent, children: [
          {
            path: 'master-product/:id', component: MasterProductComponent, children: [
              { path: 'define-detail-produt/:id', component: DefineDetailProductComponent }
            ]
          }
        ]
      },
      {
        path: 'training', component: TrainingCategoryComponent, children: [
          { path: 'course/:id', component: CourseComponent },
          {
            path: 'course-groups', component: CourseGroupsComponent, children: [
              { path: ':id', component: CourseGroupComponent }
            ]
          },
          {
            path: 'course-held/:id', component: CourseHeldComponent, children: [
              { path: 'course-attendance/:id', component: CourseAttendanceComponent }
            ]
          },
          { path: 'courses-held/:id', component: CoursesHeldComponent }
        ]
      },
      { path: 'unsubscribe/:id', component: UnsubscribeComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
