export interface Incident {
  CategoryIDX: number,
  CategoryName_Fa: string,
  Description_Fa: string,
  EndDate: string,
  Greetings?: {
    FileSize: number,
    FileType: string,
    IDGallery: string,
    IDGalleryCategory: string,
    IDRet: string,
    Name_Fa: string,
    Status: number,
    Url: string
  },
  IDIncident: string,
  IDIncidentCategory: string,
  IDX: number,
  Images?: {
    FileSize: number,
    FileType: string,
    IDGallery: string,
    IDGalleryCategory: string,
    IDRet: string,
    Name_Fa: string,
    Status: number,
    Url: string
  },
  Name_Fa: string,
  PicUrl?: string,
  StartDate: string,
  Videos?: {
    FileSize: number,
    FileType: string,
    IDGallery: string,
    IDGalleryCategory: string,
    IDRet: string,
    Name_Fa: string,
    Status: number,
    Url: string
  }
}