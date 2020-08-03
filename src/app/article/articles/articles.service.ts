import { Injectable } from '@angular/core';
import { DictionaryWord } from '../dictionary-detail/dictionary-word.model';
import { Articles } from './articles.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private randomDictionaryWord: DictionaryWord;
  private articles: Articles;

  setRandomDictionaryWord(word: DictionaryWord) {
    this.randomDictionaryWord = word;
  }

  getRandomDictionaryWord() {
    return this.randomDictionaryWord;
  }

  setArticles(articles: Articles) {
    this.articles = articles;
  }

  getArticles() {
    return this.articles
  }
}