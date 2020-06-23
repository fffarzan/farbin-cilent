import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ExtensionMethodService } from '../extension-method.service';
import { NavbarService } from 'src/app/navbar/navbar.service';

@Component({
  selector: 'app-dark-body',
  templateUrl: './dark-body.component.html',
  styleUrls: ['./dark-body.component.css']
})
export class DarkBodyComponent implements OnInit {
  @Output() closeDarkbody = new EventEmitter<boolean>();
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeDarkbody.emit(false);
    this.navbarService.closeAll();
  }
}
