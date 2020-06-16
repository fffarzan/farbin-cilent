import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ExtensionMethodService } from '../extension-method.service';

@Component({
  selector: 'app-dark-body',
  templateUrl: './dark-body.component.html',
  styleUrls: ['./dark-body.component.css']
})
export class DarkBodyComponent implements OnInit {
  @Output() closeDarkbody = new EventEmitter<void>();
  // @Output() closeCantactMenu = new EventEmitter<void>();
  // @Output() closeProductMenu = new EventEmitter<void>();
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();

  constructor(private extensionMethodService: ExtensionMethodService) { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeDarkbody.emit();
    this.closeCantactMenu.emit();
    this.closeProductMenu.emit();
  }
}
