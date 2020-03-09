import { Component, OnInit, Inject,  } from '@angular/core';
import { cargarScripts, cargarEstilo, eliminarScript, cargarScript } from '../../controllers/scripts';
import { scriptsAdminPro } from '../../keywords/constants';
import { DOCUMENT } from '@angular/common';

declare function adminPro() ;
@Component({
  selector: 'app-private',
  templateUrl: './private.component.html', 
})
export class PrivateComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private  doc : Document) {
  cargarEstilo('assets/css/style.css');
  cargarEstilo('assets/css/colors/default-dark.css');
 

  
  }
  ngOnInit() {
    // cargarEstilo('assets/css/style.css')
    cargarScripts(scriptsAdminPro, 'blank').then(data =>{ 
      adminPro();
    });
  }
}

