import { Component, Input } from '@angular/core';
import { ArticleCategory } from 'src/app/core/models/articles.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  @Input() heading: { 'Title': string, 'ID': string, 'ErrorText'?: string };
  @Input() articles: ArticleCategory;
}
