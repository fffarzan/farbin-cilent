export class ProductCategory {
  constructor(
    public ChildCategories: ProductChildCategory[],
    public CurrentCategor: any[],
    public Supplier: SupplierInProductCategory[],
  ) {}
}

export class SupplierInProductCategory {
  constructor(
    public ActiveMenuInSite: boolean,
    public Description_En: string,
    public Description_Fa: string,
    public IDParentCompany: string,
    public IDUser: string,
    public IDWorkType: string,
    public MenuPicUrl: string,
    public MetaTag: string,
    public Name_En: string,
    public Name_Fa: string,
    public NationalCode: string,
    public RegistrationCode: string,
    public RegistrationNumber: number,
    public Sort: number
  ) {}
}

export class ProductChildCategory {
  constructor(
    public IDProductCategory: string,
    public IDSupplier: string,
    public IDX: number,
    public IDXSupplier: number,
    public MasterProducts: MasterProduct[],
    public MetaDescriptions: string,
    public MetaTags: string,
    public Name_En: string,
    public Name_Fa: string,
    public PicUrl: string,
    public Status: number
  ) {}
}

export class MasterProduct {
  constructor (
    public IDProduct: string,
    public IDProductCategory: string,
    public IDX: number,
    public IndexDescriptionText: string,
    public Name_En: string,
    public Name_Fa: string,
    public ProductUrl: string,
    public Status: string
  ) {}
}