import { Injectable } from '@angular/core';
import { DictionaryWord } from '../models/dictionary-word.model';

@Injectable({
  providedIn: 'root'
})
export class DictionaryDetailService {
  private word: DictionaryWord;

  setDictionaryWordDetail(word: DictionaryWord) {
    this.word = word;
  }

  getDictionaryWordDetail() {
    return this.word;
  }
}