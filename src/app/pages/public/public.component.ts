import { Component, OnInit, OnDestroy } from '@angular/core';
import { cargarScripts, cargarEstilo } from '../../controllers/scripts';
declare var $: any;
 declare function   publicComponent();


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
})
export class PublicComponent implements OnInit ,OnDestroy {
  public load : boolean = false;
 constructor() {
      //  $(".body").removeClass('cl-preload');
      // cargarEstilo("" , 'private');

    }
    
    ngOnInit() {
      //  iniciarPlugin();
      // cargarScripts(scriptsPublic, 'private').then( ()=>{
      //   publicComponent();
      let depene = async ()=>{
        await cargarEstilo('assets/plugins/bootstrap/css/bootstrap.min.css' , 'public')
        await cargarEstilo("assets/css/estilos.css" , 'private');
        await cargarEstilo("assets/css/stylePublic.css" , 'private');
        this.load = true;
      }
          depene(); 
      // });
  }
  ngOnDestroy(){
    // elimarPertenencias('private');
  }

}
