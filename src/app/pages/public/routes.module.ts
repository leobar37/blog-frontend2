
import { Routes, RouterModule } from '@angular/router';
import { PostPricipalComponent } from './single/post-pricipal.component';
import { PublicComponent } from './public.component';

const routes : Routes =  [
      {path  : '' , component : PublicComponent },
      {path : "single" , component : PostPricipalComponent},
      {path : '**' , pathMatch : 'full' , redirectTo : '' },
]

export const ROUTESPUBLIC =  RouterModule.forChild(routes);
