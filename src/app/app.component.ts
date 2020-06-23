import { Component, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CatalogPlaceholderDirective } from './header/catalogs/catalog-placeholder.directive';
import { CatalogsComponent } from './header/catalogs/catalogs.component';
import { DarkBodyPlaceholderDirective } from './shared/dark-body/dark-body-placeholder.directive';
import { DarkBodyComponent } from './shared/dark-body/dark-body.component';
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
  @ViewChild(DarkBodyPlaceholderDirective, { static: false }) darkbodyHost: DarkBodyPlaceholderDirective;
  @ViewChild(ContactMenuPlaceholderDirective, { static: false }) contactMenuHost: ContactMenuPlaceholderDirective;
  @ViewChild(SupplierMenuPlaceholderDirective, { static: false }) supplierMenuHost: SupplierMenuPlaceholderDirective;
  private closeCatalogSub: Subscription;
  private closeDarkbodySub: Subscription;
  closeContactMenuSub: Subscription;
  closeSupplierMenuSub: Subscription;
  isDarkbodyShown: boolean = false;
  height: number = window.innerHeight - 75;

  constructor(
    private componentFatoryResolver: ComponentFactoryResolver,
    navbarService: NavbarService
  ) {
    this.closeContactMenuSub = navbarService.contactMenuBtnClickedObs.subscribe(isOpen => {
      this.showContactMenu(isOpen);
    });
    this.closeSupplierMenuSub = navbarService.supplierMenuBtnClickedObs.subscribe(isOpen => {
      this.showSupplierMenu(isOpen);
    });
  }

  onToggleCatalog(isOpen: boolean) {
    if (isOpen) this.showCatalog();
  }

  onToggleDarkbody(isOpen: boolean) {
    this.isDarkbodyShown = !this.isDarkbodyShown;
    this.showDarkbody(isOpen);
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

  private showDarkbody(isOpen: boolean) {
    const darkbodyCmpFactory = this.componentFatoryResolver.resolveComponentFactory(DarkBodyComponent);
    const hostViewContainerRef = this.darkbodyHost.viewContainerRef;
    hostViewContainerRef.clear();

    const cmpRef = hostViewContainerRef.createComponent(darkbodyCmpFactory);

    if (isOpen) hostViewContainerRef.clear();

    this.closeDarkbodySub = cmpRef.instance.closeDarkbody.subscribe(() => {
      this.closeDarkbodySub.unsubscribe();
      this.isDarkbodyShown = !this.isDarkbodyShown;
      hostViewContainerRef.clear();
    });
  }

  private showContactMenu(isOpen: boolean) {
    const contactMenuCmpFactory = this.componentFatoryResolver.resolveComponentFactory(ContactMenuComponent);
    const hostViewContainerRef = this.contactMenuHost.viewContainerRef;
    hostViewContainerRef.clear();

    hostViewContainerRef.createComponent(contactMenuCmpFactory);

    if (isOpen) hostViewContainerRef.clear();
  }

  private showSupplierMenu(isOpen: boolean) {
    const supplierMenuCmpFactory = this.componentFatoryResolver.resolveComponentFactory(SupplierMenuComponent);
    const hostViewContainerRef = this.supplierMenuHost.viewContainerRef;
    hostViewContainerRef.clear();

    hostViewContainerRef.createComponent(supplierMenuCmpFactory);

    if (isOpen) hostViewContainerRef.clear();
  }
}
