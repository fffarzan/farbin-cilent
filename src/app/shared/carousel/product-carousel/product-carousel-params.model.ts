import { DesktopOptions } from '../desktop-options-carousel.model';
import { MobileOptions } from '../mobile-options-carousel.model';

export class ProductCarouselParams {
  constructor(
    public staticUrl: string,
    public dynamicFieldName: string,
    public pageUrlDirection: string,
    public desktopOptions: DesktopOptions,
    public mobileOptions: MobileOptions
  ) { }
}