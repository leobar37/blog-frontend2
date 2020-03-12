import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { BloApiService } from '../../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../../../models/blog.interfaces';
import { URLBACKEND } from 'src/app/keywords/constants';
import { cargarScript, elimarPertenencias, transformarImagenes } from '../../../../controllers/scripts';


declare var $:any;
// declare  function fotorama()
@Component({
  selector: 'app-post-pricipal',
  templateUrl: './post-pricipal.component.html',
  styleUrls : ["./post-pricipal.component.css"  ]
})
export class PostPricipalComponent implements OnInit , OnDestroy{
  public post:IPost;
 public imagenes:string[] = [];
  @ViewChild('texto',  null) texto :ElementRef; 
  constructor(private _nav:MenuService ,
     private _post:BloApiService ,
      private activRoute :ActivatedRoute) {
        cargarScript('https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js' ,  'fotorama')
       }

  ngOnInit() {
    this.activRoute.params.subscribe( data =>{
      const { id  }  = data;  
         this.traerPost(id);           
    }); 
  }
  ngOnDestroy(){
     elimarPertenencias('fotorama');
  }
  traerPost(id:string){
         this._post.getPost(id).subscribe( ( data : any) =>{
            
           
           if(!data.ok)
           console.log('errrrrooorrrrrrrrrrrrrrrr');
           else
           this.post = data.entrada;
           console.log(this.post);
              let elemento :  HTMLElement =  this.texto.nativeElement;
               elemento.innerHTML =  this.post.body;
              this.imagenes =  transformarImagenes(this.post.images[0].imagenes);
              // let  $fotoramaDiv:  any =   $('#fotorama').fotorama();
              // $fotoramaDiv.fotorama();
              // console.log('la data');
              // console.log($fotoramaDiv);
         });
  }
 
}

