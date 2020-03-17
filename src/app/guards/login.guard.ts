import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivateChild {
  constructor(
    private _us :UsuariosService,
    private router: Router
  ){
  }
  canActivate () :  boolean{
    
    if(this._us.isAuthenticate()){
      console.log('fue autenticado');
      return true;
    }else{
      this.router.navigate( [ '/login']);
      return false;
   }
  }
  public canActivateChild(): boolean {
    
    if(this._us.isAuthenticate()){
      console.log('fue autenticado');
      return true;
    }else{
       this.router.navigate( [ '/login']);
       return false;
    }
  }
  
}
