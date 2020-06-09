export class Catalog {
  constructor(
    public FilePDFType: string,
    public FilePicType: string,
    public IDAttachPDF: string,
    public IDAttachPic: string,
    public IDCatalog: string,
    public IDRet: string,
    public Name_EnL: string,
    public PDFFileName: string,
    public PDFName_Fa: string,
    public PDFUrl: string,
    public PicFileName: string,
    public PicName_Fa: string,
    public PicUrl: string,
    public SizeOfPDF: string,
    public Sort: number,
    public Status: number,
    public SupplierName_En: string
  ) { }
}