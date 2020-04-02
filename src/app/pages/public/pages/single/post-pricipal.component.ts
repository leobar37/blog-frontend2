import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { BloApiService } from '../../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../../../models/blog.interfaces';
import { URLBACKEND } from 'src/app/keywords/constants';
import { cargarScript, transformarImagenes } from '../../../../controllers/scripts';
import { eliminarScript } from 'src/app/controllers/scripts';


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
public postR :IPost[] = [];
  @ViewChild('texto',  null) texto :ElementRef; 
  constructor(private _nav:MenuService ,
     private _post:BloApiService ,
      private activRoute :ActivatedRoute) {
         //related posts
         _post.getPostsxCantidad(0, 3).subscribe((data: any ) =>{
             this.postR = data.docs;
             this.postR[0].fechaPublicacion;
         });
      }

  ngOnInit() {
      let andarDependencias = async ()=>{
          await cargarScript('assets/plugins/jquery/jquery.min.js' ,'fotorama');     
          await  cargarScript('https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js' ,  'fotorama')
        }
        andarDependencias();
    this.activRoute.params.subscribe( data =>{
      const { id  }  = data;  
         this.traerPost(id);           
    }); 
  }
  ngOnDestroy(){
   //eliminar dependencias
   let eliminarDependencias = async ()=>{
    await eliminarScript('assets/plugins/jquery/jquery.min.js' );     
    await  eliminarScript('https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js');
  }
   eliminarDependencias();
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

