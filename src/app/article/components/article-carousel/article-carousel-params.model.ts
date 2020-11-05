import { DesktopOptions } from '../../../shared/models/desktop-options-carousel.model';
import { MobileOptions } from '../../../shared/models/mobile-options-carousel.model';
import { ArticlePreview } from '../../../core/models/article.model';

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