import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgPipesModule } from 'ngx-pipes';
import { QRCodeModule } from 'angular2-qrcode'
import { ProductCarouselComponent } from './carousel/product-carousel/product-carousel.component';
import { MobileTemplateDirective } from './carousel/mobile-template.directive';
import { GetSmallImagePipe } from './get-small-image.pipe';
import { GalleryCarouselComponent } from './carousel/gallery-carousel/gallery-carousel.component';
import { StopPropagationDirective } from './stop-propagation.directive';
import { GetScrollDataDirective } from './get-scroll-data.directive';

@NgModule({
  declarations: [
    GetSmallImagePipe,
    MobileTemplateDirective,
    ProductCarouselComponent,
    GalleryCarouselComponent,
    StopPropagationDirective,
    GetScrollDataDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,
    FontAwesomeModule,
    NgPipesModule,
    QRCodeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    FontAwesomeModule,
    NgPipesModule,
    QRCodeModule,
    GetSmallImagePipe,
    MobileTemplateDirective,
    ProductCarouselComponent,
    GalleryCarouselComponent,
    StopPropagationDirective,
    GetScrollDataDirective
  ]
})
export class SharedModule { }