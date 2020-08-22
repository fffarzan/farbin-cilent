import { DesktopOptions } from '../models/desktop-options-carousel.model';
import { MobileOptions } from '../models/mobile-options-carousel.model';

export class ProductCarouselParams {
  constructor(
    public staticUrl: string,
    public dynamicFieldName: string,
    public pageUrlDirection: string,
    public desktopOptions: DesktopOptions,
    public mobileOptions: MobileOptions,
    public data,
  ) { }
}