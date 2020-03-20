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
    autor? : Iusuario,
    fechaPublicacion?: string,
    keywords? : string[]
    tipoblog ? : number
    categoria ? :string
    borrador ?: boolean
}
export interface IEntrada {
    images ? :string[],
    visible?:boolean,
    _id ?: string,
    titulo :string,
    body ? :string,
    extracto?:string,
    autor ?:string,
    fecha?: number,
    keywords? : string[]
    tipo ? : number,
    categoria ?: string,
    borrador? : boolean
}

export interface IData{
   ok:boolean,
   docs : IPost[];
}
  
export interface IrptaEntrada{
     ok : boolean,
     entrada ?:IPost,
}
export interface  Iusuario{
  nombre?:string,
  email  ?: string,
  password?:string,
  redes:string,
  img?: string,
  role ?:string,

}