import { DesktopOptions } from '../../../shared/models/desktop-options-carousel.model';
import { MobileOptions } from '../../../shared/models/mobile-options-carousel.model';

export class ProductCategoryCarouselParams {
  constructor(
    public staticUrl: string,
    public dynamicFieldName: string,
    public dynamicFieldImage: string,
    public pageUrlDirection: string,
    public desktopOptions: DesktopOptions,
    public mobileOptions: MobileOptions
  ) { }
}