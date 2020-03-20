
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { PostPricipalComponent } from './pages/single/post-pricipal.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BuscarComponent } from './pages/buscar/buscar.component';


const routes : Routes =  [
      {path  : '' , component : PublicComponent , 
      children : [
         {path : "single/:id" , component : PostPricipalComponent},
         {path : "posts" , component : PrincipalComponent}, 
         { path : 'search' , component : BuscarComponent},        
         {path : '' , pathMatch : 'full'  , redirectTo : 'posts'},
      ]},
]

export const ROUTESPUBLIC =  RouterModule.forChild(routes);
