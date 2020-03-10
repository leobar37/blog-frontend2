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

  getPosts(tipo: number){
    //tipos
    //1 =  populares
    //2= standares
     return this.http.get(`${URLBACKEND}/entrada/listar`).pipe( map ( (data:IData) =>{
       let postsPo : IPost[] = data.docs;
      //  for (const post of data.docs ) {
      //    //  console.log('este es un post');
      //      if(post.tipoblog == tipo){
      //        //condicion momentanea 
      //        if(tipo == 2){
      //          if(post.images.length  > 0 )  postsPo.push(post);
      //         }
      //         postsPo.push(post)
      //      }
      //  }        
       
       return postsPo;

     }));
  }
  getPost(id :string){
     return this.http.get(`${URLBACKEND}/entrada/${id}`)
     .pipe(map( (data:IData) =>{
         console.log('primera data');
          console.log(data);
                 
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
  
}
