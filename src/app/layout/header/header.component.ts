import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataManagementService } from 'src/app/shared/services/data-management.service';

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
  compareListNumber: number;
  subscription: Subscription;

  constructor(
    private layoutDataStorageService: LayoutDataStorageService,
    private dataManagementService: DataManagementService
  ) { }

  ngOnInit(): void {
    this.subscription = this.layoutDataStorageService.fetchCatalogs()
      .subscribe();
    this.compareListNumber = this.dataManagementService.compareListCount;
    this.compareProductsNumber();
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

  private compareProductsNumber() {
    this.dataManagementService.compareProductList
      .subscribe(num => this.compareListNumber = num);
  }
}