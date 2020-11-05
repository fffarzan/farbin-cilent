import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticlesLeftSideService {
  private articles: Subject<any> = new Subject<any>();
  private isLatestArticlesLink: Subject<boolean> = new Subject<boolean>();
  articlesObs = this.articles.asObservable();
  isLatestArticlesLinkObs = this.isLatestArticlesLink.asObservable();

  setLinkArticles(articles) {
    this.articles.next(articles);
  }

  setLatestArticles(isSet: boolean) {
    this.isLatestArticlesLink.next(isSet);
  }
}