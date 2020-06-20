import { Component, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CatalogPlaceholderDirective } from './header/catalogs/catalog-placeholder.directive';
import { CatalogsComponent } from './header/catalogs/catalogs.component';
import { DarkBodyPlaceholderDirective } from './shared/dark-body/dark-body-placeholder.directive';
import { DarkBodyComponent } from './shared/dark-body/dark-body.component';
import { init } from './app.animation';
import { ContactMenuPlaceholderDirective } from './navbar/contact-us/contact-menu-placeholder.directive';
import { ProductBrandsMenuPlaceholderDirective } from './navbar/product-brands/product-brands-menu-placeholder.directive';
import { ContactUsComponent } from './navbar/contact-us/contact-us.component';
import { ProductBrandsComponent } from './navbar/product-brands/product-brands.component';

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
  @ViewChild(ProductBrandsMenuPlaceholderDirective, { static: false }) productBrandsMenuHost: ProductBrandsMenuPlaceholderDirective;
  private closeSub: Subscription;
  private closeDarkbodySub : Subscription;
  private closeContactMenuSub: Subscription;
  private closeProductBrandsMenuSub : Subscription;
  isDarkbodyShown: boolean = false;
  height: number = window.innerHeight - 75;

  constructor(private componentFatoryResolver: ComponentFactoryResolver) { }

  onToggleCatalog(isOpen: boolean) {
    if(isOpen)
      this.showCatalog();
  }

  onToggleDarkbody(isOpen: boolean) {
    this.isDarkbodyShown = !this.isDarkbodyShown;

    if(isOpen)
      this.showDarkbody();
  }

  onToggleContactMenu(isOpen: boolean) {
    // if(!isOpen)
      this.showContactMenu(isOpen);
  }

  onToggleProductBrandsMenu(isOpen: boolean) {
    

    if(isOpen)
      this.showProductBrandsMenu();
  }

  ngOnDestroy() {
    // if (this.closeSub)
    //   this.closeSub.unsubscribe();

    if (this.closeDarkbodySub)
      this.closeDarkbodySub.unsubscribe();

    if(this.closeContactMenuSub)
      this.closeContactMenuSub.unsubscribe();
  }

  private showCatalog() {
    const catalogCmpFactory = this.componentFatoryResolver.resolveComponentFactory(CatalogsComponent);
    const hostViewContainerRef = this.catalogHost.viewContainerRef;

    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(catalogCmpFactory);
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }

  private showDarkbody() {
    const darkbodyCmpFactory = this.componentFatoryResolver.resolveComponentFactory(DarkBodyComponent);
    const hostViewContainerRef = this.darkbodyHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(darkbodyCmpFactory);
    this.closeDarkbodySub = componentRef.instance.closeDarkbody.subscribe(() => {
      this.closeDarkbodySub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }

  private showContactMenu(isOpen: boolean) {
    const contcatMenuCmpFactory = this.componentFatoryResolver.resolveComponentFactory(ContactUsComponent);
    const hostViewContainerRef = this.contactMenuHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(contcatMenuCmpFactory);
    if (isOpen) {
      // this.closeContactMenuSub.unsubscribe();
      hostViewContainerRef.clear();
    }
  }

  private showProductBrandsMenu() {
    const productBrandsMenuCmpFactory = this.componentFatoryResolver.resolveComponentFactory(ProductBrandsComponent);
    const hostViewContainerRef = this.productBrandsMenuHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(productBrandsMenuCmpFactory);
    // this.closeProductBrandsMenuSub = componentRef.instance
  }
}
