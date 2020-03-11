import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { BloApiService } from '../../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../../../models/blog.interfaces';


@Component({
  selector: 'app-post-pricipal',
  templateUrl: './post-pricipal.component.html',
  styleUrls : ["./post-pricipal.component.css"  ]
})
export class PostPricipalComponent implements OnInit {
  public post:IPost;
  @ViewChild('texto',  null) texto :ElementRef; 
  constructor(private _nav:MenuService ,
     private _post:BloApiService ,
      private activRoute :ActivatedRoute) {
         activRoute.params.subscribe( data =>{
           const { id  }  = data;  
              this.traerPost(id);           
         }); 
       }

  ngOnInit() {
    
  }

  traerPost(id:string){
         this._post.getPost(id).subscribe( ( data : any) =>{
             console.log('imprimiendo data');
             if(!data.ok)
               console.log('errrrrooorrrrrrrrrrrrrrrr');
             else
              this.post = data.entrada;
              let elemento :  HTMLElement =  this.texto.nativeElement;
               elemento.innerHTML =  this.post.body;

              console.log(this.post);
              
         });
  }

}
