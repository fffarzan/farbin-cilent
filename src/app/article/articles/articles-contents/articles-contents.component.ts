import { Component, OnInit, OnDestroy } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ArticleUtils } from '../../shared/article-utils';

@Component({
  selector: 'app-articles-contents',
  templateUrl: './articles-contents.component.html',
  styleUrls: ['./articles-contents.component.css']
})
export class ArticlesContentsComponent implements OnInit, OnDestroy {
  articles;
  enviornment: { production: boolean, baseUrl: string } = environment;
  contentArticleLazyLoad;
  contentTitleLazyLoad: { 'Title': string, 'ID': string, 'ErrorText'?: string }[];
  lazyLoadPageNumber: number = 0;
  routerSub: Subscription;
  routeSub: Subscription;
  isComponentInitialized: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = ArticleUtils.getIdFromUrlString(this.router.routerState.snapshot.url);
    let clonedArticle;

    this.routeSub = this.route.data.subscribe(data => {
      clonedArticle = ArticleUtils.convertStringToJson(data.articles, 'Items');
      this.articles = clonedArticle;

      if (id) {
        clonedArticle = clonedArticle.find(obj => obj.IDX === id);
        this.contentTitleLazyLoad = ArticleUtils.contentLazyLoad(clonedArticle).articleCategoryTitlesLazyLoad;
        this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(clonedArticle).articlesLazyLoad;
      } else {
        this.contentTitleLazyLoad = ArticleUtils.contentLazyLoad(clonedArticle).articleCategoryTitlesLazyLoad;
        this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(clonedArticle).articlesLazyLoad;
      }
    });

    this.routerSub = this.router.events.subscribe((param: Params) => {
      this.contentTitleLazyLoad = ArticleUtils.extractDataAddressFromUrl(param, this.articles).contentTitleLazyLoad;
      this.contentArticleLazyLoad = ArticleUtils.extractDataAddressFromUrl(param, this.articles).contentArticleLazyLoad;
    });
  }

  ngOnDestroy() {
    if (this.routerSub) this.routerSub.unsubscribe();
    if (this.routeSub) this.routeSub.unsubscribe();
  }

  onScrollDiv(event: Event) {
    let allArticles = ArticleUtils.getAllArticleCategoryTitlesAndItems(this.articles).allArticles;
    let articles = ArticleUtils.getArticleItemsForLazyLoading(allArticles, this.lazyLoadPageNumber++);

    for (let i = 0; i < articles.length; i++) this.contentArticleLazyLoad.push(articles[i]);
  }
}
