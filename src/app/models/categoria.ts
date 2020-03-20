

export class Categoria{
    public nombre : string;
    public tags : string[]
    public date : number;
    public descripcion:string;
    public _id ?:string
   constructor(nombre :string  , tags: string[] , descripcion:string , _id?:string){
    this.nombre = nombre;
    this.tags = tags;
    this._id =  _id;
    this.descripcion = descripcion;
    this.date = new Date().getTime();
   }
   agregarTag(tag :string){
     this.tags.push(tag);
   }  
}