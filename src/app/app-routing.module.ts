import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArticleCategoryComponent } from './article/article-category/article-category.component';
import { ArticleComponent } from './article/article-category/article/article.component';
import { DictionaryComponent } from './article/article-category/dictionary/dictionary.component';
import { IncidentRegisterComponent } from './auth/incident-register/incident-register.component';
import { CompareComponent } from './product/compare/compare.component';
import { CompareDetailComponent } from './product/compare/compare-detail/compare-detail.component';
import { ProductCategoryComponent } from './product/product-category/product-category.component';
import { MasterProductComponent } from './product/product-category/master-product/master-product.component';
import { DefineDetailProductComponent } from './product/product-category/master-product/define-detail-product/define-detail-product.component';
import { TrainingCategoryComponent } from './training-category/training-category.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { CourseComponent } from './training-category/course/course.component';
import { CourseGroupsComponent } from './training-category/course-groups/course-groups.component';
import { CourseGroupComponent } from './training-category/course-groups/course-group/course-group.component';
import { CourseHeldComponent } from './training-category/course-held/course-held.component';
import { CourseAttendanceComponent } from './training-category/course-held/course-attendance/course-attendance.component';
import { CoursesHeldComponent } from './training-category/courses-held/courses-held.component';
import { SupplierResolver } from './shared/supplier.resolver';

const routes: Routes = [
  {
    path: '', resolve: [SupplierResolver], children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
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
      {
        path: 'articles', component: ArticleCategoryComponent, children: [
          { path: 'article/:id', component: ArticleComponent },
          { path: 'dictionary/:id', component: DictionaryComponent }
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
        path: 'compare', component: CompareComponent, children: [
          { path: ':id', component: CompareDetailComponent }
        ]
      },
      { path: 'auth/incident-register/:id', component: IncidentRegisterComponent },
      { path: 'unsubscribe/:id', component: UnsubscribeComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
