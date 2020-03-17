import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './pages/public/public.component';
import { PrivateComponent } from './pages/private/private.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/login/register.component';


const routes: Routes = [
   { path : 'login' , component : LoginComponent },
   { path : 'register' , component :RegisterComponent },
    // {path : '' , pathMatch : 'full' , redirectTo : 'pr' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
