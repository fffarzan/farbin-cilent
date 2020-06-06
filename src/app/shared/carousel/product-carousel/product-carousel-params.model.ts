export interface ProductCarouselParams {
  staticUrl: string;
  dynamicFieldName: string;
  pageUrlDirection: string;
  owlCarouselOptions: {
    stagePadding: number,
    items: number,
    responsive: object
  },
  productCarouselOptions: {
    itemsMobile: {
      maxSize: number,
      items: number
    },
    itemsTablet: {
      maxSize: number,
      items: number
    },
    itemsDesktop: {
      maxSize: number,
      items: number
    }
  }
}