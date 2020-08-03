import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ArtcileDataStorageService } from '../shared/article-data-storage.service';
import { ArticlesService } from './articles.service';
import { DictionaryWord } from '../dictionary-detail/dictionary-word.model';
import { Articles } from './articles.model';
import { ArticlePreview } from './article-preview.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  enviornment: { production: boolean, baseUrl: string } = environment;
  randomDictionaryWord: DictionaryWord;
  contentArticles: Articles;
  rightSideAtricles: Articles;
  leftSideArticles: Articles;
  randomDictionaryWordSub: Subscription;
  contentArticlesSub: Subscription;
  rightSideAtriclesSub: Subscription;
  leftSideArticlesSub: Subscription;
  contentArticleLazyLoad: ArticlePreview[];
  contentTitleLazyLoad: { 'Title': string, 'ID': string, 'ErrorText'?: string }[];

  constructor(
    private articleDataStorageService: ArtcileDataStorageService,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.randomDictionaryWordSub = this.articleDataStorageService.fetchOneDictionaryWordRandom()
      .subscribe(() => {
        this.randomDictionaryWord = this.articlesService.getRandomDictionaryWord()[0];
      });

    this.rightSideAtriclesSub = this.articleDataStorageService.fetchArticlesForSides({ UniqueName: 'RightArticleCategory' })
      .subscribe(() => {
        this.rightSideAtricles = this.articlesService.getArticles();

        let rightSideAtriclesLength = Object.keys(this.rightSideAtricles).length;
        for (let i = 0; i < rightSideAtriclesLength; i++) {
          if (this.rightSideAtricles[i].Items)
            this.rightSideAtricles[i].Items = JSON.parse(this.rightSideAtricles[i].Items);
        }
      });

    this.leftSideArticlesSub = this.articleDataStorageService.fetchArticlesForSides({ UniqueName: 'LeftArticleCategory' })
      .subscribe(() => {
        this.leftSideArticles = this.articlesService.getArticles();

        let leftSideArticlesLength = Object.keys(this.leftSideArticles).length;
        for (let i = 0; i < leftSideArticlesLength; i++) {
          if (this.leftSideArticles[i].Items)
            this.leftSideArticles[i].Items = JSON.parse(this.leftSideArticles[i].Items);
        }
      });

    this.contentArticlesSub = this.articleDataStorageService.fetchArticlesForSides({ UniqueName: 'MiddleArticleCategory' })
      .subscribe(() => {
        this.contentArticles = this.articlesService.getArticles();

        let contentArticlesLength = Object.keys(this.contentArticles).length;
        for (let i = 0; i < contentArticlesLength; i++) {
          if (this.contentArticles[i].Items)
            this.contentArticles[i].Items = JSON.parse(this.contentArticles[i].Items);
        }

        // fill 
        this.contentArticleLazyLoad = this.contentLazyLoad(this.contentArticles).articleLazyLoad;
        this.contentTitleLazyLoad = this.contentLazyLoad(this.contentArticles).titleLazyLoad;
      });
  }

  ngOnDestroy() {
    this.randomDictionaryWordSub.unsubscribe();
    this.rightSideAtriclesSub.unsubscribe();
    this.leftSideArticlesSub.unsubscribe();
    this.contentArticlesSub.unsubscribe();
  }

  private contentLazyLoad(dataArray: Articles)
    : { 'articleLazyLoad': ArticlePreview[], 'titleLazyLoad': { 'Title': string, 'ID': string, 'ErrorText'?: string }[] } {
    let dataArrayLength = Object.keys(dataArray).length;
    let titleLazyLoad: { 'Title': string, 'ID': string, 'ErrorText'?: string }[] = [];
    let titleTemp: { 'Title': string, 'ID': string, 'ErrorText'?: string }[] = [];
    let contentLazyLoad: ArticlePreview[] = [];
    let contentTemp: ArticlePreview[] = [];

    if (dataArrayLength) { // if data has loaded for first time
      for (let i = 0; i < dataArrayLength; i++) {
        titleTemp.push({ 'Title': dataArray[i].Title, 'ID': dataArray[i].ID });
        titleLazyLoad.push({ 'Title': titleTemp[i].Title, 'ID': titleTemp[i].ID });

        // loading first 5 items
        if (dataArray[i].Items) {
          for (let j = 0; j < dataArray[i].Items.length; j++) {
            contentTemp.push(dataArray[i].Items[j]);
            if (contentTemp.length <= 5) contentLazyLoad.push(dataArray[i].Items[j]);
          }
        }
      }
    } else if (!dataArrayLength && dataArray.Items) { // if data has loaded form one of left side links
      titleTemp.push({ 'Title': dataArray.Title, 'ID': dataArray.ID });
      titleLazyLoad.push({ 'Title': titleTemp[0].Title, 'ID': titleTemp[0].ID });

      // loading first 5 items
      for (let i = 0; i < dataArray.Items.length; i++) {
        contentTemp.push(dataArray[0].Items[i]);
        if (contentTemp.length <= 5) contentLazyLoad.push(dataArray[0].Items[i]);
      }
    } else if (!dataArrayLength) {  // if no article was existed in the category
      titleLazyLoad.push({ 'Title': dataArray.Title, 'ID': dataArray.ID, 'ErrorText': 'مقاله ای یافت نشد!' });
    }

    if (contentTemp.length <= 5) {
    } else {
    }

    return { 'articleLazyLoad': contentLazyLoad, 'titleLazyLoad': titleLazyLoad }
  }

}
