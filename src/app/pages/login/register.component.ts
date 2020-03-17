import { Component, OnInit } from '@angular/core';
import { cargarEstilos } from 'src/app/controllers/scripts';
import { cargarScripts } from '../../controllers/scripts';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Iusuario } from '../../models/usuario.interfaces';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form : FormGroup;
  load: boolean =  false;
  usuario : Iusuario ;
  estilos:string [] =  [
    "assets/plugins/bootstrap/css/bootstrap.min.css" ,
    "assets/css/pages/login-register-lock.css",
    "assets/css/colors/default-dark.css",
    "assets/css/style.css"
   ]
   scripts :string[]   =  [
      "assets/plugins/jquery/jquery.min.js",
      "assets/plugins/bootstrap/js/popper.min.js",
      "assets/plugins/bootstrap/js/bootstrap.min.js"
    
   ]
  constructor( 
    private _us : UsuariosService
  ) {
    let andarDependecias =  async ()=>{
       await cargarEstilos(this.estilos , 'login');
       await cargarScripts(this.scripts , 'login');
       this.load = true;
     }
      andarDependecias();
      this.formulario();     
  }
  formulario(){
    let nombre = new FormControl(null , [ Validators.minLength(10) , Validators.required]);
    let email = new FormControl(null , [Validators.email , Validators.required] );
    let password = new FormControl(null , [Validators.required]);
    let confirmPass = new FormControl(null ,[Validators.required] );
    let  acuerdos = new FormControl(true);
    this.form = new FormGroup({
      nombre,
      email, 
      password,
      confirmPass,
      acuerdos
    });
     confirmPass.setValidators(this.comprobarContraseñas.bind(this.form));
 }
 ngOnInit() {


}
 comprobarContraseñas(control: FormControl){
  // let pas1 =this.form.controls['password'].value ;
  let form : any  =  this;
  let pas1    = form.controls['password'].value;
  if(pas1 != control.value){
     return  { 
         iguales :true
     }
  }
  return  null;
}  
control(control :string){
  return this.form.controls[control];
}
 entrar(){
   if(!this.form.valid){
    return ;
   }else{
     this.usuario = this.form.value;
       this._us.registrarUsuario(this.usuario).subscribe(data => {
          if(data){
             window.location.href =  "#/pr/dashboard";
          }
       })
     
   }
 }
 
}
