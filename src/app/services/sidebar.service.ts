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
     },
     {
      title  : 'settings',
       icono: 'fas fa-cog',
       items: [
          { title: "categorias", url : 'categoria'},
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