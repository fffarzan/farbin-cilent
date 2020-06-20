import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { showTabMenu } from './navbar.animation';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    showTabMenu
  ]
})
export class NavbarComponent implements OnInit {
  @Output() toggleDarkbody = new EventEmitter<boolean>();
  @Output() toggleContactMenu = new EventEmitter<boolean>();
  @Output() toggleProductBrandsMenu = new EventEmitter<boolean>();
  isContactMenuOpen: boolean = false;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void { }

  onToggleContactMenu(isOpen: boolean) {
    this.toggleContactMenu.emit(isOpen);
    this.isContactMenuOpen = !isOpen;
    this.toggleDarkbody.emit(true);
  }

  onToggleProductMenu() {
    this.toggleProductBrandsMenu.emit(true);
    this.toggleDarkbody.emit(true);

    this.dataStorageService.fetchSuppliers().subscribe();
  }
}
