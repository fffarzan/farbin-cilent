import { Component, OnInit, OnDestroy } from '@angular/core';
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

@Component({
  selector: 'app-define-detail-product',
  templateUrl: './define-detail-product.component.html',
  styleUrls: [
    './define-detail-product.component.css',
    '../../shared/styles/qr-code.css'
  ]
})
export class DefineDetailProductComponent implements OnInit, OnDestroy {
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
  productId: number;
  relatedDefineDetailProductsLength: number;
  accessoryProductsLength: number;
  rulePropertiesLength: number;
  listFoldersFilesLength: number;
  private relatedDefineDetailProductsSub: Subscription;
  private accessoryProductsSub: Subscription;
  private technicalPropertiesSub: Subscription;
  private defineDetailProdutSub: Subscription;
  private rulePropertiesSub: Subscription;
  private listFolderFilesSub: Subscription;
  private questionsAndAnswersSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private extensionMethodService: ExtensionMethodService,
    private dataStorageService: ProductDataStorageService,
    private defineDetailProductService: DefineDetailProductService
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

  ngOnDestroy() {
    this.relatedDefineDetailProductsSub.unsubscribe();
    this.accessoryProductsSub.unsubscribe();
    this.technicalPropertiesSub.unsubscribe();
    this.defineDetailProdutSub.unsubscribe();
    this.rulePropertiesSub.unsubscribe();
    this.listFolderFilesSub.unsubscribe();
    this.questionsAndAnswersSub.unsubscribe();
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
      .subscribe(() => this.defineDetailProduct = this.defineDetailProductService.getDefineDetailProdut()[0]);
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

  // private getOtherImagesData({ IDXDefineDetailProduct: number }) {

  // }
}
