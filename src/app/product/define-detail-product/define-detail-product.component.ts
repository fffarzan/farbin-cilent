import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ProductDataStorageService } from '../shared/product-data-storage.service';
import { DefineDetailProductService } from './define-detail-product.service';
import { RelatedDefineDetailProduct } from './related-define-detail-product.model';
import { AccessoryProduct } from './accessory-product.model';
import { DefineDetailProduct } from './define-detail-product.model';
import { TechnicalProperties } from './technical-properties.model';
import { RuleProperties } from './rule-properties.model';
import { ListFolderFile } from './list-folder-file.model';
import { QuestionAndAnswer } from './question-and-answer.model';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { OtherImage } from './other-image.model';
import { DataManagementService } from 'src/app/shared/services/data-management.service';
import { removeDotFromObjectFileType } from '../../shared/utils/common-utils';
import { GalleryModalService } from 'src/app/layout/gallery-modal/gallery-modal.service';
import { GalleryMedia } from 'src/app/shared/gallery-carousel/gallery-carousel.model';
import { element } from 'protractor';

@Component({
  selector: 'app-define-detail-product',
  templateUrl: './define-detail-product.component.html',
  styleUrls: [
    './define-detail-product.component.css',
    '../../shared/styles/qr-code.css'
  ]
})
export class DefineDetailProductComponent implements OnInit, OnDestroy {
  @ViewChild('tabsHead', { static: false }) tabsHead: ElementRef;
  @ViewChild('tabsBody', { static: false }) tabsBody: ElementRef;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  relatedDefineDetailProducts: RelatedDefineDetailProduct[];
  accessoryProducts: AccessoryProduct[];
  technicalProperties: TechnicalProperties[];
  defineDetailProduct: DefineDetailProduct;
  ruleProperties: RuleProperties[];
  listFoldersFiles: ListFolderFile[];
  questionsAndAnswers: QuestionAndAnswer[];
  otherImages: OtherImage[];
  productId: number;
  isEnglish: boolean = true;
  relatedDefineDetailProductsLength: number;
  accessoryProductsLength: number;
  rulePropertiesLength: number;
  listFoldersFilesLength: number;
  masterImage: OtherImage[] = [{
    IDAttachCrmInterface: '',
    IDRet: '',
    IDUser: '',
    IDAttachCrm: '',
    IDAttachSite: '',
    Order: 0,
    Createdate: '',
    FileName: '',
    Title: '',
    Description: '',
    FileType: '',
    Url: '',
    CategoryName_En: '',
    CategoryName_Fa: '',
    FullName: ''
  }];
  imageGalleryData = {
    media: null,
    staticUrl: 'assets/img/docx.png',
    dynamicImagePropertyName: 'Url',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 4 } }
    },
    mobileOptions: {
      mobileItems: { maxSize: 500, items: 9 },
      tabletItems: { maxSize: 768, items: 8 },
      desktopItems: { maxSize: 1024, items: 8 }
    }
  };
  private relatedDefineDetailProductsSub: Subscription;
  private accessoryProductsSub: Subscription;
  private technicalPropertiesSub: Subscription;
  private defineDetailProdutSub: Subscription;
  private rulePropertiesSub: Subscription;
  private listFolderFilesSub: Subscription;
  private questionsAndAnswersSub: Subscription;
  private otherImagesSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private extensionMethodService: ExtensionMethodService,
    private dataStorageService: ProductDataStorageService,
    private defineDetailProductService: DefineDetailProductService,
    private dataManagementService: DataManagementService,
    private galleryModalService: GalleryModalService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.productId = +param['id'];
      this.getRelatedDefineDetailProductsData(this.productId);
      this.getAccessoryProductsData(this.productId);
      this.getTechnicalPropertiesData(this.productId);
      this.getDefineDetailProductData(this.productId);
      this.getRulePropertiesData(this.productId);
      this.getListFoldersFilesData(this.productId);
      this.getQuestionsAndAnswersData(this.productId);
    })
  }

  onOpenGalleryModal(product: DefineDetailProduct, otherImages: OtherImage[]) {
    const productGallery = {
      FileSize: 0,
      FileType: '',
      IDGallery: '',
      IDGalleryCategory: '',
      IDRet: '',
      Name_Fa: '',
      Status: 0,
      Url: product.PicUrl
    };

    this.galleryModalService.setGalleryModalData(productGallery, otherImages);

    // trigger model when data arrived
    this.galleryModalService.galleryModalOpen();
  }

  onToggleDescLanguage() {
    this.isEnglish = !this.isEnglish;
  }

  onToggleTab(e: Event, el: Element) {
    for (let element of this.tabsHead.nativeElement.children) {
      this.renderer.removeClass(element, 'active');
      this.renderer.removeClass(element, 'TabDetails-TabBox-Item-active');
    }

    for (let element of this.tabsBody.nativeElement.children)
      this.renderer.removeClass(element, 'active');

    this.renderer.addClass(el, 'active');
    this.renderer.addClass(e.currentTarget, 'active');
    this.renderer.addClass(e.currentTarget, 'TabDetails-TabBox-Item-active');
  }

  onAddToMaterialList(id: string) {
    this.dataManagementService.addToMaterialList(id);
  }

  onAddToCompareList(id, imgClassName) {
    this.dataManagementService.addToCompareList(id, imgClassName);
  }

  ngOnDestroy() {
    this.relatedDefineDetailProductsSub.unsubscribe();
    this.accessoryProductsSub.unsubscribe();
    this.technicalPropertiesSub.unsubscribe();
    this.defineDetailProdutSub.unsubscribe();
    this.rulePropertiesSub.unsubscribe();
    this.listFolderFilesSub.unsubscribe();
    this.questionsAndAnswersSub.unsubscribe();
    this.otherImagesSub.unsubscribe();
  }

  private getRelatedDefineDetailProductsData(id: number) {
    this.relatedDefineDetailProductsSub = this.dataStorageService.fetchRelatedDefineDetailProducts({ IDXDefineDetailProduct: id })
      .subscribe(() => {
        this.relatedDefineDetailProducts = this.defineDetailProductService.getRelatedDefineDetailProducts();
        this.relatedDefineDetailProductsLength = Object.keys(this.relatedDefineDetailProducts).length;
      });
  }

  private getAccessoryProductsData(id: number) {
    this.accessoryProductsSub = this.dataStorageService.fetchAccessoryProductsOfDefineDetailProduct({ IDXDefineDetailProduct: id })
      .subscribe(() => {
        this.accessoryProducts = this.defineDetailProductService.getAccessoryProducts();
        this.accessoryProductsLength = Object.keys(this.accessoryProducts).length;
      });
  }

  private getTechnicalPropertiesData(id: number) {
    this.technicalPropertiesSub = this.dataStorageService.fetchDefineDetialProductTechnicalProperties({ IDX: id })
      .subscribe(() => this.technicalProperties = this.defineDetailProductService.getTechnicalProperties());
  }

  private getDefineDetailProductData(id: number) {
    this.defineDetailProdutSub = this.dataStorageService.fetchDefineDetialProduct({ IDX: id })
      .subscribe(() => {
        this.defineDetailProduct = this.defineDetailProductService.getDefineDetailProdut()[0];
        this.masterImage[0].Url = this.defineDetailProduct.PicUrl;

        if (this.masterImage[0].Url) {
          let result = this.defineDetailProduct.PicUrl.split('.');
          this.masterImage[0] = this.initializeMasterImageObject(this.masterImage[0], result[1]);
        }

        this.getOtherImagesData(this.productId);
        this.dataManagementService.addToRecentlyViewedList(this.defineDetailProduct.IDDefineDetailProduct);
      });
  }

  private getRulePropertiesData(id: number) {
    this.rulePropertiesSub = this.dataStorageService.fetchDefineDetailProductRuleProperties({ IDXDefineDetailProduct: id })
      .subscribe(() => {
        this.ruleProperties = this.defineDetailProductService.getRuleProperties();
        this.rulePropertiesLength = Object.keys(this.ruleProperties).length;
      });
  }

  private getListFoldersFilesData(id: number) {
    this.listFolderFilesSub = this.dataStorageService.fetchDefineDetailProductListFoldersFiles({ IDXDefineDetailProduct: id })
      .subscribe(() => {
        this.listFoldersFiles = this.defineDetailProductService.getListFoldersFiles();
        this.listFoldersFilesLength = Object.keys(this.listFoldersFiles).length;
      });
  }

  private getQuestionsAndAnswersData(id: number) {
    this.questionsAndAnswersSub = this.dataStorageService.fetchDefineDetailQuestionAndAnswer({ IDX: id })
      .subscribe(() => this.questionsAndAnswers = this.defineDetailProductService.getQuestionsAndAnswers());
  }

  private getOtherImagesData(id: number) {
    this.otherImagesSub = this.dataStorageService.fetchDefineDetailProductOtherImages({ IDXDefineDetailProduct: id })
      .subscribe(() => {
        this.otherImages = this.masterImage;
        this.otherImages = this.otherImages.concat(this.defineDetailProductService.getOtherImages());
        this.otherImages = removeDotFromObjectFileType(this.otherImages, 'FileType');
        this.imageGalleryData.media = this.convertImagesToGalleryImages(this.otherImages);
      });
  }

  private initializeMasterImageObject(obj: OtherImage, url: string) {
    obj.FileType = url;
    obj.IDAttachCrmInterface = this.extensionMethodService.NewGuid();
    obj.IDRet = this.extensionMethodService.NewGuid();
    obj.IDUser = this.extensionMethodService.NewGuid();
    obj.IDAttachCrm = this.extensionMethodService.NewGuid();
    obj.IDAttachSite = this.extensionMethodService.NewGuid();
    obj.Order = 0;
    obj.Createdate = new Date().toString();

    return obj;
  }

  private convertImagesToGalleryImages(images) {
    let galleryImage: GalleryMedia[] = [];

    for (let img of images) {
      let obj = {
        FileSize: 0,
        FileType: img.FileType,
        IDGallery: '',
        IDGalleryCategory: '',
        IDRet: '',
        Name_Fa: '',
        Status: 0,
        Url: img.Url
      };

      galleryImage.push(obj);
    }

    return galleryImage;
  }
}
