import { Component, Output, EventEmitter, Input } from '@angular/core';

import { DictionaryWord } from '../../../core/models/dictionary-word.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() sidesCondition = new EventEmitter<string>();
  @Input() dictionary: DictionaryWord;
  isRightSideOpen: boolean;
  isLeftSideOpen: boolean;
  isDictionaryMenuOpen: boolean;
  isDialyPhraseOpen: boolean;
  isOverlayShown: boolean;

  onToggleRightSide() {
    this.isRightSideOpen = !this.isRightSideOpen;
    this.isLeftSideOpen = false;
    this.sidesCondition.emit('left');
    this.sidesCondition.emit('right');
    if (this.isLeftSideOpen) this.isOverlayShown = true;
  }

  onToggleLeftSide() {
    this.isOverlayShown = !this.isOverlayShown;
    // this.isLeftSideOpen = !this.isLeftSideOpen;
    // this.isOverlayShown = !this.isOverlayShown;

    // if (this.isLeftSideOpen) {
    //   this.leftSideMenuOpen.emit(true);
    //   this.isRightSideOpen = false;
    //   this.rightSideMenuOpen.emit(false);
    //   this.isDictionaryMenuOpen = false;
    // }
    // else this.leftSideMenuOpen.emit(false);
  }

  onOpenDictionaryMenu() {
    // this.isDictionaryMenuOpen = !this.isDictionaryMenuOpen;
    // this.isRightSideOpen = false;
    // this.rightSideMenuOpen.emit(false);
    // this.isLeftSideOpen = false
    // this.leftSideMenuOpen.emit(false);
    // if (!this.isDictionaryMenuOpen) this.isDialyPhraseOpen = false;
  }

  onOpenDictionaryMoreDetails() {
    this.isDialyPhraseOpen = !this.isDialyPhraseOpen;
  }

  onCloseAll() { }
}
