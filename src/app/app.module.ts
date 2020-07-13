import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './layout/home/home.component';
import { SearchComponent } from './layout/header/search/search.component';
import { CatalogsComponent } from './layout/header/catalogs/catalogs.component';
import { SupplierMenuComponent } from './layout/navbar/supplier-menu/supplier-menu.component';
import { ContactMenuComponent } from './layout/navbar/contact-menu/contact-menu.component';
import { DynamicSliderComponent } from './layout/home/dynamic-slider/dynamic-slider.component';
import { CatalogPlaceholderDirective } from './layout/header/catalogs/catalog-placeholder.directive';
import { ContactMenuPlaceholderDirective } from './layout/navbar/contact-menu/contact-menu-placeholder.directive';
import { SupplierMenuPlaceholderDirective } from './layout/navbar/supplier-menu/supplier-menu-placeholder.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    CatalogsComponent,
    SupplierMenuComponent,
    ContactMenuComponent,
    DynamicSliderComponent,
    CatalogPlaceholderDirective,
    ContactMenuPlaceholderDirective,
    SupplierMenuPlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CarouselModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CatalogsComponent,
    ContactMenuComponent,
    SupplierMenuComponent
  ]
})
export class AppModule { }
