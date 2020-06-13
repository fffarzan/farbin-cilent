import { Component, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { CatalogPlaceholderDirective } from './shared/catalog-placeholder.directive';
import { CatalogsComponent } from './header/catalogs/catalogs.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  @ViewChild(CatalogPlaceholderDirective, { static: false }) catalogHost: CatalogPlaceholderDirective;
  private closeSub: Subscription;
  title = 'farbin-client';

  constructor(private componentFatoryResolver: ComponentFactoryResolver) { }

  onToggleCatalog(isOpen: boolean) {
    if(isOpen)
      this.showCatalog();
  }

  ngOnDestroy() {
    if (this.closeSub)
      this.closeSub.unsubscribe();
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
}
