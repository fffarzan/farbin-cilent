import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

import { environment } from 'src/environments/environment';
import { CategoryMenuService } from './category-menu.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit, DoCheck {
  data;
  enviornment: { production: boolean, baseUrl: string } = environment;

  constructor(private categoryMenuService: CategoryMenuService) { }

  ngOnInit(): void {
    this.data = this.categoryMenuService.getCategoryMenu();
  }

  ngDoCheck() {
    this.data = this.categoryMenuService.getCategoryMenu();
  }
}
