import { DesktopOptions } from '../../../shared/carousel/desktop-options-carousel.model';
import { MobileOptions } from '../../../shared/carousel/mobile-options-carousel.model';
import { ArticlePreview } from '../../article-detail/article.model';

export class ArticleCarouselParams {
  constructor(
    public imageStaticUrl: string,
    public dynamicFieldImage: string,
    public pageUrlDirection: string,
    public dynamicFieldName: string,
    public desktopOptions: DesktopOptions,
    public mobileOptions: MobileOptions,
    public data: ArticlePreview[]
  ) { }
}