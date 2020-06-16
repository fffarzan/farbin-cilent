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
  toggleContactMenu: boolean = false;
  toggleProductMenu: boolean = false;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void { }

  onToggleContactMenu() {
    this.toggleContactMenu = !this.toggleContactMenu;
    this.toggleDarkbody.emit(true);
  }

  onToggleProductMenu() {
    this.toggleProductMenu = !this.toggleProductMenu;
    this.toggleDarkbody.emit(true);

    this.dataStorageService.fetchSuppliers().subscribe();
  }
}
