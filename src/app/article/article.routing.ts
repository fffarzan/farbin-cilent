import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { ArticlesContentsComponent } from './articles/articles-contents/articles-contents.component';
import { ArticlesContentsResolver } from './articles/articles-contents/articles-content.resolver';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    resolve: { articles: ArticlesContentsResolver },
    children: [{ path: ':id', component: ArticlesContentsComponent }]
  },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'dictionary/:id', component: DictionaryDetailComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRouting { }