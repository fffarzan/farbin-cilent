import { Component, Input, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ArticlePreview } from 'src/app/core/models/article.model';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent {
  @Input() article: ArticlePreview;
  enviornment: { production: boolean, baseUrl: string } = environment;
}
