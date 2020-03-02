import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URLBACKEND } from '../keywords/constants';
import { IPost, IData } from '../models/blog.interfaces';



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
       let postsPo : IPost[] = [];
       for (const post of data.docs ) {
         //  console.log('este es un post');
           if(post.tipoblog == tipo){
             //condicion momentanea 
             if(tipo == 2){
               if(post.images.length  > 0 )  postsPo.push(post);
              }
              postsPo.push(post)
           }
       }        
       return postsPo;

     }));
  }
  getPost(id :string){

     return this.http.get(`${URLBACKEND}/entrada/${id}`)
     .pipe(map( (data:IData) =>{
  
          
     }));
  }

//   uploadImage(id, body){

//   return this.http.post(`${this.uri}/upload/post/${id}` , body) ;   
//  }
  
}
