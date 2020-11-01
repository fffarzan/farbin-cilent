import { Component, OnInit, OnDestroy } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ArtcileDataStorageService } from '../../shared/article-data-storage.service';
import { ArticleUtils } from '../../shared/article-utils';
import { ArticlesService } from '../articles.service';
import { ArticlesLeftSideService } from '../left-side/articles-left-side.service';

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
  contentArticlesSub: Subscription;
  tempArticles;

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
        this.tempArticles = ArticleUtils.convertStringToJson(this.articlesService.getArticles(), 'Items');
        console.log(this.tempArticles);
      })



    console.log(this.articlesLeftSideService.articles);










    const id = ArticleUtils.getIdFromUrlString(this.router.routerState.snapshot.url);
    console.log(this.router.routerState.snapshot.url)
    this.route.params.subscribe(param => { console.log(param['id']) })
    // let clonedArticle;

    this.routeSub = this.route.data.subscribe(data => {
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
    });

    // this.routerSub = this.router.events.subscribe((param: Params) => {
    //   this.contentTitleLazyLoad = ArticleUtils.extractDataAddressFromUrl(param, this.articles).contentTitleLazyLoad;
    //   this.contentArticleLazyLoad = ArticleUtils.extractDataAddressFromUrl(param, this.articles).contentArticleLazyLoad;
    // });
  }

  ngOnDestroy() {
    if (this.routerSub) this.routerSub.unsubscribe();
    // if (this.routeSub) this.routeSub.unsubscribe();
  }

  onScrollDiv(event: Event) {
    let allArticles = ArticleUtils.getAllArticleCategoryTitlesAndItems(this.articles).allArticles;
    let articles = ArticleUtils.getArticleItemsForLazyLoading(allArticles, this.lazyLoadPageNumber++);

    for (let i = 0; i < articles.length; i++) this.contentArticleLazyLoad.push(articles[i]);
  }
}
