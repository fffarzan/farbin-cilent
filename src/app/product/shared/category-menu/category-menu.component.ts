import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CategoryMenuService } from './category-menu.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit, OnDestroy {
  data;
  dataSub: Subscription;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isScrollReachedTop: boolean = true;

  constructor(private categoryMenuService: CategoryMenuService) { }

  ngOnInit(): void {
    this.dataSub = this.categoryMenuService.categoryMenuChange
      .subscribe(menu => this.data = menu);
  }

  onScrollTriggered() {
    this.isScrollReachedTop = false;
  }

  onScrollReachedTop() {
    this.isScrollReachedTop = true;
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }
}
