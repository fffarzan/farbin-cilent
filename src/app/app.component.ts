import { Component, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CatalogPlaceholderDirective } from './shared/catalog-placeholder.directive';
import { CatalogsComponent } from './header/catalogs/catalogs.component';
import { DarkBodyPlaceholderDirective } from './shared/dark-body/dark-body-placeholder.directive';
import { DarkBodyComponent } from './shared/dark-body/dark-body.component';
import { init } from './app.animation';

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
  private closeSub: Subscription;
  private closeDarkbodySub : Subscription;
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

  ngOnDestroy() {
    if (this.closeSub)
      this.closeSub.unsubscribe();

    if (this.closeDarkbodySub)
      this.closeDarkbodySub.unsubscribe();
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
}
