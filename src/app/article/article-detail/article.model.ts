import { DictionaryWord } from '../dictionary-detail/dictionary-word.model';

export class Article {
  constructor(
    public Abstract_Fa: string,
    public ContentCategoryName_Fa: string,
    public CreateDate: string,
    public Description_Fa: string,
    public Dictionary: DictionaryWord,
    public DisLikeCount: number,
    public FullName: string,
    public IDContent: string,
    public IDPersonel: string,
    public LikeCount: number,
    public MetaDescriptions: string,
    public MetaTags: string,
    public Name_Fa: string,
    public PicUrl: string,
    public Status: number,
    public RelatedContent ,
  ) { }
}