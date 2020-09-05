import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ProductDataStorageService } from '../shared/product-data-storage.service';
import { MasterProductService } from './master-product.service';
import { SupplierLogoService } from '../shared/supplier-logo/supplier.logo.service';
import { BreadcrumbService } from '../shared/breadcrumb/breadcrumb.service';
import { MasterProduct } from './master-product.model';
import { ProductCarouselParams } from '../../shared/product-carousel/product-carousel-params.model'

@Component({
  selector: 'app-master-product',
  templateUrl: './master-product.component.html',
  styleUrls: ['./master-product.component.css']
})
export class MasterProductComponent implements OnInit, OnDestroy {
  enviornment: { production: boolean, baseUrl: string } = environment;
  masterProduct: MasterProduct;
  carouselData: ProductCarouselParams = {
    staticUrl: '',
    dynamicFieldName: 'PicUrl',
    pageUrlDirection: 'DefineDetailProduct',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 6 } }
    },
    mobileOptions: {
      mobileItems: { maxSize: 500, items: 2.2 },
      tabletItems: { maxSize: 768, items: 0 },
      desktopItems: { maxSize: 1024, items: 5.3 }
    },
    data: null
  };
  defineDetailProductsSub: Subscription;
  masterProductBreadcrumbSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dataStorageService: ProductDataStorageService,
    private masterProductService: MasterProductService,
    private supplierLogoService: SupplierLogoService,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.getMasterProductData({ IDXProduct: +param['id'] }));
  }

  ngOnDestroy() {
    this.defineDetailProductsSub.unsubscribe();
    this.masterProductBreadcrumbSub.unsubscribe();
  }

  private getMasterProductData(param: { IDXProduct: number }) {
    this.defineDetailProductsSub = this.dataStorageService.fetchDefineDetailProducts(param)
      .subscribe(() => {
        this.masterProduct = this.masterProductService.getMasterProduct()[0];
        // const suppllierLogoInput = this.createSupplierLogoModel(this.masterProduct);
        // this.supplierLogoService.setSupplierLogo(suppllierLogoInput);
        this.getMasterProductBreadcrumbData({ IDXParentCategory: this.masterProduct.IDXProductCategory });
      });
  }

  private getMasterProductBreadcrumbData(param: { IDXParentCategory: number }) {
    this.masterProductBreadcrumbSub = this.dataStorageService.fetchMasterProductBreadcrumb(param)
      .subscribe(() => {
        let breadcurmbData = this.masterProductService.getMasterProductBreadcrumb();
        breadcurmbData.Name_En = this.masterProduct.Name_En;
        this.breadcrumbService.setBreadcrumb(breadcurmbData);
        this.breadcrumbService.setMaserProductBreadcrumbName({ Name_En: this.masterProduct.Name_En });
      });
  }

  private createSupplierLogoModel(data): { MenuPicUrl: string, Name_En: string }[] {
    const supplierLogo: { MenuPicUrl: string, Name_En: string }[] = [{ MenuPicUrl: '', Name_En: '' }];

    supplierLogo[0].MenuPicUrl = data.MenuPicUrl;
    supplierLogo[0].Name_En = data.SpplireName_En;

    return supplierLogo;
  }
}
