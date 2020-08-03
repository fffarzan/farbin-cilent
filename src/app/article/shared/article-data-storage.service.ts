import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { DictionaryWord } from '../dictionary-detail/dictionary-word.model';
import { tap } from 'rxjs/operators';
import { ArticlesService } from '../articles/articles.service';
import { Articles } from "../articles/articles.model";

@Injectable({
  providedIn: 'root'
})
export class ArtcileDataStorageService {
  constructor(
    private http: HttpClient,
    private articlesService: ArticlesService
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

}