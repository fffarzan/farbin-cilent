import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ExtensionMethodService } from '../../shared/extension-method.service';
import { CatalogsService } from './catalogs.service';
import { Catalog } from './catalog.model';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId = Math.round(Math.random() * 100);
  catalogs: Catalog[] = [];

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private catalogService: CatalogsService
  ) { }

  ngOnInit(): void {
    this.catalogs = this.catalogService.getCatalogs();

    console.log(this.catalogs)
  }

}
