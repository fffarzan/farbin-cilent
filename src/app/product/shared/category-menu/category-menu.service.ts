import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryMenuService {
  private categoryMenu;

  setCategoryMenu(categoryMenu) {
    this.categoryMenu = categoryMenu;
  }

  getCategoryMenu() {
    return this.categoryMenu;
  }
}