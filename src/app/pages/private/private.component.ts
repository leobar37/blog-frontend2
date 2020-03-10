import { Component, OnInit, Inject,  OnDestroy } from '@angular/core';
import { cargarScripts, cargarEstilo, elimarPertenencias } from '../../controllers/scripts';
import { scriptsAdminPro } from '../../keywords/constants';
import { DOCUMENT } from '@angular/common';

declare function adminPro() ;
@Component({
  selector: 'app-private',
  templateUrl: './private.component.html', 
})
export class PrivateComponent implements OnInit , OnDestroy {

  constructor( @Inject(DOCUMENT) private  doc : Document) {
  cargarEstilo('assets/css/style.css' , 'blank');
  cargarEstilo('assets/css/colors/default-dark.css' , 'blank');
 
  }
  ngOnInit() {
    // cargarEstilo('assets/css/style.css')
    cargarScripts(scriptsAdminPro, 'blank').then(data =>{ 
      adminPro();
    });
  }
  ngOnDestroy(){
    elimarPertenencias('blank');
  }
}

