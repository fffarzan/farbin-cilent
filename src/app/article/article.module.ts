import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleDetailComponent,
    DictionaryDetailComponent
  ],
  imports: [
    ArticleRoutingModule,
    SharedModule
  ]
})
export class ArticleModule { }