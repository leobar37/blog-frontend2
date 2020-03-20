import { Component, OnInit, OnDestroy } from '@angular/core';

import { cargarEstilo, cargarScripts, cargarScript } from '../../../../controllers/scripts';
import { BloApiService } from 'src/app/services/posts.service';
import {  IEntrada, IrptaEntrada } from 'src/app/models/blog.interfaces';
import   Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { IPost } from '../../../../models/blog.interfaces';
import { URLBACKEND } from '../../../../keywords/constants';
import { Categoria } from '../../../../models/categoria';
import { CateriaService } from '../../../../services/cateria.service';
import { UsuariosService } from '../../../../services/usuarios.service';
declare var $:any;
interface HtmlElement extends Event{
  target : HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-subir-post',
  templateUrl: './subir-post.component.html',
  styleUrls: ['./subir-post.component.css']
})
export class SubirPostComponent implements OnInit  , OnDestroy {
  load :boolean  = false;
  imagenes :(ArrayBuffer | string) [] = []
  guardar : boolean  = false;
  file : File;
  files : File[]=[];
  categorias:Categoria[] = []; 
  categoria : string;
    post:IEntrada; 
  tags  : string[] = [];
   public titulo:string ;
  public options: Object = {
    placeholderText: 'Edita tu contenido aqui',
    charCounterCount: false,
    imageUploadParam: 'ram',
    // Set the image upload URL.
    imageUploadURL: URLBACKEND+'/uploads/ram',
    // Additional upload params.
    imageUploadParams: {id: 'my_editor'},
    // Set request type.
    imageUploadMethod: 'POST',
    // Set max image size to 5MB.
    imageMaxSize: 5 * 1024 * 1024,
    // Allow to upload PNG and JPG.
    imageAllowedTypes: ['jpg' , 'gif' , 'png', 'jpeg'],
    toolbarButtons: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
      },
      'moreParagraph': {
        'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
      },
      'moreRich': {
        'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
      },
      'moreMisc': {
        'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
        'align': 'right',
        'buttonsVisible': 2
      }
    } ,
    events : {
      'image.uploaded': function (response) {
        // Image was uploaded to the server.
        console.log('la imagen se subio correctamente' + response);
      },
      'image.replaced': function ($img, response) {
        console.log('imagen eliminada');
        
      },
    },
    imageResizeWithPercent : true,  
  }
  public extracto : string  = "";
  public editorContent: string = "";
  constructor(private _blog:BloApiService,
    private _categoria :CateriaService,
    private _us:UsuariosService
    ) {
    //  cargarEstilo('assets/plugins/Magnific-Popup-master/dist/magnific-popup.css', 'subpost');
     cargarEstilo('assets/css/pages/user-card.css', 'subpost');
    //  cargarEstilo('assets/css/pages/floating-label.css', 'subpost')
    //  cargarScripts(scriptsPost , 'subpost');
    //  cargarScript('https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js' ,  'fotorama')
    _categoria.listarCategorias().subscribe( (data :any ) =>{
      this.categorias = data.docs;
      
  });
     let url = URLBACKEND +  '/uploads/tipo/nameImage';
     this.imagenes.push(url);
  }
  
  ngOnInit() {    
    this.load = true;
    $('#carousel').carousel()
  }
  ngOnDestroy(){
    //guardar en el storage
    if(this.editorContent.length > 5)
    Swal.fire({
      title: '¿desea guardar este post como borrado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, guardar'
    }).then( (value)=>{
      if(value){
        this.titulo = this.titulo  ?  this.titulo : this.titulo = 'borrador';
        this.guardarContenido(true);   
      }
    })
  
  }
  guardarContenido(borrador ?:boolean){
   let observable = new Observable(observer=>{
    let valor : boolean ;
    if(borrador){ valor = false}
     else{
        valor =this.imagenes.length < 2 ||  this.titulo ==  '' || this.editorContent.length <  150 ||  this.extracto.length < 80  || this.tags.length < 2 ; 
     }
        observer.next('verificando errores')
      if(!valor){
        
        this.post = {
          borrador :  true,
          titulo : this.titulo,
          body : this.editorContent,
          extracto : this.extracto ,
          categoria  : this.categoria,
          keywords : this.tags,
          fecha : borrador ?  undefined :new Date().getTime(),
          autor : this._us.usuario._id
       }  
      //  observer.next('guardando datos');
       this._blog.crearEntrada(this.post).subscribe((resp:IrptaEntrada) =>{
         console.log(resp);          
        if(resp.ok){
          let post : IPost = resp.entrada;
          //console.log(resp);
          observer.next('datos correctamente guardados texto');
          observer.next('guardando imagenes');
          this._blog.subirImagenesPost(post._id ,  this.files).subscribe( (resp :any) =>{
              if(resp.ok){
                 observer.next('imagenes guardadas correctamente');
              }else{
                 observer.error('errr : '+resp.error);
              }
          })
          observer.next('se agreo correctamente el post : '+ post.title);
          observer.complete();
          //subir imagenes
         }else{
           observer.next('error al guardar datos');
         }
         ///recepcionar el post
        })
       } else{
          //swettaler
        observer.error('existen datos vacios')
       }
  
   });
  
    observable.subscribe( (res :string)  =>{
       if(!borrador){
        Swal.fire({
          title :'procesando datos',
          text :  res ,
          icon : 'success',
           allowOutsideClick : false
        })  
        Swal.isLoading();
       }
    }, (err: string) =>{ 
      Swal.fire({
        title :'procesando datos',
        text :  err ,
        icon : 'error'
      })  
    })

  }
  agregarTag(tag:HTMLInputElement){
    if(tag.value.length === 0){
      return;
   }
    this.tags.push(tag.value);
    tag.value ="";
  }
  manejarImagen(evento: HtmlElement){
    if(this.imagenes.length ===1)
     this.imagenes =  this.imagenes.filter( imagen => {
        return imagen  !=  `${URLBACKEND}/uploads/tipo/nameImage`;
     })
    if(this.imagenes.length >=4){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'solo es perimitido 4 imagenes',
        // footer: '<a href>Why do I have this issue?</a>'
      })
      return;
    }
    if(evento.target.files && evento.target.files[0]){
       this.file  = evento.target.files[0];
       let reader = new FileReader();
        reader.onload =  (event)=>{
           let image:ArrayBuffer | string = reader.result;
           this.imagenes.push(image);     
           this.files.push(this.file);
        }
        reader.readAsDataURL(this.file);
    }
  }
  eliminarImagen(img:string){
    if( img == URLBACKEND +  '/uploads/tipo/nameImage'){
      //  console.log('aqui');
      return;
     }
      let pos =  this.imagenes.indexOf(img);
        this.files.splice(pos, 1);
       this.imagenes =  this.imagenes.filter(imagen =>{     
          return imagen  != img ;
        })
      if(this.imagenes.length === 0){       
         this.imagenes.push(URLBACKEND+ '/uploads/tipo/nameImage');
      }  
  }
  
  eliminarTag(tag:string){
     this.tags = this.tags.filter( tagP =>{
        return tagP != tag ;
     })
  }
}


