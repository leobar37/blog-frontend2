import { Component, OnInit } from '@angular/core';
import { BloApiService } from '../../../services/posts.service';
import { IPost } from 'src/app/models/blog.interfaces';
declare function posts() ;
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls : [ "./posts.component.css" ]
//   "../main.component.css" , "../base.component.css" 
})
export class PostsComponent implements OnInit {
   posts:IPost[];
  // postLateral:IPost;
  constructor(
    private _blog:BloApiService
  ) { }

  ngOnInit() {
     posts(); 
     this.getPosts();   
  }
    getPosts(){
         this._blog.getPosts(2).subscribe(  (posts:IPost[]) => {
         console.log('mis posts');
         
            this.posts =  posts;
           console.log(posts);
           
          })
    }
}

