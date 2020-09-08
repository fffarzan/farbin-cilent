import { Injectable } from '@angular/core';
import { RelatedDefineDetailProduct } from './related-define-detail-product.model';
import { AccessoryProduct } from './accessory-product.model';
import { TechnicalProperties } from './technical-properties.model';
import { DefineDetailProduct } from './define-detail-product.model';
import { RuleProperties } from './rule-properties.model';
import { ListFolderFile } from './list-folder-file.model';
import { OtherImage } from './other-image.model';
import { QuestionAndAnswer } from './question-and-answer.model';

@Injectable({
  providedIn: 'root'
})
export class DefineDetailProductService {
  private relatedDefineDetailProducts: RelatedDefineDetailProduct[];
  private accessoryProducts: AccessoryProduct[];
  private technicalProperties: TechnicalProperties[];
  private defineDetailProduct: DefineDetailProduct[];
  private ruleProperties: RuleProperties[];
  private listFoldersFiles: ListFolderFile[];
  private otherImages: OtherImage[];
  private questionsAndAnswers: QuestionAndAnswer[];

  setRelatedDefineDetailProducts(products: RelatedDefineDetailProduct[]) {
    this.relatedDefineDetailProducts = products;
  }

  getRelatedDefineDetailProducts() {
    return this.relatedDefineDetailProducts;
  }

  setAccessoryProducts(products: AccessoryProduct[]) {
    this.accessoryProducts = products;
  }

  getAccessoryProducts() {
    return this.accessoryProducts
  }

  setTechnicalProperties(props: TechnicalProperties[]) {
    this.technicalProperties = props;
  }

  getTechnicalProperties() {
    return this.technicalProperties;
  }

  setDefineDetailProduct(product: DefineDetailProduct[]) {
    this.defineDetailProduct = product;
  }

  getDefineDetailProdut() {
    return this.defineDetailProduct;
  }

  setRuleProperties(props: RuleProperties[]) {
    this.ruleProperties = props;
  }

  getRuleProperties() {
    return this.ruleProperties;
  }

  setListFoldersFiles(files: ListFolderFile[]) {
    this.listFoldersFiles = files;
  }

  getListFoldersFiles() {
    return this.listFoldersFiles;
  }

  setOtherImages(images: OtherImage[]) {
    this.otherImages = images;
  }

  getOtherImages() {
    return this.otherImages;
  }

  setQuestionsAndAnswers(qAnda: QuestionAndAnswer[]) {
    this.questionsAndAnswers = qAnda;
  }

  getQuestionsAndAnswers() {
    return this.questionsAndAnswers;
  }
}