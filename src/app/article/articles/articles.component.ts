import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef, AfterViewChecked, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { ArtcileDataStorageService } from '../shared/article-data-storage.service';
import { ArticlesService } from './articles.service';
import { DictionaryWord } from '../dictionary-detail/dictionary-word.model';
import { Articles } from './articles.model';
import { ArticlePreview } from './article-preview.model';
import { ArticleUtils } from '../shared/article-utils';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  randomDictionaryWord: DictionaryWord;
  isLeftSideMenuOpen: boolean = false;
  isRightSideMenuOpen: boolean = false;
  contentArticles;
  rightSideAtricles: Articles;
  leftSideArticles: Articles;
  randomDictionaryWordSub: Subscription;
  contentArticlesSub: Subscription;
  rightSideAtriclesSub: Subscription;
  leftSideArticlesSub: Subscription;
  contentArticleLazyLoad;
  contentTitleLazyLoad: { 'Title': string, 'ID': string, 'ErrorText'?: string }[];
  lazyLoadPageNumber: number = 0;

  constructor(
    private articleDataStorageService: ArtcileDataStorageService,
    private articlesService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute,
    private extensionMethodService: ExtensionMethodService
  ) {
    // router.events.subscribe(() => {
    //   let articleCategoryId = +router.url.split('/')[2]
    //   this.articleDataStorageService.fetchArticlesForSides({ UniqueName: 'MiddleArticleCategory' })
    //     .subscribe(() => {
    //       this.contentArticles = this.articlesService.getArticles();

    //       let contentArticlesLength = Object.keys(this.contentArticles).length;
    //       for (let i = 0; i < contentArticlesLength; i++) {
    //         if (this.contentArticles[i].Items)
    //           this.contentArticles[i].Items = JSON.parse(this.contentArticles[i].Items);
    //       }

    //       // get the current category
    //       this.contentArticles = this.contentArticles.find(obj => obj.IDX === articleCategoryId);
    //       // console.log(this.contentArticles)

    //       this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(this.contentArticles).articlesLazyLoad;
    //       // this.contentTitleLazyLoad = ArticleUtils.contentLazyLoad(this.contentArticles).articleCategoryTitlesLazyLoad;
    //     });
    // })
  }

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

        this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(this.contentArticles).articlesLazyLoad;
        this.contentTitleLazyLoad = ArticleUtils.contentLazyLoad(this.contentArticles).articleCategoryTitlesLazyLoad;
      });
  }

  onScrollDiv(event: Event) {
    let allArticles = ArticleUtils.getAllArticleCategoryTitlesAndItems(this.contentArticles).allArticles;
    let articles = ArticleUtils.getArticleItemsForLazyLoading(allArticles, this.lazyLoadPageNumber++);

    for (let i = 0; i < articles.length; i++) this.contentArticleLazyLoad.push(articles[i]);
  }

  onLeftSideMenuToggle(isOpen: boolean) {
    this.isLeftSideMenuOpen = isOpen;
  }

  onRightSideMenuToggle(isOpen: boolean) {
    this.isRightSideMenuOpen = isOpen;
  }

  ngOnDestroy() {
    this.randomDictionaryWordSub.unsubscribe();
    this.rightSideAtriclesSub.unsubscribe();
    this.leftSideArticlesSub.unsubscribe();
    this.contentArticlesSub.unsubscribe();
  }
}
