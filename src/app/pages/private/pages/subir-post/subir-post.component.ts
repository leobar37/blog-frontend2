import { Component, OnInit } from '@angular/core';

import {  cargarEstilo, cargarScripts } from '../../../../controllers/scripts';
import { scriptsPost } from 'src/app/keywords/constants';
import { BloApiService } from 'src/app/services/posts.service';
import {  IEntrada } from 'src/app/models/blog.interfaces';
import   Swal from 'sweetalert2';

@Component({
  selector: 'app-subir-post',
  templateUrl: './subir-post.component.html',
  styleUrls: ['./subir-post.component.css']
})
export class SubirPostComponent implements OnInit {
  load :boolean  = false;
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
  }
  
  ngOnInit() {    
    this.load = true;
  }

  guardarContenido(){
  let valor : boolean  =  this.titulo == '' || this.editorContent.length <  150 ||  this.extracto.length < 80  || this.tags.length < 2 ; 
     console.log('respuesta');
     console.log(valor);
     
     if(!valor){
      this.post = {
        titulo : this.titulo,
        body : this.editorContent,
        extracto : this.extracto ,
        keywords : this.tags,
        fecha :  String(new Date().getTime()),
        autor : '5e61d03af5454a398022e385'
     }  
       this._blog.crearEntrada(this.post).subscribe(resp =>{
  })
     } else{
        //swettaler
     Swal.fire( { 
         title :'ups', 
         text : 'Al parecer hay campos vacios', 
         icon : 'error',
     })
     }
    

  }
  agregarTag(tag:string){
     this.tags.push(tag);
  }
}
