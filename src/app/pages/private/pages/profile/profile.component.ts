import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../services/usuarios.service';
import { Iusuario } from 'src/app/models/usuario.interfaces';
import { cargarScripts, cargarEstilos } from 'src/app/controllers/scripts';
import Swal from 'sweetalert2';

declare var $:any;
declare function adminPro();
interface HtmlElement extends  Event{
   target :  HTMLInputElement & EventTarget ; 
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   load:boolean = false;
  foto: File;
   usuario :  Iusuario = null;
   link :string[] = [
     "assets/plugins/dropify/dist/css/dropify.min.css",
     "assets/plugins/bootstrap/css/bootstrap.min.css",
     "assets/css/style.css"
   ];
  scripts:string[] = [
  "assets/plugins/dropify/dist/js/dropify.min.js"
  ]
  constructor( 
    private _us:UsuariosService
    ) { 
      this.usuario = this._us.usuario;
    const iniciarDependencias  = async ()=> {
      await  cargarScripts(this.scripts, 'profile');
      await cargarEstilos(this.link ,'profile');
        uploadScript();
       this.load = true;
       
      }
     const  uploadScript = ()=>{
      $(document).ready(function() {
        $('.dropify').dropify({
            messages: {
                default: 'seleccione una imagen',
                replace: '¿desea remplazar \n esta imagen?',
                remove: 'remover',
                error: 'Ooops,  A ocurrido un error '
            }
        });

        // Used events
        var drEvent = $('#input-file-events').dropify();

        drEvent.on('dropify.beforeClear', function(event, element) {
            return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
        });

        drEvent.on('dropify.afterClear', function(event, element) {
            alert('File deleted');
        });

        drEvent.on('dropify.errors', function(event, element) {
            console.log('Has Errors');
        });

        var drDestroy = $('#input-file-to-destroy').dropify();
        drDestroy = drDestroy.data('dropify')
        $('#toggleDropify').on('click', function(e) {
            e.preventDefault();
            if (drDestroy.isDropified()) {
                drDestroy.destroy();
            } else {
                drDestroy.init();
            }
        })
        });
     }
      
      iniciarDependencias();
      
    }
    
    ngOnInit() {
    
    }
   async  redSocial(red: string){
     const { value: url } = await Swal.fire({
      title: 'ingrese su direccion de : '+red,
      input: 'url',
      inputValue: '',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'necesita ingresar su direccion de: '+ red
        }
      }
    })
     if(url)
     this.usuario.redes.push( { nombre : red ,  url : url});
   }
    actualizarFoto(evento : HtmlElement){
   if(evento.target.files && evento.target.files[0]){
      this.foto = <File>evento.target.files[0];
    }
    }
    actualizar(){      
        this._us.actualizarUsuario(this.usuario).subscribe( data =>{
          if(data.ok){
            // this._us.localstorageUsuario(this.usuario);
            this.usuario = this._us.usuario;
           }
           
          });
          if(this.foto){
            this._us.actualizarImage(this.usuario._id , this.foto).subscribe( data =>{
              if(data.ok){
                // this._us.localstorageUsuario(this.usuario);
                this.usuario = this._us.usuario;
              }
              
            })
          }
          
    }
}
