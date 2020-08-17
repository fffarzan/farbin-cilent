import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { NavbarComponent } from './articles/navbar/navbar.component';
import { RightSideComponent } from './articles/right-side/right-side.component';
import { LeftSideComponent } from './articles/left-side/left-side.component';
import { ArticleCarouselComponent } from './shared/article-carousel/article-carousel.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleDetailComponent,
    DictionaryDetailComponent,
    NavbarComponent,
    RightSideComponent,
    LeftSideComponent,
    ArticleCarouselComponent,
  ],
  imports: [
    ArticleRoutingModule,
    SharedModule
  ]
})
export class ArticleModule { }