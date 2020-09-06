import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductDataStorageService } from '../shared/product-data-storage.service';
import { DefineDetailProductService } from './define-detail-product.service';
import { RelatedDefineDetailProduct } from './related-define-detail-product.model';
import { AccessoryProduct } from './accessory-product.model';
import { DefineDetailProduct } from './define-detail-product.model';
import { TechnicalProperties } from './technical-properties.model';
import { RuleProperties } from './rule-properties.model';
import { ListFolderFile } from './list-folder-file.model';
import { QuestionAndAnswer } from './question-and-answer.model';

@Component({
  selector: 'app-define-detail-product',
  templateUrl: './define-detail-product.component.html',
  styleUrls: ['./define-detail-product.component.css']
})
export class DefineDetailProductComponent implements OnInit, OnDestroy {
  relatedDefineDetailProducts: RelatedDefineDetailProduct[];
  accessoryProducts: AccessoryProduct[];
  technicalProperties: TechnicalProperties[];
  defineDetailProduct: DefineDetailProduct[]
  ruleProperties: RuleProperties[];
  listFoldersFiles: ListFolderFile[];
  questionsAndAnswers: QuestionAndAnswer[];
  private relatedDefineDetailProductsSub: Subscription;
  private accessoryProductsSub: Subscription;
  private technicalPropertiesSub: Subscription;
  private defineDetailProdutSub: Subscription;
  private rulePropertiesSub: Subscription;
  private listFolderFilesSub: Subscription;
  private questionsAndAnswersSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dataStorageService: ProductDataStorageService,
    private defineDetailProductService: DefineDetailProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.getRelatedDefineDetailProductsData(+param['id']);
      this.getAccessoryProductsData(+param['id']);
      this.getTechnicalPropertiesData(+param['id']);
      this.getDefineDetailProductData(+param['id']);
      this.getRulePropertiesData(+param['id']);
      this.getListFoldersFilesData(+param['id']);
      this.getQuestionsAndAnswersData(+param['id']);
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
      .subscribe(() => this.relatedDefineDetailProducts = this.defineDetailProductService.getRelatedDefineDetailProducts());
  }

  private getAccessoryProductsData(id: number) {
    this.accessoryProductsSub = this.dataStorageService.fetchAccessoryProductsOfDefineDetailProduct({ IDXDefineDetailProduct: id })
      .subscribe(() => this.accessoryProducts = this.defineDetailProductService.getAccessoryProducts());
  }

  private getTechnicalPropertiesData(id: number) {
    this.technicalPropertiesSub = this.dataStorageService.fetchDefineDetialProductTechnicalProperties({ IDX: id })
      .subscribe(() => this.technicalProperties = this.defineDetailProductService.getTechnicalProperties());
  }

  private getDefineDetailProductData(id: number) {
    this.defineDetailProdutSub = this.dataStorageService.fetchDefineDetialProduct({ IDX: id })
      .subscribe(() => this.defineDetailProduct = this.defineDetailProductService.getDefineDetailProdut());
  }

  private getRulePropertiesData(id: number) {
    this.rulePropertiesSub = this.dataStorageService.fetchDefineDetailProductRuleProperties({ IDXDefineDetailProduct: id })
      .subscribe(() => this.ruleProperties = this.defineDetailProductService.getRuleProperties());
  }

  private getListFoldersFilesData(id: number) {
    this.listFolderFilesSub = this.dataStorageService.fetchDefineDetailProductListFoldersFiles({ IDXDefineDetailProduct: id })
      .subscribe(() => this.listFoldersFiles = this.defineDetailProductService.getListFoldersFiles());
  }

  private getQuestionsAndAnswersData(id: number) {
    this.questionsAndAnswersSub = this.dataStorageService.fetchDefineDetailQuestionAndAnswer({ IDX: id })
      .subscribe(() => this.questionsAndAnswers = this.defineDetailProductService.getQuestionsAndAnswers());
  }

  private getOtherImagesData({ IDXDefineDetailProduct: number }) {

  }
}
