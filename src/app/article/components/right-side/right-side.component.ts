import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Articles } from '../../../core/models/articles.model';
import { environment } from 'src/environments/environment';
import { ArticlePreview } from '../../../core/models/article-preview.model';
import { ArticleUtils } from '../../../core/models/article-utils';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {
  @Input() articles: Articles;
  @Input() isRightSideMenuOpen: boolean;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  contentArticleLazyLoad: ArticlePreview[];
  contentTitleLazyLoad: { 'Title': string, 'ID': string, 'ErrorText'?: string }[];
  lazyLoadPageNumber: number = 0;

  constructor(private extensionMethodService: ExtensionMethodService) { }

  ngOnInit(): void {
    this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(this.articles).articlesLazyLoad;
  }

  onScrollDiv(event: Event) {
    let allArticles = ArticleUtils.getAllArticleCategoryTitlesAndItems(this.articles).allArticles;
    let articles = ArticleUtils.getArticleItemsForLazyLoading(allArticles, this.lazyLoadPageNumber++);

    for (let i = 0; i < articles.length; i++) this.contentArticleLazyLoad.push(articles[i]);
  }
}
