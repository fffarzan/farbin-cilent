import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compare-title',
  templateUrl: './compare-title.component.html',
  styleUrls: ['./compare-title.component.css']
})
export class CompareTitleComponent implements OnInit {
  @Input() title: { titleEn: string, titleFa: string };

  constructor() { }

  ngOnInit(): void {
  }
}
