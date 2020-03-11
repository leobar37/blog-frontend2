
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';
import { SubirPostComponent } from './pages/subir-post/subir-post.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostsComponent } from './pages/posts/posts.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';


const rutas:Routes = [ 
  { path : 'pr' ,component: PrivateComponent , 
    children : [ 
       {path : 'newpost' , component : SubirPostComponent ,data : { titulo : 'redactar post'} },
        {path :'dashboard' , component: DashboardComponent , data : { titulo : 'Dashboard'}   },
        {path :'posts' , component: PostsComponent, data : { titulo : 'mis posts'} },
        {path :'editpost/:id' , component:EditPostComponent, data : { titulo : 'editar post'} }
      ]
    } ,
    // {path : ''  , pathMatch : 'full' , redirectTo : 'pr'}

]

export const RUTASPRIVATE = RouterModule.forChild( rutas);