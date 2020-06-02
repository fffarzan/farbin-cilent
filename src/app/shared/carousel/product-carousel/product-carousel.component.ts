import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { ExtensionMethodService } from '../../extension-method.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId = Math.round(Math.random() * 100);

  constructor(
    private extensionMethodService: ExtensionMethodService,
  ) { }

  ngOnInit(): void {
  }
}
