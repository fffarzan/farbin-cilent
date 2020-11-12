import { Injectable } from '@angular/core';
import { DictionaryWord } from '../models/dictionary-word.model';
import { ArticleCategory } from '../models/articles.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private randomDictionaryWord: DictionaryWord;
  private articles: ArticleCategory;

  setRandomDictionaryWord(word: DictionaryWord) {
    this.randomDictionaryWord = word;
  }

  getRandomDictionaryWord() {
    return this.randomDictionaryWord;
  }

  setArticles(articles: ArticleCategory) {
    this.articles = articles;
  }

  getArticles() {
    return this.articles
  }
}