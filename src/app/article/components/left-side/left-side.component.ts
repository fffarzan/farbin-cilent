import { Component, OnInit, Input } from '@angular/core';

import { Articles } from '../../../core/models/articles.model';
import { ArticlesLeftSideService } from '../../../core/services/articles-left-side.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  @Input() articles = Articles;
  @Input() isLeftSideMenuOpen: boolean;
  currentId: number;

  constructor(private articlesLeftSideService: ArticlesLeftSideService) { }

  ngOnInit(): void {
  }

  onSendCategoryItems(articles) {
    this.articlesLeftSideService.articles = articles;
  }
}
