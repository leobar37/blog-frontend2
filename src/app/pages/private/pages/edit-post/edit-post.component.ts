import { Component, OnInit , OnDestroy } from '@angular/core';
import { BloApiService } from '../../../../services/posts.service';
import { cargarEstilo, cargarScripts, imgToBase64 ,  getArchivo } from 'src/app/controllers/scripts';
import { URLBACKEND, estilosAdminPro, scriptsAdminPro } from '../../../../keywords/constants';
import { IEntrada, IPost, IrptaEntrada } from '../../../../models/blog.interfaces';

import Swal from 'sweetalert2';
import { Router , ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from '../../../../models/categoria';
import { CateriaService } from '../../../../services/cateria.service';
import { dependencias } from '../../../../controllers/scripts';
declare var $:any;
declare function adminPro();
interface HtmlElement extends Event{
  target : HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})

export class EditPostComponent implements OnInit ,  OnDestroy{
   postBd : IPost ; categorias:Categoria[] = [];  categoria :string; load :boolean  = false; imagenes :(ArrayBuffer | string) [] = []; file : File; files : File[]=[]; post:IEntrada;  tags  : string[] = [];
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

  
  }

  
  public extracto : string  = "";
  public editorContent: string = "";
  constructor(private _blog:BloApiService, 
     private router : Router,
      private _categoria :CateriaService,
      private activ:ActivatedRoute) {
    //  cargarEstilo('assets/plugins/Magnific-Popup-master/dist/magnific-popup.css' , 'epost');
     cargarEstilo('assets/css/pages/user-card.css' , 'epost');
    //  cargarEstilo('assets/css/pages/floating-label.css' , 'epost')
    //  cargarScripts(scriptsPost , 'epost');
    _categoria.listarCategorias().subscribe( (data :any ) =>{
        this.categorias = data.docs;
    });
    // //cargar estilos
    // const depende = async ()=>{
    //   //  await  cargarEstilo('assets/css/colors/default-dark.css' , 'blank');
    //   //  await cargarEstilo('assets/css/style.css' , 'blank');
    //   await  dependencias('all' , estilosAdminPro , scriptsAdminPro);
    //   this.load = true;
    //   adminPro();
    // } 
    // depende();
    // //fin 
    
    
    let url = URLBACKEND +  '/uploads/tipo/nameImage';
      activ.params.subscribe( params=>{
          const  {  id }  = params;
           this._blog.getPost(id).subscribe( (data: any) =>{
             console.log(data);
             
               if(!data){ 
               }else{
                 this.postBd =  data.entrada;    
                  if(this.postBd.images[0])
                   this.imagenes =  this.transformarImagenes(this.postBd.images[0].imagenes);
                  this.categoria = this.postBd.categoria;
                   this.titulo =  this.postBd.title;
                   this.extracto =  this.postBd.extracto;
                   this.editorContent =  this.postBd.body;
                   this.tags =  this.postBd.keywords;
               }
           }); 
           
      }) 
      
     this.imagenes.push(url);
     

  }
  
  ngOnInit() {    
    this.load = true;
    $('#carousel').carousel()
  }
 ngOnDestroy(){
    
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
          keywords : this.tags ,
          categoria : this.categoria
          // fecha :  String(new Date().getTime()),
          // autor : 
       }  
       observer.next('guardando datos');
       this._blog.editarEntrada(  this.postBd._id , this.post).subscribe((resp:IrptaEntrada) =>{
         if(resp.ok){
          let post : IPost = resp.entrada;
        
          observer.next('datos correctamente guardados texto');
          observer.next('guardando imagenes');
          //por corregir
          // if(this.postBd.images[0])
          this._blog.editarImagenesPost(this.postBd.images[0]._id , this.files).subscribe( (resp :any) =>{
              if(resp.ok){
                 observer.next('imagenes guardadas correctamente');
              }else{
                 observer.error('errr'+resp.error);
              }
          })
          observer.next('se actualizo correctamente el post : '+ post.title);
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
        title :'ups...6',
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
  transformarImagenes(imagenes :string[]): (ArrayBuffer | string) []{
    let ruta;
    let files:File[] = [];
    let imgs:(ArrayBuffer | string) []   = [];
    for (const image of imagenes) {
       ruta =`${URLBACKEND}/uploads/posts/${image}`
       imgToBase64(ruta,  (base64)=>{
         imgs.push(base64);
         files.push(getArchivo(base64 , image.split('.')[0]))
       })
    } 
    this.files =  files;
    console.log(this.files);

    return imgs;
  }
}
