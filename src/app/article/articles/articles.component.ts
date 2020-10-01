import { Component, OnInit, OnDestroy } from '@angular/core';
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
  isLeftSideMenuOpen: boolean = false;
  isRightSideMenuOpen: boolean = false;
  randomDictionaryWord: DictionaryWord;
  randomDictionaryWordSub: Subscription;
  rightSideAtricles: Articles;
  rightSideAtriclesSub: Subscription;
  leftSideArticles: Articles;
  leftSideArticlesSub: Subscription;

  constructor(
    private articleDataStorageService: ArtcileDataStorageService,
    private articlesService: ArticlesService,
    private extensionMethodService: ExtensionMethodService
  ) { }

  ngOnInit(): void {
    this.randomDictionaryWordSub = this.articleDataStorageService.fetchOneDictionaryWordRandom()
      .subscribe(() => this.randomDictionaryWord = this.articlesService.getRandomDictionaryWord()[0]);

    this.rightSideAtriclesSub = this.articleDataStorageService.fetchArticlesForSides({ UniqueName: 'RightArticleCategory' })
      .subscribe(() => this.rightSideAtricles = ArticleUtils.convertStringToJson(this.articlesService.getArticles(), 'Items'));

    this.leftSideArticlesSub = this.articleDataStorageService.fetchArticlesForSides({ UniqueName: 'LeftArticleCategory' })
      .subscribe(() => this.leftSideArticles = ArticleUtils.convertStringToJson(this.articlesService.getArticles(), 'Items'));
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
  }
}
