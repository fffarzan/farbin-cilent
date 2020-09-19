import { Component, Input, OnInit } from '@angular/core';

import * as CommonUtils from '../../../../shared/utils/common-utils';
import { environment } from 'src/environments/environment';
import { ProductCarouselParams } from 'src/app/shared/product-carousel/product-carousel-params.model';
import { DataManagementService } from 'src/app/shared/services/data-management.service';
import { CookieUtils } from 'src/app/shared/utils/cookie-utils';

@Component({
  selector: 'app-recently-viewed-product-carousel',
  templateUrl: './recently-viewed-product-carousel.component.html',
  styleUrls: ['./recently-viewed-product-carousel.component.css']
})
export class RecentlyViewedProductCarouselComponent implements OnInit {
  @Input() carouselData: ProductCarouselParams;
  @Input() data;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = CommonUtils.detectMobile();
  isTablet: boolean = CommonUtils.detectTablet();
  dynamicId: number = Math.round(Math.random() * 100);
  carouselItemWidth: number = 160;

  constructor(private dataManagementService: DataManagementService) { }

  ngOnInit(): void {
  }

  onAddToMaterialList(id: string) {
    this.dataManagementService.addToMaterialList(id);
  }

  onAddToCompareList(id, imgClassName) {
    this.dataManagementService.addToCompareList(id, imgClassName);
  }

  onRemoveItemFromCarousel(item, data) {
    let cookieList = CookieUtils.getCookie('RecentlyViewedList').split(",");
    let newCookies: string;

    newCookies = cookieList.filter(id => id !== item.IDDefineDetailProduct).toString();
    CookieUtils.setCookie('RecentlyViewedList', newCookies);

    this.data = data.filter(product => product.IDDefineDetailProduct !== item.IDDefineDetailProduct);
  };
}
