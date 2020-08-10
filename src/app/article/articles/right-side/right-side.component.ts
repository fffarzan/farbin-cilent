import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Articles } from '../articles.model';
import { environment } from 'src/environments/environment';
import { ArticlePreview } from '../article-preview.model';
import { ArticleUtils } from '../../shared/article-utils';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {
  @Input() articles: Articles;
  enviornment: { production: boolean, baseUrl: string } = environment;
  contentArticleLazyLoad: ArticlePreview[];
  contentTitleLazyLoad: { 'Title': string, 'ID': string, 'ErrorText'?: string }[];
  lazyLoadPageNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(this.articles).articlesLazyLoad;
  }

  onScrollDiv(event: Event) {
    let allArticles = ArticleUtils.getAllArticleCategoryTitlesAndItems(this.articles).allArticles;
    let articles = ArticleUtils.getArticleItemsForLazyLoading(allArticles, this.lazyLoadPageNumber++);

    for (let i = 0; i < articles.length; i++) this.contentArticleLazyLoad.push(articles[i]);
  }
}
