import { Component, OnInit, OnDestroy } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ArtcileDataStorageService } from '../../../core/services/article-data-storage.service';
import { ArticleUtils } from '../../../core/models/article-utils';
import { ArticlesService } from '../../../core/services/articles.service';
import { ArticlesLeftSideService } from '../../../core/services/articles-left-side.service';

@Component({
  selector: 'app-articles-contents',
  templateUrl: './articles-contents.component.html',
  styleUrls: ['./articles-contents.component.css']
})
export class ArticlesContentsComponent implements OnInit, OnDestroy {
  articles;
  latestArticles;
  tempArticles;
  enviornment: { production: boolean, baseUrl: string } = environment;
  contentArticleLazyLoad;
  contentTitleLazyLoad: { 'Title': string, 'ID': string, 'ErrorText'?: string }[];
  lazyLoadPageNumber: number = 0;
  routerSub: Subscription;
  routeSub: Subscription;
  isComponentInitialized: boolean = false;
  contentArticlesSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleDataStorageService: ArtcileDataStorageService,
    private articlesService: ArticlesService,
    private articlesLeftSideService: ArticlesLeftSideService,
  ) { }

  ngOnInit(): void {
    this.contentArticlesSub = this.articleDataStorageService
      .fetchArticlesForSides({ UniqueName: 'MiddleArticleCategory' })
      .subscribe(() => {
        const articlesObjectStr = this.articlesService.getArticles();
        const articlesObject = ArticleUtils.convertStringToJson(articlesObjectStr, 'Items');
        const articlesArr = articlesObject[0].Items;

        this.contentTitleLazyLoad = ArticleUtils.contentLazyLoad(articlesArr).articleCategoryTitlesLazyLoad;
        this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(articlesArr).articlesLazyLoad;
      })

    // this.articlesLeftSideService.articlesObs.subscribe(articles => {
    //   console.log(articles)
    //   this.contentTitleLazyLoad = ArticleUtils.contentLazyLoad(articles.Items).articleCategoryTitlesLazyLoad;
    //   this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(articles.Items).articlesLazyLoad;
    // });

    // this.setLatestArticlesFromLeftSide();



    // const id = ArticleUtils.getIdFromUrlString(this.router.routerState.snapshot.url);
    // this.route.params.subscribe(param => { console.log(param['id']) })
    // let clonedArticle;

    // this.routeSub = this.route.data.subscribe(data => {
    // clonedArticle = ArticleUtils.convertStringToJson(data.articles, 'Items');
    // this.articles = clonedArticle;

    // if (id) {
    //   clonedArticle = clonedArticle.find(obj => obj.IDX === id);
    //   this.contentTitleLazyLoad = ArticleUtils.contentLazyLoad(clonedArticle).articleCategoryTitlesLazyLoad;
    //   this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(clonedArticle).articlesLazyLoad;
    // } else {
    //   this.contentTitleLazyLoad = ArticleUtils.contentLazyLoad(clonedArticle).articleCategoryTitlesLazyLoad;
    //   this.contentArticleLazyLoad = ArticleUtils.contentLazyLoad(clonedArticle).articlesLazyLoad;
    // }
    // });
  }

  ngOnDestroy() {
    // if (this.routeSub) this.routeSub.unsubscribe();
  }

  onScrollDiv(event: Event) {
    let allArticles = ArticleUtils.getAllArticleCategoryTitlesAndItems(this.articles).allArticles;
    let articles = ArticleUtils.getArticleItemsForLazyLoading(allArticles, this.lazyLoadPageNumber++);

    for (let i = 0; i < articles.length; i++) this.contentArticleLazyLoad.push(articles[i]);
  }

  // setLatestArticlesFromLeftSide() {
  //   this.articlesLeftSideService.isLatestArticlesLinkObs.subscribe((isSet) => {
  //     this.articleDataStorageService
  //       .fetchArticlesForSides({ UniqueName: 'MiddleArticleCategory' })
  //       .subscribe(() => {
  //         this.latestArticles = ArticleUtils.convertStringToJson(this.articlesService.getArticles(), 'Items');
  //       })
  //   });
  // }
}
