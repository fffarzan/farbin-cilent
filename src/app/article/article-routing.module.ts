import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'article/dictionary/:id', component: DictionaryDetailComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }