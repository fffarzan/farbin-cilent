import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import * as commonUtils from '../utils/common-utils';
import { CookiesService } from './cookies.service';
import { CookieUtils } from '../utils/cookie-utils';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {
  compareList: string[];
  recentlyViewedList = [];
  countCompareItems: number;
  currentDefineDetailProduct: string;
  compareListCount: number;
  compareProductList = new Subject<number>();

  constructor(private cookiesService: CookiesService) {
    this.compareList = CookieUtils.getCookie('CompareList').split(',');
    if (this.compareList[0] === "") this.compareList.shift();
    this.compareListCount = this.compareList.length;
  }

  addToCompareList(id: string, imgClassName: string) {
    const cookie = CookieUtils.getCookie('CompareList');

    if (commonUtils.detectMobile()) this.countCompareItems = 2;
    else this.countCompareItems = 5;

    if (cookie === undefined || !cookie.includes(id)) {
      if (cookie !== undefined && cookie !== "") this.compareList = cookie.split(",");

      if (this.compareList.length <= this.countCompareItems) {
        this.compareList.push(id);

        CookieUtils.setCookie('CompareList', this.compareList.join());
        this.compareProductList.next(this.compareList.length)

        // $('.ComareCount').animate({ 'background-color': '#ff0000' }).animate({ 'background-color': '#ffb500' });

        if (imgClassName !== undefined) {
          const canvas = document.createElement('canvas');
          let context = canvas.getContext('2d');
          let baseImage = new Image();
          baseImage.setAttribute('src', imgClassName);
          // $('#CompareImageDefineMovable').css({
          //   'top': $('.' + ImageClass).offset().top + 'px',
          //   'left': $('.' + ImageClass).offset().left + 'px',
          //   'background-image': 'url("' + baseImage.src + '")',
          //   'display': 'inline-block',
          //   'background-size': 'contain',
          //   'width': '80px',
          //   'height': '60px'
          // });
          // $('#CompareImageDefineMovable').rotate({
          //   angle: 0,
          //   animateTo: 360
          // });

          let offsetTopComapre: number;
          if (commonUtils.detectMobile()) offsetTopComapre = 0;
          else offsetTopComapre = 50;

          // $('#CompareImageDefineMovable').animate({
          //   'top': $('.imgCompareTopButton').offset().top - window.pageYOffset + 'px', 'left': $('.imgCompareTopButton').offset().left - offsetTopComapre + 'px', 'width': '0', 'height': '0'
          // }, 1000);
        }
      } else {
        // AutoClosingErrorAlert('You can not add more than ' + CountCompareItems + ' item to compare list', 5000);
      }
    }
  }

  addToRecentlyViewedList(id: string) {
    const cookie = CookieUtils.getCookie('RecentlyViewedList');

    if (cookie === undefined || !cookie.includes(id)) {
      if (cookie !== undefined) this.recentlyViewedList = cookie.split(",");

      this.recentlyViewedList.push(id);
      CookieUtils.setCookie('RecentlyViewedList', this.recentlyViewedList.join());
    }
  }

  addToMaterialList(id: string) {
    this.currentDefineDetailProduct = id;
    const cookie = CookieUtils.getCookie('Token')

    if (cookie === undefined) {
      // $('#ModalChekToken').modal('show');
    } else {
      // $('#ModalMaterialListCategory').modal('show');
    }
  }

  RemoveFromCompareList(id: string) {
    const cookie: string = CookieUtils.getCookie('CompareList');
    let cookieArray: string[];

    cookieArray = cookie.split(',').filter(itemId => itemId !== id);
    if (cookieArray[0] === "") cookieArray.shift();

    if (cookieArray.length === 0) CookieUtils.setCookie('CompareList', '');
    else CookieUtils.setCookie('CompareList', cookieArray.join());

    this.compareList = this.compareList.filter(itemId => itemId !== id);
    this.compareProductList.next(this.compareList.length);

    return this.compareList;
  }
}