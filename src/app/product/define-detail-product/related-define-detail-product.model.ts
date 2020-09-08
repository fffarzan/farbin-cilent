export class RelatedDefineDetailProduct {
  constructor(
    public IDDefineDetailProduct: string,
    public IDRelatedDefineDetailProduct: string,
    public IDX: number,
    public IndexDescriptionPicUrl: string,
    public IndexDescriptionText: string,
    public PartNumber: string,
    public PicUrl: string,
    public ShortTechnicalDescription: string,
    public TechnicalDescription: string,
    public sort: number
  ) { }
}