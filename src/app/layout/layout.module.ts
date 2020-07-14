import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './header/search/search.component';
import { CatalogsComponent } from './header/catalogs/catalogs.component';
import { SupplierMenuComponent } from './navbar/supplier-menu/supplier-menu.component';
import { ContactMenuComponent } from './navbar/contact-menu/contact-menu.component';
import { DynamicSliderComponent } from './home/dynamic-slider/dynamic-slider.component';
import { CatalogPlaceholderDirective } from './header/catalogs/catalog-placeholder.directive';
import { ContactMenuPlaceholderDirective } from './navbar/contact-menu/contact-menu-placeholder.directive';
import { SupplierMenuPlaceholderDirective } from './navbar/supplier-menu/supplier-menu-placeholder.directive';

@NgModule({
  declarations: [
    LayoutComponent,
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
    SharedModule,
    LayoutRoutingModule
  ],
  entryComponents: [
    CatalogsComponent,
    ContactMenuComponent,
    SupplierMenuComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }