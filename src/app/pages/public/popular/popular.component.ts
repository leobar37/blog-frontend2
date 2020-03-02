import { Component, OnInit } from '@angular/core';
import { BloApiService } from '../../../services/posts.service';
import { IPost } from '../../../models/blog.interfaces';
declare function initPlugins();
declare function posts() ;
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls : ["../main.component.css" , "../base.component.css"  ]
})
export class PopularComponent implements OnInit {
  bandera:boolean = false;
  posts:IPost[];
  postLateral:IPost;
  constructor(
    private _blog:BloApiService
  ) {
    this._blog.getPosts(1).subscribe(  (posts:IPost[]) => {
      // console.log(data);
      this.postLateral = posts[0];
      let posts2 = posts;
        posts2.splice(0,1);
      this.posts =  posts2;
    //  console.log(this.postLateral);
    console.log(posts);
    
    this.bandera = true;   
      /*log
        agregar un atributo 
        en el backen para saber donde va el lateral
        y los posts de las esquinas
        */
   })
   
    
   }

  ngOnInit() {
    initPlugins();
    posts();
    //  posts();

  }

}
