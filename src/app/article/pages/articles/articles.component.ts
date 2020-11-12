import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { detectMobile } from '../../../core/utils/common-utils';
import { ArtcileDataStorageService } from '../../../core/services/article-data-storage.service';
import { ArticlesService } from '../../../core/services/articles.service';
import { DictionaryWord } from '../../../core/models/dictionary-word.model';
import { ArticleCategory } from '../../../core/models/articles.model';
import { ArticlePreview } from '../../../core/models/article-preview.model';
import { ArticleUtils } from '../../../core/models/article-utils';
import { ArticlesLeftSideService } from '../../../core/services/articles-left-side.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = detectMobile();
  isLeftSideMenuOpen: boolean;
  isRightSideMenuOpen: boolean;
  isOverlayShown: boolean;
  randomDictionaryWord: DictionaryWord;
  randomDictionaryWordSub: Subscription;

  rightSideAtricles: ArticleCategory[];
  rightSideAtriclesSub: Subscription;
  rightSideArticlesLazyLoad: ArticlePreview[];
  rightSideLazyLoadPageNumber: number = 0;
  leftSideArticles: ArticleCategory;
  leftSideArticlesSub: Subscription;

  contentArticlesSub: Subscription;
  contentArticles: ArticleCategory[];
  contentArticleLazyLoad;
  contentTitleLazyLoad: { 'Title': string, 'ID': string, 'ErrorText'?: string }[];
  contentLazyLoadPageNumber: number = 0;
  contentArticlesObsSub: Subscription;
  isLatestArticlesLinkObsSub: Subscription;

  isLatestArticlesClicked: boolean;

  constructor(
    private articleDataStorageService: ArtcileDataStorageService,
    private articlesService: ArticlesService,
    private articlesLeftSideService: ArticlesLeftSideService,
  ) { }

  ngOnInit(): void {
    this.randomDictionaryWordSub = this.articleDataStorageService
      .fetchOneDictionaryWordRandom()
      .subscribe(() => this.randomDictionaryWord = this.articlesService.getRandomDictionaryWord()[0]);

    this.rightSideAtriclesSub = this.articleDataStorageService
      .fetchArticlesForSides({ UniqueName: 'RightArticleCategory' })
      .subscribe(() => {
        this.rightSideAtricles = ArticleUtils.convertStringToJson(this.articlesService.getArticles(), 'Items');
        this.rightSideArticlesLazyLoad = ArticleUtils.contentLazyLoad(this.rightSideAtricles).articlesLazyLoad;
      });

    this.leftSideArticlesSub = this.articleDataStorageService
      .fetchArticlesForSides({ UniqueName: 'LeftArticleCategory' })
      .subscribe(() => this.leftSideArticles = ArticleUtils.convertStringToJson(this.articlesService.getArticles(), 'Items'));

    this.getLatestArticles();

    this.contentArticlesObsSub = this.articlesLeftSideService.articlesObs.subscribe(articles => {
      this.contentTitleLazyLoad = ArticleUtils.contentLazyLoad(articles).articleCategoryTitlesLazyLoad;
      this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(articles).articlesLazyLoad;
    });

    this.setLatestArticlesFromLeftSide();
  }

  onLeftSideMenuToggle(isOpen: boolean) {
    this.isOverlayShown = isOpen;
    this.isLeftSideMenuOpen = isOpen;
  }

  onRightSideMenuToggle(isOpen: boolean) {
    this.isOverlayShown = isOpen;
    this.isRightSideMenuOpen = isOpen;
  }

  onCloseAll() {
    this.isRightSideMenuOpen = false;
    this.isLeftSideMenuOpen = false;
  }

  onScrollRightSide(event: Event) {
    const { allArticles } = ArticleUtils.getAllArticleCategoryTitlesAndItems(this.rightSideAtricles);
    const articles = ArticleUtils.getArticleItemsForLazyLoading(allArticles, this.rightSideLazyLoadPageNumber++);

    this.rightSideArticlesLazyLoad = this.rightSideArticlesLazyLoad.concat(articles);
  }

  onScrollContents(event: Event) {
    const { allArticles } = ArticleUtils.getAllArticleCategoryTitlesAndItems(this.contentArticles);
    const articles = ArticleUtils.getArticleItemsForLazyLoading(allArticles, this.contentLazyLoadPageNumber++);

    this.contentArticleLazyLoad = this.contentArticleLazyLoad.concat(articles);
  }

  onChooseLatestArticles() {
    this.articlesLeftSideService.setLatestArticles();
    this.isLatestArticlesClicked = true;
  }

  onLatestArticledNotClicked() {
    this.isLatestArticlesClicked = false;
  }

  ngOnDestroy() {
    this.randomDictionaryWordSub.unsubscribe();
    this.rightSideAtriclesSub.unsubscribe();
    this.leftSideArticlesSub.unsubscribe();
    this.contentArticlesSub.unsubscribe();
    this.contentArticlesObsSub.unsubscribe();
    this.isLatestArticlesLinkObsSub.unsubscribe();
  }

  setLatestArticlesFromLeftSide() {
    this.isLatestArticlesLinkObsSub = this.articlesLeftSideService.isLatestArticlesLinkObs
      .subscribe(() => this.getLatestArticles());
  }

  private getLatestArticles() {
    this.contentArticlesSub = this.articleDataStorageService
      .fetchArticlesForSides({ UniqueName: 'MiddleArticleCategory' })
      .subscribe(() => {
        const articlesObjectStr = this.articlesService.getArticles();
        this.contentArticles = ArticleUtils.convertStringToJson(articlesObjectStr, 'Items');

        this.contentTitleLazyLoad = ArticleUtils.contentLazyLoad(this.contentArticles).articleCategoryTitlesLazyLoad;
        this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(this.contentArticles).articlesLazyLoad;
      })
  }
}
