import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { environment } from 'src/environments/environment';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { ArtcileDataStorageService } from '../../../core/services/article-data-storage.service';
import { DictionaryWord } from '../../../core/models/dictionary-word.model';
import { DictionaryDetailService } from '../../../core/services/dictionary-detial.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  word: DictionaryWord;
  wordId: number;

  constructor(
    private dataStorageService: ArtcileDataStorageService,
    private dictionaryDetailService: DictionaryDetailService,
    private route: ActivatedRoute,
    private extensionMethodService: ExtensionMethodService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.getDictionaryWordDetailData(+param['id']);
      this.wordId = +param['id'];
    });
  }

  onGoBack() {
    this.location.back();
  }

  private getDictionaryWordDetailData(id: number) {
    this.dataStorageService.fetchDictionaryWordDetail({ IDX: id })
      .subscribe(() => this.word = this.dictionaryDetailService.getDictionaryWordDetail());
  }
}
