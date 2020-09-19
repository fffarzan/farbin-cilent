import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ProductDataStorageService } from '../../shared/product-data-storage.service';
import { CompareDetailService } from './compare-detail.service';
import { ProductProperties } from './product-properties.model';
import { DataManagementService } from 'src/app/shared/services/data-management.service';

@Component({
  selector: 'app-compare-detail',
  templateUrl: './compare-detail.component.html',
  styleUrls: ['./compare-detail.component.css']
})
export class CompareDetailComponent implements OnInit, OnDestroy {
  enviornment: { production: boolean, baseUrl: string } = environment;
  props: ProductProperties[];
  technicalProps: ProductProperties[];
  propsSub: Subscription;
  technicalPropsSub: Subscription;
  routeSub: Subscription;
  isScrollReachedTop: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private dataManagementService: DataManagementService,
    private dataStorageService: ProductDataStorageService,
    private compareDetailService: CompareDetailService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      this.getProductPropertiesData(param['id'])
      this.getTechnicalProductPropertiesData(param['id'])
    });
  }

  onAddToMaterialList(id: string) {
    this.dataManagementService.addToMaterialList(id);
  }

  onScrollDiv(isReachedTop: boolean) {
    console.log(isReachedTop)
    if (isReachedTop) this.isScrollReachedTop = true;
    else this.isScrollReachedTop = false;
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.propsSub.unsubscribe();
    this.technicalPropsSub.unsubscribe();
  }

  private getProductPropertiesData(ids: string) {
    this.propsSub = this.dataStorageService.fetchCompareProductsProperties({ CompareList: ids })
      .subscribe(() => this.props = this.compareDetailService.getProductProperties());
  }

  private getTechnicalProductPropertiesData(ids: string) {
    this.technicalPropsSub = this.dataStorageService.fetchCompareProductsTechnicalProperties({ CompareList: ids })
      .subscribe(() => this.technicalProps = this.compareDetailService.getProductTechnicalProperties());
  }
}
