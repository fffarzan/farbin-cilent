export class MasterProduct {
  constructor(
    public Accessory: boolean,
    public CreateDate: string,
    public Description_En: string,
    public Description_Fa: string,
    public IDPersonel: string,
    public IDProduct: string,
    public IDProductCategory: string,
    public IDProductFamily: string,
    public IDSupplier: string,
    public IDX: number,
    public IDXProductCategory: number,
    public IDXSUpplier: number,
    public IndexDescriptionPicurl: string,
    public IndexDescriptionText: string,
    public MenuPicUrl: string,
    public MetaDescriptions: string,
    public MetaTags: string,
    public Name_En: string,
    public Name_Fa: string,
    public ProductUrl: string,
    public Property: MasterProductProperty[],
    public Sort: number,
    public SpplireName_En: string,
    public SpplireName_Fa: string,
    public Status: number
  ) { }
}

export class MasterProductProperty {
  constructor(
    public DefineDetails: MasterProductDefineDetails[],
    public IDProperty: string,
    public Name_En: string,
    public PicUrl: string,
    public Sort: number
  ) { }
}

export class MasterProductDefineDetails {
  constructor(
    public IDDefineDetailProduct: string,
    public IDX: number,
    public IndexDescriptionPicUrl: string,
    public IndexDescriptionText: string,
    public PartNumber: string,
    public PicUrl: string,
    public ShortTechnicalDescription: string,
    public Sort: number
  ) { }
}