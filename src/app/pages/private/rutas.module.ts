
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';
import { SubirPostComponent } from './pages/subir-post/subir-post.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const rutas:Routes = [ 
  { path : 'pr' ,component: PrivateComponent , 
    children : [ 
       {path : 'newpost' , component : SubirPostComponent },
        {path :'dashboard' , component: DashboardComponent},
        {path :'posts' , component: DashboardComponent},
      ]
    } ,
    {path : ''  , pathMatch : 'full' , redirectTo : 'pr'}

]

export const RUTASPRIVATE = RouterModule.forChild( rutas);