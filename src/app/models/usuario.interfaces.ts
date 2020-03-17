
export interface Iusuario{
   img :string,
   redes ?: [
      { 
         nombre :string,
         url:string
      }
       
   ],
   blogs: string[],
   estado:boolean,
   _id :string,
   nombre? : string,
   email ? :string,
   password?:string,
   role:string,
   google:boolean,
   descripcion? :string
}