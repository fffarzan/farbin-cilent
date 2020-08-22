import { DesktopOptions } from '../models/desktop-options-carousel.model';
import { MobileOptions } from '../models/mobile-options-carousel.model';

export class GalleryCarousel {
  constructor(
    public media: GalleryMedia,
    public staticUrl: string,
    public dynamicImagePropertyName: string,
    public desktopOptions: DesktopOptions,
    public mobileOptions: MobileOptions
  ) { }
}

export class GalleryMedia {
  constructor(
    public FileSize: number,
    public FileType: string,
    public IDGallery: string,
    public IDGalleryCategory: string,
    public IDRet: string,
    public Name_Fa: string,
    public Status: number,
    public Url: string
  ) { }
}