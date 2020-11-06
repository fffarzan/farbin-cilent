import { Component, OnInit, Input } from '@angular/core';

import { Articles } from '../../../core/models/articles.model';
import { ArticlesLeftSideService } from '../../../core/services/articles-left-side.service';

@Component({
  selector: 'app-articles-left-side',
  templateUrl: './articles-left-side.component.html',
  styleUrls: ['./articles-left-side.component.css']
})
export class ArticlesLeftSideComponent {
  @Input() articles = Articles;
  @Input() isLeftSideMenuOpen: boolean;
  isLatestArticlesClicked: boolean;

  constructor(private articlesLeftSideService: ArticlesLeftSideService) { }

  onChooseLatestArticles() {
    this.articlesLeftSideService.setLatestArticles();
    this.isLatestArticlesClicked = true;
  }

  onChooseArticleCategory(articles: Articles) {
    this.articlesLeftSideService.setLinkArticles(articles);
    this.isLatestArticlesClicked = false;
  }
}
