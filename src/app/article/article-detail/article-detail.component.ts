import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtcileDataStorageService } from '../shared/article-data-storage.service';
import { Article } from './article.model';
import { ArticleDetailService } from './article-detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  article: Article;

  constructor(
    private dataStorageService: ArtcileDataStorageService,
    private articleDetailService: ArticleDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.getArticleData(param['id']))
  }

  private getArticleData(id: number) {
    this.dataStorageService.fetchArticle({ IDX: id })
      .subscribe(() => {
        this.article = this.articleDetailService.getArticle()[0];
      });
  }

}
