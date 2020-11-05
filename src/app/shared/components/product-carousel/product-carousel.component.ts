import { Component, Input } from '@angular/core';

import * as CommonUtils from '../../utils/common-utils';
import { environment } from '../../../../environments/environment';
import { ProductCarouselParams } from './product-carousel-params.model';
import { DataManagementService } from '../../services/data-management.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent {
  @Input() carouselData: ProductCarouselParams;
  @Input() data;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = CommonUtils.detectMobile();
  isTablet: boolean = CommonUtils.detectTablet();
  dynamicId: number = Math.round(Math.random() * 100);
  carouselItemWidth: number = 160;

  constructor(private dataManagementService: DataManagementService) { }

  onAddToMaterialList(id: string) {
    this.dataManagementService.addToMaterialList(id);
  }

  onAddToCompareList(id, imgClassName) {
    this.dataManagementService.addToCompareList(id, imgClassName);
  }
}
