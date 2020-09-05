import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryMenuService {
  private categoryMenu;
  categoryMenuChange = new Subject<any>();

  setCategoryMenu(categoryMenu) {
    this.categoryMenu = categoryMenu;
    this.categoryMenuChange.next(this.categoryMenu);
  }

  getCategoryMenu() {
    return this.categoryMenu;
  }
}