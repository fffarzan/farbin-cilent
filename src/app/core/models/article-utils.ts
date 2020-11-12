import { ArticlePreview } from './article-preview.model';

export class ArticleUtils {
  static contentLazyLoad(dataArray): {
    'articlesLazyLoad': ArticlePreview[],
    'articleCategoryTitlesLazyLoad': { 'Title': string, 'ID': string, 'ErrorText'?: string }[]
  } {
    let dataArrayLength: number;
    let articleCategoryTitlesLazyLoad: { 'Title': string, 'ID': string, 'ErrorText'?: string }[] = [];
    let articlesLazyLoad: ArticlePreview[] = [];
    const daLength: number = dataArray.length;

    if (!dataArray.Items && !daLength) dataArrayLength = 0;
    else dataArrayLength = Object.keys(dataArray).length;

    if (dataArrayLength) { // if data has loaded for first time, loading titles and first five articles
      articleCategoryTitlesLazyLoad = ArticleUtils.getAllArticleCategoryTitlesAndItems(dataArray).articleCategoryTitles;

      const allArticles = ArticleUtils.getAllArticleCategoryTitlesAndItems(dataArray).allArticles;
      articlesLazyLoad = ArticleUtils.getArticleItemsForLazyLoading(allArticles, 0);
    } else if (!dataArrayLength) // if no article was existed in the category
      articleCategoryTitlesLazyLoad.push({ 'Title': dataArray.Title, 'ID': dataArray.ID, 'ErrorText': 'مقاله ای یافت نشد!' });

    return { articlesLazyLoad, articleCategoryTitlesLazyLoad }
  }

  static getAllArticleCategoryTitlesAndItems(dataObj): {
    'allArticles': ArticlePreview[],
    'articleCategoryTitles': { 'Title': string, 'ID': string, 'ErrorText'?: string }[]
  } {
    const dataObjLength = Object.keys(dataObj).length;
    let articleCategoryTitles: { 'Title': string, 'ID': string, 'ErrorText'?: string }[] = [];
    let allArticles: ArticlePreview[] = [];

    if (dataObj.Items) {
      articleCategoryTitles.push({ 'Title': dataObj.Title, 'ID': dataObj.ID });

      const items = dataObj.Items;
      if (items)
        for (let i = 0; i < items.length; i++) allArticles.push(items[i]);
    } else {
      for (let i = 0; i < dataObjLength; i++) {
        articleCategoryTitles.push({ 'Title': dataObj[i].Title, 'ID': dataObj[i].ID });

        const items = dataObj[i].Items;
        if (items)
          for (let j = 0; j < items.length; j++) allArticles.push(items[j]);
      }
    }

    return { articleCategoryTitles, allArticles }
  }

  static getArticleItemsForLazyLoading(articles, pageNumber: number): ArticlePreview[] {
    const allPagesNumber = articles.length / 5;
    let lazyLoadArticles: ArticlePreview[] = [];

    if (pageNumber) {
      if (pageNumber < allPagesNumber) {
        if (articles.length) {
          for (let i = (5 * pageNumber); i < ((5 * pageNumber) + 5); i++) {
            if (articles[i]) lazyLoadArticles.push(articles[i]);
          }
        }

        pageNumber++;
      }
      else { }
    }

    if (!pageNumber) {
      for (let i = 0; i < 5; i++) lazyLoadArticles.push(articles[i]);
    }

    console.log(lazyLoadArticles)
    return lazyLoadArticles
  }

  static convertStringToJson(dataArray: any, key: string): any {
    const dataArrayLength = Object.keys(dataArray).length;

    for (let i = 0; i < dataArrayLength; i++) {
      if (dataArray[i][key]) dataArray[i][key] = JSON.parse(dataArray[i][key]);
    }

    return dataArray;
  }

  static getIdFromUrlString(url: string): number {
    let urlArray: string[] = [];

    urlArray = url.split('/');
    let isNumber = urlArray[urlArray.length - 1].match(/\d+/g);

    if (isNumber) return +urlArray[urlArray.length - 1]
  }

  static extractDataAddressFromUrl(param, dataArray: any) {
    let clonedArray = dataArray.concat();

    if (param.url) {
      const id = this.getIdFromUrlString(param.url);

      // get the current category
      if (id) clonedArray = clonedArray.find(obj => obj.IDX === id);
    }

    return {
      contentTitleLazyLoad: ArticleUtils.contentLazyLoad(clonedArray).articleCategoryTitlesLazyLoad,
      contentArticleLazyLoad: ArticleUtils.contentLazyLoad(clonedArray).articlesLazyLoad
    }
  }
}