import { Component, OnInit } from '@angular/core';

import { cargarEstilo, cargarScripts, cargarScript } from '../../../../controllers/scripts';
import { scriptsPost } from 'src/app/keywords/constants';
import { BloApiService } from 'src/app/services/posts.service';
import {  IEntrada, IrptaEntrada } from 'src/app/models/blog.interfaces';
import   Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { IPost } from '../../../../models/blog.interfaces';
import { URLBACKEND } from '../../../../keywords/constants';
declare var $:any;
interface HtmlElement extends Event{
  target : HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-subir-post',
  templateUrl: './subir-post.component.html',
  styleUrls: ['./subir-post.component.css']
})
export class SubirPostComponent implements OnInit {
  load :boolean  = false;
  imagenes :(ArrayBuffer | string) [] = []
  file : File;
  
  files : File[]=[];
    post:IEntrada; 
  tags  : string[] = [];
   public titulo:string ;
  public options: Object = {
    placeholderText: 'Edita tu contenido aqui',
    charCounterCount: false,
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
    imageResizeWithPercent : true,
    events : {
      'froalaEditor.focus' : function(e , editor) {
        console.log(editor.selection.get());
      },
      events: {
        "initialized": () => {
          console.log('initialized');
        },
        "contentChanged": () => {
          console.log("content changed");
        }
      }
    },
  
  }
  public options2: Object = {
    placeholderText: 'Edita tu extracto aqui',
    charCounterCount: false,
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
    imageResizeWithPercent : true,
    events : {
      'froalaEditor.focus' : function(e , editor) {
        console.log(editor.selection.get());
      },
      events: {
        "initialized": () => {
          console.log('initialized');
        },
        "contentChanged": () => {
          console.log("content changed");
        }
      }
    },
  }
  
  public extracto : string  = "";
  public editorContent: string = "";
  constructor(private _blog:BloApiService) {
     cargarEstilo('assets/plugins/Magnific-Popup-master/dist/magnific-popup.css');
     cargarEstilo('assets/css/pages/user-card.css');
     cargarEstilo('assets/css/pages/floating-label.css')
     cargarScripts(scriptsPost , 'post');
     let url = URLBACKEND +  '/uploads/tipo/nameImage';
     this.imagenes.push(url);
  }
  
  ngOnInit() {    
    this.load = true;
    $('#carousel').carousel()
  }

  guardarContenido(){
   let observable = new Observable(observer=>{
     let valor : boolean  =  this.titulo == '' || this.editorContent.length <  150 ||  this.extracto.length < 80  || this.tags.length < 2 ; 
      observer.next('verificando errores')
      if(!valor){
        this.post = {
          titulo : this.titulo,
          body : this.editorContent,
          extracto : this.extracto ,
          keywords : this.tags,
          fecha :  String(new Date().getTime()),
          autor : '5e61d03af5454a398022e385'
       }  
       observer.next('guardando datos');
       this._blog.crearEntrada(this.post).subscribe((resp:IrptaEntrada) =>{
         if(resp.ok){
          let post : IPost = resp.entrada;
          console.log(resp);
          observer.next('datos correctamente guardados texto');
          observer.next('guardando imagenes');
          this._blog.subirImagenesPost(post._id ,  this.files).subscribe( (resp :any) =>{
              if(resp.ok){
                 observer.next('imagenes guardadas correctamente');
              }else{
                 observer.error('errr'+resp.error);
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
      Swal.fire({
        title :'procesando datos',
        text :  res ,
        icon : 'success',
         allowOutsideClick : false
      })  
      Swal.isLoading();
    }, (err: string) =>{ 
      Swal.fire({
        title :'procesando datos',
        text :  err ,
        icon : 'error'
      })  
    })

  }
  agregarTag(tag:HTMLInputElement){
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
           console.log(this.file);
           
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
      this.imagenes =  this.imagenes.filter(imagen =>{
        
           return imagen  != img ;
         
      })
      if(this.imagenes.length === 0){
        console.log('aqui');
        
         this.imagenes.push(URLBACKEND+ '/uploads/tipo/nameImage');
      }
  }
  
  eliminarTag(tag:string){
     this.tags = this.tags.filter( tagP =>{
        return tagP != tag ;
     })
  }
}


