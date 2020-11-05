import { NgModule } from '@angular/core';

import { ArticleRouting } from './article.routing';
import { SharedModule } from '../shared/shared.module';
import { ArticleCarouselComponent } from './components/article-carousel/article-carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { ArticlesContentsComponent } from './components/articles-contents/articles-contents.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { DictionaryDetailComponent } from './pages/dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleDetailComponent,
    DictionaryDetailComponent,
    NavbarComponent,
    RightSideComponent,
    LeftSideComponent,
    ArticleCarouselComponent,
    ArticlesContentsComponent,
  ],
  imports: [
    ArticleRouting,
    SharedModule
  ]
})
export class ArticleModule { }