import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { ArtcileDataStorageService } from '../shared/article-data-storage.service';
import { Article } from './article.model';
import { ArticleDetailService } from './article-detail.service';
import { environment } from 'src/environments/environment';
import { CookieUtils } from 'src/app/shared/utils/cookie-utils';
import { ArticleCarouselParams } from '../shared/article-carousel/article-carousel-params.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleDetailComponent implements OnInit {
  @ViewChild('heartImage') heartImage: ElementRef;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  article: Article;
  articleId: number;
  toggleDescription: object = {};
  articleCarouselParams: ArticleCarouselParams = {
    imageStaticUrl: 'assets/img/docx.png',
    dynamicFieldImage: 'PicUrl',
    pageUrlDirection: 'article',
    dynamicFieldName: 'Name_Fa',
    desktopOptions: {
      items: 6,
      stagePadding: 20,
      responsive: { 1024: { items: 6 } },
      dots: false,
      nav: false,
      autoWidth: true
    },
    mobileOptions: {
      mobileItems: { maxSize: 500, items: 1.7 },
      tabletItems: { maxSize: 768, items: 3 },
      desktopItems: { maxSize: 1024, items: 4.2 }
    },
    data: null
  };

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private dataStorageService: ArtcileDataStorageService,
    private articleDetailService: ArticleDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.getArticleData(param['id']);
      this.articleId = param['id'];
    });
  }

  onLikeArticle(articleId: string) {
    let likeStatus = CookieUtils.getCookie(articleId);

    if (likeStatus === 'Like') {
      likeStatus = 'Unlike';
      this.toggleLikeContentInCookie(articleId, likeStatus);
      this.heartImage.nativeElement.src = 'assets/img/heart outline.png';
    } else {
      likeStatus = 'Like';
      this.toggleLikeContentInCookie(articleId, likeStatus);
      this.heartImage.nativeElement.src = 'assets/img/full color.png';
    } 

    this.article = this.toggleLikeArticleData(articleId, likeStatus, this.article);
  }

  private getArticleData(id: number) {
    this.dataStorageService.fetchArticle({ IDX: id })
      .subscribe(() => {
        this.article = this.articleDetailService.getArticle()[0];

        // filter current article from article previews and setting data
        this.articleCarouselParams.data = this.article.RelatedContent.filter(a => a.IDX !== +this.articleId);
      });
  }

  private toggleLikeArticleData(articleId: string, likeStatus: string, article: Article): Article {
    const param = { IDContent: articleId, LikeStatus: likeStatus };

    this.dataStorageService.likeArticle(param).subscribe(result => {
      if (result === 'Like') article.LikeCount++;
      else if (result === 'UnLike') article.LikeCount--;
    });

    return article;
  }

  private toggleLikeContentInCookie(contentId: string, likeStatus: string) {
    if (likeStatus === 'Like') CookieUtils.setCookie(contentId, 'Like');
    else if (likeStatus === 'Unlike') CookieUtils.deleteCookie(contentId);
  }
}
