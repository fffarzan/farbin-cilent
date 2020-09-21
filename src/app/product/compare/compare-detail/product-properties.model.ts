export class ProductProperties {
  constructor(
    public CompareDetail: ProductsCompareDetail[],
    public TitleProperty: string
  ) { }
}

export class ProductsCompareDetail {
  constructor(
    public IDDefineDetailProduct: string,
    public IDX: number,
    public IndexDescriptionPicUrl: string,
    public IndexDescriptionText: string,
    public PartNumber: string,
    public PicUrl: string,
    public SupplierName_En: string,
    public ValuesProperty: ProductValueProperty[]
  ) { }
}

export class ProductValueProperty {
  constructor(
    public Value: string
  ) { }
}