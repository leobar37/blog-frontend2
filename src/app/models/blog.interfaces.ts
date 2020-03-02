export interface IPost {
    images ? :string[],
    visible?:boolean,
    _id ?: string,
    title :string,
    body ? :string,
    extracto?:string,
    autor :string,
    fechaPublicacion : string,
    keywords? : string[]
    tipoblog ? : number
}

export interface IData{
   ok:boolean,
   docs : IPost[];
}
  
  