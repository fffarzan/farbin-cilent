import { Injectable } from '@angular/core';

import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailService {
  private article: Article;
  
  setArticle(article: Article) {
    this.article = article;
  }

  getArticle() {
    return this.article;
  }
}