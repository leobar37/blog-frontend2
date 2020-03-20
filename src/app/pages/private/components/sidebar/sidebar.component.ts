import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { item } from '../../../../services/sidebar.service';
import { UsuariosService } from '../../../../services/usuarios.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
   public menu : item[];
  constructor(private _sidebar:SidebarService,
    public _us:UsuariosService 
    ) {
      this.menu =  _sidebar.menu;
    
   }

  ngOnInit() {
  }
  logout() {
     this._us.logout();
  }
}
