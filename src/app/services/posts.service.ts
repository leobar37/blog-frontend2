import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URLBACKEND } from '../keywords/constants';
import { IPost, IData, IEntrada } from '../models/blog.interfaces';



@Injectable({
  providedIn: 'root'
})
export class BloApiService {
   
  constructor(private http : HttpClient) { }
 
  getPostsxCantidad(desde : number , hasta : number){
   let url = URLBACKEND + '/entrada/listar';
   let params =  new HttpParams().set('desde' , String(desde)).set('hasta' , String(hasta));
   return  this.http.get(url, { params : params});
  }
  getPosts(idAutor:string){
     return this.http.get(`${URLBACKEND}/porautor/${idAutor}`).pipe( map ( (data:any) =>{
      let postsPo : IPost[] ; 
      if(data.ok){
          postsPo= data.usuario.blogs;
       }
      return postsPo;
     }));
    } 
   getPostPrincipal(tipo:string = 'ordenado'){
     
    return this.http.get(`${URLBACKEND}/principal/${tipo}`).pipe( map ( (data:any) =>{
       console.log(data);
       
      if(data.ok){
         console.log(data.docs);
         
        return data.docs}
      else
        return undefined;
     }));
   }
  getPost(id :string){
     return this.http.get(`${URLBACKEND}/entrada/${id}`)
     .pipe(map( (data) =>{
        return  data;
    }));
  }
  crearEntrada(entrada : IEntrada){
     let url =  URLBACKEND + '/entrada';
    return this.http.post(url ,  entrada );
  } 
  subirImagenesPost(idPost : string , imagenes:File[] , tamaño ?: string , importancia?:string){
    let url =  URLBACKEND + '/upload/post/'+idPost;
    let formData = new FormData();
    for (const imagen of imagenes) {
      formData.append('imagenes', imagen);
    }
    formData.append('tamaño' , '300*300');
    formData.append('importancia', 'prueba')
    return  this.http.post(url, formData);    
  }

    eliminarPost(id:string){
      let url =  URLBACKEND + '/entrada/'+id; 
      return this.http.delete(url);
    }
    editarEntrada(id:string , entrada : IEntrada){
      let url =  URLBACKEND + '/entrada/'+id; 
      return this.http.put(url , entrada);
    } 
    editarImagenesPost(idImagen:string , imagenes:File[] , tamaño ?: string , importancia?:string){
      let url =  URLBACKEND + '/upload/imgs/'+idImagen;
      let formData = new FormData();
      for (const imagen of imagenes) {
        formData.append('imagenes', imagen);
      }
      formData.append('tamaño' , '300*300');
      formData.append('importancia', 'prueba');

      return  this.http.put(url, formData);    
  
    }
    buscarPosts(termino :string) {
      let url = URLBACKEND +'/collecion/entradas/'+termino;
      return this.http.get(url);
    }
   
}
