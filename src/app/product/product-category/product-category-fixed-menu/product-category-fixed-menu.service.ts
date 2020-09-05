import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryFixedMenuService {
  productCategoryFixedMenuDataChange = new Subject<any>()

  setProductCategoryFixedMenu(menuData) {
    this.productCategoryFixedMenuDataChange.next(menuData);
  }
}