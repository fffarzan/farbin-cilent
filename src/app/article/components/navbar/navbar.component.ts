import { Component, Output, EventEmitter, Input } from '@angular/core';

import { DictionaryWord } from '../../../core/models/dictionary-word.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() rightSideMenuOpen = new EventEmitter<boolean>();
  @Output() leftSideMenuOpen = new EventEmitter<boolean>();
  @Input() dictionary: DictionaryWord;
  isRightSideOpen: boolean;
  isLeftSideOpen: boolean;
  isDictionaryMenuOpen: boolean;
  isDialyPhraseOpen: boolean;

  onToggleRightSide() {
    this.isRightSideOpen = !this.isRightSideOpen;

    if (this.isRightSideOpen) {
      this.rightSideMenuOpen.emit(true);

      this.isLeftSideOpen = false;
      this.leftSideMenuOpen.emit(false);
      this.isDictionaryMenuOpen = false;
    } else this.rightSideMenuOpen.emit(false);
  }

  onToggleLeftSide() {
    this.isLeftSideOpen = !this.isLeftSideOpen;

    if (this.isLeftSideOpen) {
      this.leftSideMenuOpen.emit(true);
      this.isRightSideOpen = false;
      this.rightSideMenuOpen.emit(false);
      this.isDictionaryMenuOpen = false;
    }
    else this.leftSideMenuOpen.emit(false);
  }

  onOpenDictionaryMenu() {
    this.isDictionaryMenuOpen = !this.isDictionaryMenuOpen;

    this.isRightSideOpen = false;
    this.rightSideMenuOpen.emit(false);
    this.isLeftSideOpen = false
    this.leftSideMenuOpen.emit(false);

    if (!this.isDictionaryMenuOpen) this.isDialyPhraseOpen = false;
  }

  onOpenDictionaryMoreDetails() {
    this.isDialyPhraseOpen = !this.isDialyPhraseOpen;
  }
}
