export class Supplier {
  constructor(
    public Active: boolean,
    public ActiveMenuInSite: boolean,
    public Address: string,
    public Description_En: string,
    public Description_Fa: string,
    public IDCity: string,
    public IDParentCompany: string,
    public IDUser: string,
    public IDX: number,
    public MetaTag: string,
    public Name_En: string,
    public Name_Fa: string,
    public NationalCode: string,
    public Password: string,
    public PicUrl: string,
    public PostalCode: string,
    public RegistrationCode: string,
    public RegistrationNumber: number,
    public Status: number,
    public SupplierType: boolean,
    public UserName: string,
    public WebSite: string
  ) {}
}