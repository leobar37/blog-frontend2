import { Component, OnInit } from '@angular/core';
import { BloApiService } from 'src/app/services/posts.service';
import { IPost } from '../../../../models/blog.interfaces';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../../../services/usuarios.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
 public posts : IPost[];
  constructor(private _blog:BloApiService,
     private _us :UsuariosService 
    ) {
     this.llenarPosts();
  }


  ngOnInit() {
  }
  llenarPosts(){
    this._blog.getPosts(this._us.usuario._id).subscribe( data=>{
        if(data)
        this.posts = data;
        
    });
  }
  eliminarPost(id:string){
    Swal.fire({
      title: '¿seguro que desea eliminar el post?',
      text: "estas acciones son irreversibles",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminar'
    }).then((result) => {
      if (result.value) {
      this._blog.eliminarPost(id).subscribe( (res: any)=>{       
    
        if(res.ok){
          this.posts =  this.posts.filter(post =>{
              return post._id != id;
          })
          Swal.fire(
            'Eliminado',
            'el post se ha eliminado \n el post correctamente',
            'success'
          )
        }else{
           Swal.fire({
             title : 'ha ocurrido un problema',
             text :'EL post no se ha eliminado correctamente',
             icon :'error'
           })
        }
      })
     
      }
    })
  }
}
