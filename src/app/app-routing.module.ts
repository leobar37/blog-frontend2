import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './pages/public/public.component';
import { PrivateComponent } from './pages/private/private.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
   { path : 'login' , component : LoginComponent }
    // {path : '' , pathMatch : 'full' , redirectTo : 'pr' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
