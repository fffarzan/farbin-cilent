export class ListFolderFile {
  constructor(
    public AttachFiles: AttachedFiles[],
    public IDAttachInterfaceCategory: string,
    public Name_En: string,
    public Name_Fa: string,
    public Status: number
  ) { }
}

export class AttachedFiles {
  constructor(
    public Description_Fa: string,
    public FileName: string,
    public FileType: string,
    public IDUser: string,
    public IconUrl: string,
    public Name_Fa: string,
    public Status: number,
    public Url: string,
  ) { }
}