export class SearchDefineDetail {
  constructor(
    public RuleDefine: RuleDefine[]
  ) { }
}

export class SearchContent {
  constructor(
    public Abstract_Fa: string,
    public DisLikeCount: number,
    public IDContent: string,
    public IDX: number,
    public LikeCount: number,
    public MetaDescriptions: string,
    public MetaTags: string,
    public Name_Fa: string,
    public PicUrl: string,
  ) { }
}

export class SearchIncident {
  constructor(
    public EndDate: string,
    public IDIncident: string,
    public IDX: number,
    public Name_Fa: string,
    public PicUrl: string,
    public StartDate: string
  ) { }
}

export class SearchTrainingCourseBatch {
  constructor(
    public Description: string,
    public IDTrainingCourseBatch: string,
    public IDX: number,
    public Name_Fa: string,
    public TrainingCourse: {
      EndDate: string,
      IDTrainingCourse: string,
      IDX: number,
      Name_Fa: string,
      PicUrl: string
    }
  ) { }
}

export class SearchTrainingCourseUser {
  constructor(
    public Certification: {
      CertificationUrl: string,
      IDTrainingCourse: string,
      IDX: number,
      Name_Fa: string,
      PicUrl: string,
      TrainingCourseCategoryName_Fa: string
    },
    public FullName_En: string,
    public FullName_Fa: string,
    public IDPersonelInCompany: string,
    public IDX: number,
    public PicUrl: string
  ) { }
}

export class SearchTrainingCourse {
  constructor(
    public IDTrainingCourse: string,
    public IDX: number,
    public Name_Fa: string,
    public PicUrl: string
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
    public TechnicalDescription: string
  ) { }
}