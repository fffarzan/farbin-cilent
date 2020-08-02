import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LayoutDataStorageService } from '../shared/layout-data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() catalogSituation = new EventEmitter<boolean>();
  closeSearch: boolean = false;
  hideIconsWhenSearchOpen: boolean = false;
  subscription: Subscription;

  constructor(private layoutDataStorageService: LayoutDataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.layoutDataStorageService.fetchCatalogs()
      .subscribe();
  }

  openCatalog() {
    this.catalogSituation.emit(true);
  }

  onHideOtherIcons() {
    this.hideIconsWhenSearchOpen = true;
    this.closeSearch = false;
  }

  onCloseSearchMenu() {
    this.hideIconsWhenSearchOpen = false;
    this.closeSearch = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}