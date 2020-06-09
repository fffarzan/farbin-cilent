import { Component, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { CatalogPlaceholderDirective } from './shared/catalog-placeholder.directive';
import { CatalogsComponent } from './header/catalogs/catalogs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  @ViewChild(CatalogPlaceholderDirective, { static: false }) catalogHost: CatalogPlaceholderDirective;
  title = 'farbin-client';

  constructor(private componentFatoryResolver: ComponentFactoryResolver) { }

  ngOnDestroy() {
  }

  onToggleCatalog(isOpen: boolean) {
    if(isOpen)
      this.showCatalog();
  }

  private showCatalog() {
    const catalogCmpFactory = this.componentFatoryResolver.resolveComponentFactory(CatalogsComponent);
    const hostViewContainerRef = this.catalogHost.viewContainerRef;

    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(catalogCmpFactory);
  }
}
