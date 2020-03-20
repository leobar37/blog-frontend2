import { Injectable } from '@angular/core';
import { URLBACKEND } from '../keywords/constants';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, ignoreElements } from 'rxjs/operators';
import { Iusuario } from '../models/usuario.interfaces';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
   usuario : Iusuario;
    token :string;
     helper :  JwtHelperService;
    constructor(
    private  router : Router, 
    private http: HttpClient,
  ) { 
  
    this.helper = new JwtHelperService();
    if(localStorage.getItem('usuario')){
         this.usuario =  JSON.parse(localStorage.getItem('usuario'));
       console.log('mi usuario v');
       console.log(this.usuario);
     }
     
  }

 loguinNormal(password:string , email:string){
   let url =  URLBACKEND +'/login';
  return this.http.post(url ,  { password , email}).pipe( map( (data : any )  =>{    
    if(data.ok) {   
      this.usuario = data.userBd; 
       this.token = data.token;
       localStorage.setItem('token' , this.token);
      this.localstorageUsuario(this.usuario);
     return true;  
    }
      else return false; 
   }));
  
 }  
  loguinGoogle(token : string){
    let url =  URLBACKEND +'/google';
     return  this.http.post(url, { idtoken : token} ).pipe( map( (data : any )  =>{
      if(data.ok) {   
        this.token = data.token;
        localStorage.setItem('token' , this.token);
        this.usuario = data.userBD;
        this.localstorageUsuario(this.usuario);    
       return true; 
      }
        else return false; 
     }));
    }
  registrarUsuario(usuario: Iusuario){
    let url =  URLBACKEND +'/usuario';
     
    return this.http.post(url, usuario).pipe( map( (data : any) =>{       
      if(data.ok){
         this.usuario =  data.usuario;
        this.localstorageUsuario(this.usuario);
         this.token = data.token;  
         return true;
      }
      return false;
    }))
  }
 
  localstorageUsuario(usuario: Iusuario){
      localStorage.setItem('usuario' , JSON.stringify(usuario));
  }
 actualizarUsuario(usuario : Iusuario ){
  let url = URLBACKEND + '/usuario/' + this.usuario._id ;   
  // observer.next('actualizando usuario')       
  return this.http.put(url ,  usuario).pipe ( map( (data : any)=>{
    this.usuario = data.userUpdate;
   this.localstorageUsuario( this.usuario);
    return data;
     })
 )
}
  
 actualizarImage(id: string, foto:File){
  let urlPhoto =  URLBACKEND+ '/upload/usuario/'+ id;
  let formData = new FormData();
  //  formData.set('id' ,   usuario._id);
   formData.set('image' ,   foto);
  return this.http.post( urlPhoto,   formData).pipe ( map( (data2 : any) =>{       
   if(data2.ok){
    console.log(data2);
    this.usuario = data2.updateUs;      
    this.localstorageUsuario(this.usuario);
  }
    return data2;
   }))
 }
 ///verificar si esta autenticado
  isAuthenticate() :  boolean{
    let token =  localStorage.getItem('token');  
    //descifrar token
    const decodedToken = this.helper.decodeToken(token);    
     if(token){
       return !this.helper.isTokenExpired(token);
     }
    return false;    
  }
  ///logout del sistema
  logout()  {
   localStorage.removeItem('token');    
    this.router.navigate([ '/login']);
  }
}
