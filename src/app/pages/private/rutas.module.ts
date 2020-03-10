
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';
import { SubirPostComponent } from './pages/subir-post/subir-post.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostsComponent } from './pages/posts/posts.component';


const rutas:Routes = [ 
  { path : 'pr' ,component: PrivateComponent , 
    children : [ 
       {path : 'newpost' , component : SubirPostComponent },
        {path :'dashboard' , component: DashboardComponent},
        {path :'posts' , component: PostsComponent},
      ]
    } ,
    {path : ''  , pathMatch : 'full' , redirectTo : 'pr'}

]

export const RUTASPRIVATE = RouterModule.forChild( rutas);