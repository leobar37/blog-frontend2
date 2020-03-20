import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(
    public _us:UsuariosService
  ) { }

  ngOnInit() {
   
  }

}
