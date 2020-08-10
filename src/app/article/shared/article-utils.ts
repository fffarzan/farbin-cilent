import { ArticlePreview } from '../articles/article-preview.model';
import { Articles } from '../articles/articles.model';

export class ArticleUtils {
  static contentLazyLoad(dataArray: Articles): { 'articlesLazyLoad': ArticlePreview[], 'articleCategoryTitlesLazyLoad': { 'Title': string, 'ID': string, 'ErrorText'?: string }[] } {
    let dataArrayLength = Object.keys(dataArray).length;
    let articleCategoryTitlesLazyLoad: { 'Title': string, 'ID': string, 'ErrorText'?: string }[] = [];
    let articlesLazyLoad: ArticlePreview[] = [];

    if (dataArrayLength) { // if data has loaded for first time, loading titles and first five articles
      articleCategoryTitlesLazyLoad = ArticleUtils.getAllArticleCategoryTitlesAndItems(dataArray).articleCategoryTitles;

      let allArticles = ArticleUtils.getAllArticleCategoryTitlesAndItems(dataArray).allArticles;
      articlesLazyLoad = ArticleUtils.getArticleItemsForLazyLoading(allArticles, 0);
    }
    // else if (!dataArrayLength && dataArray.Items) { // if data has loaded form one of left side links
    //   this.titleLazyLoad.push({ 'Title': dataArray.Title, 'ID': dataArray.ID });

    //   // loading first 5 items
    //   this.lazyLoadPageNumber = 0;
    //   this.getArticleItemsForLazyLoading();
    // }
    else if (!dataArrayLength)  // if no article was existed in the category
      articleCategoryTitlesLazyLoad.push({ 'Title': dataArray.Title, 'ID': dataArray.ID, 'ErrorText': 'مقاله ای یافت نشد!' });

    return { articlesLazyLoad, articleCategoryTitlesLazyLoad }
  }

  static getAllArticleCategoryTitlesAndItems(dataArray): { 'allArticles': ArticlePreview[], 'articleCategoryTitles': { 'Title': string, 'ID': string, 'ErrorText'?: string }[] } {
    let dataArrayLength = Object.keys(dataArray).length;
    let articleCategoryTitles: { 'Title': string, 'ID': string, 'ErrorText'?: string }[] = [];
    let allArticles: ArticlePreview[] = [];

    for (let i = 0; i < dataArrayLength; i++) {
      articleCategoryTitles.push({ 'Title': dataArray[i].Title, 'ID': dataArray[i].ID });

      let items = dataArray[i].Items;
      if (items) {
        for (let j = 0; j < items.length; j++) {
          allArticles.push(items[j]);
        }
      }
    }

    return { articleCategoryTitles, allArticles }
  }

  static getArticleItemsForLazyLoading(articles, pageNumber: number): ArticlePreview[] {
    let lazyLoadArticles: ArticlePreview[] = [];
    let allPagesNumber = articles.length / 5;

    if (pageNumber) {
      if (pageNumber < allPagesNumber) {
        if (articles.length) {
          for (let i = (5 * pageNumber); i < ((5 * pageNumber) + 5); i++) {
            if (articles[i]) lazyLoadArticles.push(articles[i]);
          }
        }
        // else if (Object.keys(this.contentArticles).length) {  // If data has loaded from left side link
        //   for (let i = (5 * this.pageNumber); i < ((5 * this.pageNumber) + 5); i++) {
        //     if (articles[i]) {
        //       this.contentLazyLoading.push(articles[i]);
        //       itemIndex++;
        //     }
        //   }

        //   this.middleGlobalIndex += itemIndex;
        // }

        pageNumber++;
      }
      else { }
    }

    if (!pageNumber) {
      for (let i = 0; i < 5; i++) lazyLoadArticles.push(articles[i]);
    }

    return lazyLoadArticles
  }
}