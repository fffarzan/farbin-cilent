import { Component, ViewChild, ComponentFactoryResolver, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { CatalogPlaceholderDirective } from './header/catalogs/catalog-placeholder.directive';
import { CatalogsComponent } from './header/catalogs/catalogs.component';
import { init } from './app.animation';
import { ContactMenuPlaceholderDirective } from './navbar/contact-menu/contact-menu-placeholder.directive';
import { SupplierMenuPlaceholderDirective } from './navbar/supplier-menu/supplier-menu-placeholder.directive';
import { ContactMenuComponent } from './navbar/contact-menu/contact-menu.component';
import { SupplierMenuComponent } from './navbar/supplier-menu/supplier-menu.component';
import { NavbarService } from './navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    init
  ]
})
export class AppComponent implements OnDestroy {
  @ViewChild(CatalogPlaceholderDirective, { static: false }) catalogHost: CatalogPlaceholderDirective;
  @ViewChild(ContactMenuPlaceholderDirective, { static: false }) contactMenuHost: ContactMenuPlaceholderDirective;
  @ViewChild(SupplierMenuPlaceholderDirective, { static: false }) supplierMenuHost: SupplierMenuPlaceholderDirective;
  private closeCatalogSub: Subscription;
  closeContactMenuSub: Subscription;
  closeSupplierMenuSub: Subscription;
  isDarkbodyShown: boolean = false;
  darkbodyRemoved: boolean = false;
  height: number = window.innerHeight - 75;

  constructor(
    private componentFatoryResolver: ComponentFactoryResolver,
    private navbarService: NavbarService
  ) {
    this.closeContactMenuSub = navbarService.contactMenuBtnClickedObs.subscribe(isOpen => {
      this.toggleContactMenu(isOpen);
    });
    this.closeSupplierMenuSub = navbarService.supplierMenuBtnClickedObs.subscribe(isOpen => {
      this.toggleSupplierMenu(isOpen);
    });
  }

  onToggleCatalog(isOpen: boolean) {
    if (isOpen) this.showCatalog();
  }

  onCloseDarkbody() {
    this.toggleContactMenu(true);
    this.toggleSupplierMenu(true);
    this.isDarkbodyShown = false;

    // forcely close all
    this.darkbodyRemoved = true;
  }

  ngOnDestroy() {
    if (this.closeCatalogSub) this.closeCatalogSub.unsubscribe();
    if (this.closeContactMenuSub) this.closeContactMenuSub.unsubscribe();
    if (this.closeSupplierMenuSub) this.closeSupplierMenuSub.unsubscribe();
  }

  private showCatalog() {
    const catalogCmpFactory = this.componentFatoryResolver.resolveComponentFactory(CatalogsComponent);
    const hostViewContainerRef = this.catalogHost.viewContainerRef;

    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(catalogCmpFactory);
    this.closeCatalogSub = componentRef.instance.close.subscribe(() => {
      this.closeCatalogSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }

  private toggleContactMenu(isOpen: boolean) {
    const contactMenuCmpFactory = this.componentFatoryResolver.resolveComponentFactory(ContactMenuComponent);
    const hostViewContainerRef = this.contactMenuHost.viewContainerRef;

    if (!isOpen) {
      // add darkbody to the screen
      this.isDarkbodyShown = true;

      // trun darkbodyRemoved to default
      this.darkbodyRemoved = false;

      hostViewContainerRef.clear();
      hostViewContainerRef.createComponent(contactMenuCmpFactory);
    }
    // close the menu if it is open
    else {
      hostViewContainerRef.clear();
      this.isDarkbodyShown = false;
    }
  }

  private toggleSupplierMenu(isOpen: boolean) {
    const supplierMenuCmpFactory = this.componentFatoryResolver.resolveComponentFactory(SupplierMenuComponent);
    const hostViewContainerRef = this.supplierMenuHost.viewContainerRef;

    if (!isOpen) {
      // add darkbody to the screen
      this.isDarkbodyShown = true;

      // trun darkbodyRemoved to default
      this.darkbodyRemoved = false;

      hostViewContainerRef.clear();
      hostViewContainerRef.createComponent(supplierMenuCmpFactory);
    }
    // close the menu if it is open
    else {
      hostViewContainerRef.clear();
      this.isDarkbodyShown = false;
    }
  }
}
