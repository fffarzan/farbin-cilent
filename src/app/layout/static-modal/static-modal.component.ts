import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { StaticModalService } from './static-modal.service';

@Component({
  selector: 'app-static-modal',
  templateUrl: './static-modal.component.html',
  styleUrls: ['./static-modal.component.css']
})
export class StaticModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @ViewChild('parent', { static: false }) parentDiv: ElementRef;
  displayContent: number;

  constructor(private staticModalService: StaticModalService) { }

  ngOnInit(): void {
    this.displayContent = this.staticModalService.getStaticModalData();
  }

  onCloseModalFromParnet(event: Event) {
    if (event.currentTarget === this.parentDiv.nativeElement) this.close.emit();
  }
}
