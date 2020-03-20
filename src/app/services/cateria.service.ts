import { Injectable } from '@angular/core';
import { URLBACKEND } from '../keywords/constants';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CateriaService {
  
  constructor(
    private http : HttpClient
  ) { }
   
  crearCategoria(categoria:Categoria){
   let url =  URLBACKEND + '/categoria';
   return this.http.post(url, categoria );
  }
  listarCategorias(){
    let url =  URLBACKEND + '/categoria';
    return this.http.get(url);
  }
  actulizarCategoria(categoria :Categoria){
    let url =  URLBACKEND + '/categoria/'+categoria._id;
     return this.http.put(url , categoria);
  }  
  listarCategoria(id:string){
    let url =  URLBACKEND + '/categoria/'+id;
    return this.http.get(url);
  }
  eliminarCategoria(id :string){
    let url =  URLBACKEND + '/categoria/'+id;
    return this.http.delete(url);

  }

}
