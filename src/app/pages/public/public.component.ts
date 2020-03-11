import { Component, OnInit, OnDestroy } from '@angular/core';
import { cargarScripts, cargarEstilo, elimarPertenencias } from '../../controllers/scripts';
import { scriptsPublic } from 'src/app/keywords/constants';
declare var $: any;
 declare function   publicComponent();


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
})
export class PublicComponent implements OnInit ,OnDestroy {

  constructor() {
      //  $(".body").removeClass('cl-preload');
      // cargarEstilo("" , 'private');
      cargarEstilo("assets/css/estilos.css" , 'private');
      cargarEstilo("assets/css/stylePublic.css" , 'private');
      
    }
    
    ngOnInit() {
      //  iniciarPlugin();
      cargarScripts(scriptsPublic, 'private').then( ()=>{
        publicComponent();

      });
  }
  ngOnDestroy(){
    elimarPertenencias('private');
  }

}
