import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { DictionaryWord } from '../../dictionary-detail/dictionary-word.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() rightSideMenuOpen = new EventEmitter<boolean>();
  @Output() leftSideMenuOpen = new EventEmitter<boolean>();
  @Input() dictionary: DictionaryWord;
  isRightSideMenuOpen: boolean = false;
  isLeftSideMenuOpen: boolean = false;
  isDictionaryMenuOpen: boolean = false;
  isDictionaryMoreDetailsOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleRightSide() {
    this.isRightSideMenuOpen = !this.isRightSideMenuOpen;

    if (this.isRightSideMenuOpen) {
      this.rightSideMenuOpen.emit(true);

      this.isLeftSideMenuOpen = false;
      this.leftSideMenuOpen.emit(false);
      this.isDictionaryMenuOpen = false;
    } else 
      this.rightSideMenuOpen.emit(false);
  }

  onToggleLeftSide() {
    this.isLeftSideMenuOpen = !this.isLeftSideMenuOpen;

    if (this.isLeftSideMenuOpen) {
      this.leftSideMenuOpen.emit(true);

      this.isRightSideMenuOpen = false;
      this.rightSideMenuOpen.emit(false);
      this.isDictionaryMenuOpen = false;
    }
    else 
      this.leftSideMenuOpen.emit(false);
  }

  onOpenDictionaryMenu() {
    this.isDictionaryMenuOpen = !this.isDictionaryMenuOpen;

    this.isRightSideMenuOpen = false;
    this.rightSideMenuOpen.emit(false);
    this.isLeftSideMenuOpen = false
    this.leftSideMenuOpen.emit(false);

    if (!this.isDictionaryMenuOpen) this.isDictionaryMoreDetailsOpen = false;
  }

  onOpenDictionaryMoreDetails() {
    this.isDictionaryMoreDetailsOpen = !this.isDictionaryMoreDetailsOpen;
  }
}
