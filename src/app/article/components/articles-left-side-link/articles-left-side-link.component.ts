import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ArticleCategory } from 'src/app/core/models/articles.model';
import { ArticlesLeftSideService } from '../../../core/services/articles-left-side.service';

@Component({
  selector: 'app-articles-left-side-link',
  templateUrl: './articles-left-side-link.component.html',
  styleUrls: ['./articles-left-side-link.component.css']
})
export class ArticlesLeftSideLinkComponent {
  @Input() article: ArticleCategory;
  @Output() isLatestArticlesClicked = new EventEmitter<any>();

  constructor(private articlesLeftSideService: ArticlesLeftSideService) { }

  onChooseArticleCategory(articles: ArticleCategory) {
    this.articlesLeftSideService.setLinkArticles(articles);
    this.isLatestArticlesClicked.emit();
  }
}
