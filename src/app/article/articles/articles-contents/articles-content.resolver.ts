import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ArtcileDataStorageService } from '../../shared/article-data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesContentsResolver implements Resolve<any> {
  constructor(private articleDataStorageService: ArtcileDataStorageService) { }

  resolve() {
    return this.articleDataStorageService.fetchArticlesForSides({ UniqueName: 'MiddleArticleCategory' });
  }
}