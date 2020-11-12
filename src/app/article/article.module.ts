import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ArticleRouting } from './article.routing';

import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { DictionaryDetailComponent } from './pages/dictionary-detail/dictionary-detail.component';

import { ArticleCarouselComponent } from './components/article-carousel/article-carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DailyPhraseComponent } from './components/daily-phrase/daily-phrase.component';
import { ArticleRightSideItemComponent } from './components/article-right-side-item/article-right-side-item.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticlesLeftSideLinkComponent } from './components/articles-left-side-link/articles-left-side-link.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleDetailComponent,
    DictionaryDetailComponent,
    NavbarComponent,
    ArticleCarouselComponent,
    DailyPhraseComponent,
    ArticleRightSideItemComponent,
    ArticlePreviewComponent,
    ArticleListComponent,
    ArticlesLeftSideLinkComponent,
  ],
  imports: [
    ArticleRouting,
    SharedModule
  ]
})
export class ArticleModule { }