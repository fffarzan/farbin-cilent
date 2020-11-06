import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ArticlePreview } from 'src/app/core/models/article.model';

@Component({
  selector: 'app-article-right-side-item',
  templateUrl: './article-right-side-item.component.html',
  styleUrls: ['./article-right-side-item.component.css']
})
export class ArticleRightSideItemComponent implements OnInit {
  @Input() article: ArticlePreview;
  enviornment: { production: boolean, baseUrl: string } = environment;

  constructor() { }

  ngOnInit(): void {
  }

}
