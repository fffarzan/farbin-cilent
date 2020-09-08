import { Injectable } from '@angular/core';
import { CookieUtils } from '../utils/cookie-utils';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {
  compareList = [];
  recentlyViewedList = [];
  countCounterItems = [];

  addToRecentlyViewedList(id: string) {
    const cookie = CookieUtils.getCookie('RecentlyViewedList');

    if (cookie === undefined || !cookie.includes(id)) {
      if (cookie !== undefined) this.recentlyViewedList = cookie.split(",");

      this.recentlyViewedList.push(id);
      CookieUtils.setCookie('RecentlyViewedList', id);
    }
  }
}