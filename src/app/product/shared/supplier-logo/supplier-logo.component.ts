import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SupplierLogoService } from './supplier.logo.service';

@Component({
  selector: 'app-supplier-logo',
  templateUrl: './supplier-logo.component.html',
  styleUrls: ['./supplier-logo.component.css']
})
export class SupplierLogoComponent implements OnInit, OnDestroy {
  data;
  dataSub: Subscription;
  enviornment: { production: boolean, baseUrl: string } = environment;

  constructor(private supplierLogoService: SupplierLogoService) { }

  ngOnInit(): void {
    this.dataSub = this.supplierLogoService.logoChange
      .subscribe(logo => {
        this.data = logo;
      });
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe()
  }
}
