import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { DictionaryWord } from '../dictionary-detail/dictionary-word.model';
import { ArticlesService } from '../articles/articles.service';
import { Articles } from "../articles/articles.model";
import { Article } from '../article-detail/article.model';
import { ArticleDetailService } from '../article-detail/article-detail.service';
import { DictionaryDetailService } from '../dictionary-detail/dictionary-detial.service';

@Injectable({
  providedIn: 'root'
})
export class ArtcileDataStorageService {
  constructor(
    private http: HttpClient,
    private articlesService: ArticlesService,
    private articleDetailService: ArticleDetailService,
    private dictionayDetailService: DictionaryDetailService
  ) { }

  handleError(err: object) {
    console.error(err);

    return throwError('An error occured' + err);
  }

  fetchOneDictionaryWordRandom() {
    return this.http
      .post<DictionaryWord>(
        environment.baseUrl + '/api/Dictionary/GetOneRecordRandom/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(word => this.articlesService.setRandomDictionaryWord(word))
      )
  }

  fetchDictionaryWordDetail(param: object) {
    return this.http
      .post<DictionaryWord>(
        environment.baseUrl + '/api/Dictionary/GetDictionaryByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(word => this.dictionayDetailService.setDictionaryWordDetail(word[0]))
      )
  }

  fetchArticlesForSides(param: object) {
    return this.http
      .post<Articles>(
        environment.baseUrl + '/api/ContentModuleRet/GetContentModuleByUniqueName/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(articles => this.articlesService.setArticles(articles))
      )
  }

  fetchArticle(param: object) {
    return this.http
      .post<Article>(
        environment.baseUrl + '/api/Content/FillContentByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(article => this.articleDetailService.setArticle(article))
      )
  }

  likeArticle(param: object) {
    return this.http
      .post<string>(
        environment.baseUrl + '/api/Content/LikeContent/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
  }
}