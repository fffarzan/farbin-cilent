export class SearchProductComapare {
  constructor(
    public RuleDefine: RuleDefine[]
  ) { }
}

class RuleDefine {
  constructor(
    public IDDefineDetailProduct: string,
    public IDX: number,
    public IndexDescriptionPicUrl: string,
    public IndexDescriptionText: string,
    public PartNumber: string,
    public PicUrl: string,
    public TechnicalDescription: string,
  ) { }
}