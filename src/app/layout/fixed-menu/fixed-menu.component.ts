import { Component, OnInit } from '@angular/core';
import { FixedMenuService } from './fixed-menu.service';

@Component({
  selector: 'app-fixed-menu',
  templateUrl: './fixed-menu.component.html',
  styleUrls: ['./fixed-menu.component.css']
})
export class FixedMenuComponent implements OnInit {
  fixedMenuData: any;

  constructor(private fixedMenuService: FixedMenuService) { }

  ngOnInit(): void {
    this.fixedMenuService.getFixedMenuEvent()
      .subscribe(data => this.fixedMenuData = data);
  }
}
