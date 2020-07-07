import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetSmallImagePipe } from './get-small-image.pipe';
import { MobileTemplateDirective } from './carousel/mobile-template.directive';
import { ProductCarouselComponent } from './carousel/product-carousel/product-carousel.component';

@NgModule({
  declarations: [
    GetSmallImagePipe,
    MobileTemplateDirective,
    ProductCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetSmallImagePipe,
    MobileTemplateDirective,
    ProductCarouselComponent,
    CommonModule
  ]
})
export class SharedModule {
  
}