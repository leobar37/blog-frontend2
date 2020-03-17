import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  public menu: item[] = [
     {
        title  : 'posts',
         icono: 'mdi mdi-book-variant',
         items: [
            { title: "nuevo Post", url : 'newpost'},
            { title: "mis posts",  url : 'posts'},
            { title: "dashboard" , url :'dashboard'},
            { title : "perfil" , url : 'profile'}
         ]
     }
  ]
   
  constructor() { }
  

}


export interface item {
 title : string,
 icono ?: string,
 items ?: item[],
 url ?:string
}