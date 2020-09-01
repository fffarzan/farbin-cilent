import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixedMenuService {
  private fixedMenuDataSub: Subject<any> = new Subject<any>();

  setFixedMenuData(data: any) {
    this.fixedMenuDataSub.next(data);
  }

  getFixedMenuEvent() {
    return this.fixedMenuDataSub.asObservable();
  }
}