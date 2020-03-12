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
  constructor(
     private _blog : BloApiService
  ) { 
    _blog.getPostPrincipal().subscribe( (resp : IPost[] )  =>{
       if(resp)
        this.postsP =  resp.slice(0 , 4);
        
        console.log(this.postsP[0].keywords);
        
        
    })
    
  }

  ngOnInit() {
 
 }

}
