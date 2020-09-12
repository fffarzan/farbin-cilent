import { Component, OnInit } from '@angular/core';
import { ProductDataStorageService } from '../../shared/product-data-storage.service';
import { CompareListService } from './compare-list.service';

@Component({
  selector: 'app-compare-list',
  templateUrl: './compare-list.component.html',
  styleUrls: ['./compare-list.component.css']
})
export class CompareListComponent implements OnInit {

  constructor(
    dataStorageService: ProductDataStorageService,
    compareListSevice: CompareListService
  ) { }

  ngOnInit(): void {
  }
}
