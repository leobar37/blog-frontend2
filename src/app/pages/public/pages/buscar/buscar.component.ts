import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../../models/blog.interfaces';
import { BloApiService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  posts : IPost[];
  result:  IPost[] = [];
  constructor(
     private _posts:BloApiService
  ) { }

  ngOnInit() {
     this._posts.getPostPrincipal().subscribe( (data: IPost[] ) =>{
      this.posts=  data.reverse();   
      
       
     })
  }
  buscar(elemento : HTMLInputElement){
    if(elemento.value == "") {
       this.result = [];
       return;
    }
   this._posts.buscarPosts(elemento.value).subscribe( (data : any ) =>{
     this.result =  data.result;
     this.result  = this.result.slice( 0 , 5);
   })
      
  }
}
