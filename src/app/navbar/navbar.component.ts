import { Component, OnInit, Input } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isContactMenuOpen: boolean = false;
  isSupplierMenuOpen: boolean = false;
  @Input() darkbodyRemoved: boolean;

  constructor(
    private dataStorageService: DataStorageService,
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
    
    this.dataStorageService.fetchSuppliers().subscribe();
  }
}
