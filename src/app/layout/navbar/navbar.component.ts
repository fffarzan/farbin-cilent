import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LayoutDataStorageService } from '../shared/layout-data-storage.service';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() darkbodyRemoved: boolean;
  isContactMenuOpen: boolean = false;
  isSupplierMenuOpen: boolean = false;
  subscription: Subscription;

  constructor(
    private layoutDataStorageService: LayoutDataStorageService,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void { }

  onToggleContactMenu(isOpen: boolean) {
    if (this.darkbodyRemoved) isOpen = true;

    this.navbarService.contactMenuToggle(isOpen);

    this.isContactMenuOpen = !this.isContactMenuOpen;
    this.isSupplierMenuOpen = false;
  }

  onToggleProductMenu(isOpen: boolean) {
    if (this.darkbodyRemoved) isOpen = true;
    
    this.navbarService.supplierMenuToggle(isOpen);

    this.isSupplierMenuOpen = !this.isSupplierMenuOpen;
    this.isContactMenuOpen = false;
    
    this.subscription = this.layoutDataStorageService.fetchSuppliers()
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
