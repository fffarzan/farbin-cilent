export class DictionaryWord {
  constructor(
    public Abstract: string,
    public Active: boolean,
    public IDDictionary: string,
    public IDX: number,
    public KeyWord: string,
    public MetaDescription: string,
    public MetaTag: string,
    public PicUrl: string,
    public SourceText: string,
    public Status: number,
    public Title: string,
    public Value: string
  ) { }
}