import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ArticleCategory } from '../models/articles.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesLeftSideService {
  private articles$: Subject<ArticleCategory> = new Subject<ArticleCategory>();
  private isLatestArticlesLink$: Subject<any> = new Subject<any>();
  articlesObs = this.articles$.asObservable();
  isLatestArticlesLinkObs = this.isLatestArticlesLink$.asObservable();

  setLinkArticles(articles: ArticleCategory) {
    this.articles$.next(articles);
  }

  setLatestArticles() {
    this.isLatestArticlesLink$.next();
  }
}