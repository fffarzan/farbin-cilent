import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Articles } from '../articles.model';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  @Input() articles = Articles;
  @Input() isLeftSideMenuOpen: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onLoadLink(article): void {
    this.router.navigate(['./', article.IDX], { relativeTo: this.route });
  }
}
