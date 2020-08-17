import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { ArtcileDataStorageService } from '../shared/article-data-storage.service';
import { Article } from './article.model';
import { ArticleDetailService } from './article-detail.service';
import { environment } from 'src/environments/environment';
import { ArticleUtils } from '../shared/article-utils';
import { CookieUtils } from 'src/app/shared/cookie-utils';

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
