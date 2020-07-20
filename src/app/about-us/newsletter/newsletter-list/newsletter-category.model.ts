import { NewsletterContent } from './newsletter-content.model';

export class NewsletterCategory {
  constructor(
    public IDContentCategoryType: string,
    public Name_Fa: string,
    public Sort: number,
    public Status: number,
    public BeforeEditedName_Fa?: string,
    public ContentCaegory?: NewsletterCategory,
    public IDContentCategory?: string,
    public IDParent?: string,
    public IDX?: number,
    public IconUrl?: string,
    public Name_En?: string,
    public TypeName?: string,
    public Content?: NewsletterContent
  ) { }
}