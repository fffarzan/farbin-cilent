import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Articles } from '../models/articles.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesLeftSideService {
  private articles$: Subject<Articles> = new Subject<Articles>();
  private isLatestArticlesLink$: Subject<any> = new Subject<any>();
  articlesObs = this.articles$.asObservable();
  isLatestArticlesLinkObs = this.isLatestArticlesLink$.asObservable();

  setLinkArticles(articles: Articles) {
    this.articles$.next(articles);
  }

  setLatestArticles() {
    this.isLatestArticlesLink$.next();
  }
}