import { Component, OnInit } from '@angular/core';
import { BloApiService } from '../../../../services/posts.service';
import { IPost } from '../../../../models/blog.interfaces';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  postsP: IPost[] = [];
  postRecientes : IPost[] = [];
  posts : IPost[] = [];
  constructor(
     private _blog : BloApiService
  ) { 
    _blog.getPostPrincipal().subscribe( (resp : IPost[] )  =>{
       if(resp){
        this.postsP =  resp.reverse();    
        this.postRecientes = this.postsP.slice( 2 , 6);
        this.posts = this.postsP.slice(6 , this.postsP.length);
       }
        
    })
    
  }

  ngOnInit() {
 
 }

}
