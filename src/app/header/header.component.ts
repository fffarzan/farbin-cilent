import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() catalogSituation = new EventEmitter<boolean>();

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.fetchCatalogs().subscribe();
  }

  openCatalog() {
    this.catalogSituation.emit(true);
  }

  onOpenSearchMenuAnimations() {
    
  }
}