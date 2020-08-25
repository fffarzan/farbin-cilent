export class ProductCategoryBreadcrumb {
  constructor(
    public IDProductCategory: string,
    public IDSupplier: string,
    public IDX: number,
    public IDXSupplier: number,
    public Name_En: string,
    public ParentID: string,
    public SameLevelCategories: SameLevelCategories[],
    public ShowInSite: boolean,
    public depth: number
  ) { }
}

export class SameLevelCategories {
  constructor(
    public IDX: number,
    public Name_En: string,
    public Name_Fa: string,
    public PicUrl: string
  ) { }
}