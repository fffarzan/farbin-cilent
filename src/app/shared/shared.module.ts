import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgPipesModule } from 'ngx-pipes';
import { QRCodeModule } from 'angular2-qrcode';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { MobileTemplateDirective } from './directives/mobile-template.directive';
import { GetSmallImagePipe } from './pipes/get-small-image.pipe';
import { GalleryCarouselComponent } from './gallery-carousel/gallery-carousel.component';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { GetScrollDataDirective } from './directives/get-scroll-data.directive';

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