export interface IPost {
    images ? : [ 
        {
            imagenes?: string[],
             _id: string 
        },
    ]
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
export interface IEntrada {
    images ? :string[],
    visible?:boolean,
    _id ?: string,
    titulo :string,
    body ? :string,
    extracto?:string,
    autor :string,
    fecha?: string,
    keywords? : string[]
    tipo ? : number,
    categoria ?: string
}

export interface IData{
   ok:boolean,
   docs : IPost[];
}
  
export interface IrptaEntrada{
     ok : boolean,
     entrada ?:IPost,
}