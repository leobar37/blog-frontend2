import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { cargarEstilos, cargarScripts } from '../../controllers/scripts';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import {  estilosAdminPro, scriptsAdminPro } from '../../keywords/constants';
import { dependencias } from 'src/app/controllers/scripts';
declare const gapi:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   load : boolean = false;
   email : string = null;
   password : string = null;
   auth2 : any;
  //  @ViewChild('elemento', null)  elemento : ElementRef;
  //   estilos:string [] =  [
  //   "assets/plugins/bootstrap/css/bootstrap.min.css" ,
  //   "assets/css/pages/login-register-lock.css",
  //   "assets/css/colors/default-dark.css",
  //   "assets/css/style.css"
  //  ]
  //  scripts :string[]   =  [
  //     "assets/plugins/jquery/jquery.min.js",
  //     "assets/plugins/bootstrap/js/popper.min.js",
  //     "assets/plugins/bootstrap/js/bootstrap.min.js"
  //  ]
  constructor(
     private router : Router,
    private _us: UsuariosService
  ) { 

  } 
  

  ngOnInit() {
    let andarDependecias =  async ()=>{
    //   await cargarEstilos(this.estilos , 'login');
    //  await cargarScripts(this.scripts , 'login');
      await  dependencias('login' , estilosAdminPro , scriptsAdminPro);
     this.load = true;
      this.loguinGoogle();
    }
     andarDependecias();
  }
  

ingresar( form: NgForm){
   let data =  form.value;
   this._us.loguinNormal( data.password, data.email).subscribe( data =>{
      if(data){
         window.location.href = "/#/pr/dashboard";
      }
   })
 
 }

 loguinGoogle()
    {
    gapi.load('auth2', ()=>{
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '792650140448-2p45ji7q3durlj89ohdqfkmd17ji560p.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope : 'profile email'
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
  
      this.attachSignin(document.getElementById('elemento'));
    });
  };
  
 attachSignin(element) {
  // console.log(element.id);
   this.auth2.attachClickHandler(element, {},
      (googleUser)=> {
        // let profile = googleUser.getBasicProfile(); 
        let  id_token = googleUser.getAuthResponse().id_token;
        console.log('por fin este es el token ;)');
         this._us.loguinGoogle(id_token)
         .subscribe( (data : boolean) => {
          if(data){
            window.location.href  = "#/pr/dashboard"
          }else{
             //mensaje de acceso denegado
          }
              
         });
         
      } 
   ); 
      
}
}
