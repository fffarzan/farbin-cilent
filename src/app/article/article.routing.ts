import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { DictionaryDetailComponent } from './pages/dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: [{ path: ':id', component: ArticlesComponent }]
  },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'dictionary/:id', component: DictionaryDetailComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRouting { }