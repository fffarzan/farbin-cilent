import { NgModule } from '@angular/core';

import { ArticleRouting } from './article.routing';
import { SharedModule } from '../shared/shared.module';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { NavbarComponent } from './articles/navbar/navbar.component';
import { RightSideComponent } from './articles/right-side/right-side.component';
import { LeftSideComponent } from './articles/left-side/left-side.component';
import { ArticleCarouselComponent } from './shared/article-carousel/article-carousel.component';
import { ArticlesContentsComponent } from './articles/articles-contents/articles-contents.component';

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