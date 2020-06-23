import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() toggleDarkbody = new EventEmitter<boolean>();
  isDarkbodyAdded: boolean = false;
  isContactMenuOpen: boolean = false;
  isSupplierMenuOpen: boolean = false;

  constructor(
    private dataStorageService: DataStorageService,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void { }

  onToggleContactMenu() {
    this.navbarService.contactMenuToggle();

    if (!this.isSupplierMenuOpen) {
      this.toggleDarkbody.emit(this.isDarkbodyAdded);
      this.isDarkbodyAdded = !this.isDarkbodyAdded;
    }
    this.isContactMenuOpen = !this.isContactMenuOpen;
    this.isSupplierMenuOpen = false;
  }

  onToggleProductMenu() {
    this.navbarService.supplierMenuToggle();

    if (!this.isContactMenuOpen) {
      this.toggleDarkbody.emit(this.isDarkbodyAdded);
      this.isDarkbodyAdded = !this.isDarkbodyAdded;
    }
    this.isSupplierMenuOpen = !this.isSupplierMenuOpen;
    this.isContactMenuOpen = false;
    
    this.dataStorageService.fetchSuppliers().subscribe();
  }
}
