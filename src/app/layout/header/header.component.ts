import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DataManagementService } from 'src/app/shared/services/data-management.service';

import { LayoutDataStorageService } from '../shared/layout-data-storage.service';
import { ExtensionMethodService } from './../../shared/extension-method.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() catalogSituation = new EventEmitter<boolean>();
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  isSearchMenuOpen: boolean;
  isSearchListShow: boolean;
  isSearchContentShow: boolean;
  isDataFetched: boolean;
  compareListNumber: number;
  subscription: Subscription;
  searchText = '';

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private layoutDataStorageService: LayoutDataStorageService,
    private dataManagementService: DataManagementService
  ) { }

  ngOnInit(): void {
    this.compareListNumber = this.dataManagementService.compareListCount;
    this.compareProductsNumber();
  }

  openCatalog() {
    this.catalogSituation.emit(true);
  }

  onOpenSearchMenu() {
    this.isSearchMenuOpen = true;
    this.isSearchListShow = true;
  }

  onCloseSearchMenu() {
    this.isSearchMenuOpen = false;
    this.isSearchContentShow = false;
    this.searchText = '';
    this.isSearchListShow = false;
  }

  onClearSearchContent() {
    this.searchText = '';
    this.isSearchContentShow = false;
    this.isSearchListShow = true;
  }

  onBackToSearchList() {
    this.isSearchMenuOpen = true;
    this.isSearchContentShow = false;
    this.isSearchListShow = true;
  }

  onShowBackward2() {
    this.isSearchMenuOpen = true;
    this.isSearchContentShow = true;
    this.isSearchListShow = false;
    this.isSearchListShow = false;
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  private compareProductsNumber() {
    this.dataManagementService.compareProductList.subscribe(
      (num) => (this.compareListNumber = num)
    );
  }
}
