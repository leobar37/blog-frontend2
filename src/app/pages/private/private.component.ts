import { Component, OnInit, Inject,  OnDestroy } from '@angular/core';
// import { cargarScripts, cargarEstilo, dependencias, eliminarEstilo } from '../../controllers/scripts';
import { scriptsAdminPro, estilosAdminPro } from '../../keywords/constants';
import { DOCUMENT } from '@angular/common';
import { dependencias  , eliminarEstilo ,eliminarScript } from 'src/app/controllers/scripts';

declare function adminPro() ;
@Component({
  selector: 'app-private',
  templateUrl: './private.component.html', 
})
export class PrivateComponent implements OnInit , OnDestroy {
  load :boolean  = false;
  constructor( @Inject(DOCUMENT) private  doc : Document) {
    const depende = async ()=>{
    //  await  cargarEstilo('assets/css/colors/default-dark.css' , 'blank');
    //  await cargarEstilo('assets/css/style.css' , 'blank');
    await  dependencias('all' , estilosAdminPro , scriptsAdminPro);
    this.load = true;
    adminPro();
  } 
  depende();
  console.log('cargo componente general');
  
  
}
ngOnInit() {
  // cargarEstilo('assets/css/style.css')
    // cargarScripts(scriptsAdminPro, 'blank').then(data =>{ 
    //   adminPro();
    //    this.load = true;
    // });
  }
  ngOnDestroy(){
    let eliminarDependecias = async ()=>{
      await   eliminarEstilo( 'assets/css/style.css');
     await eliminarEstilo( 'assets/css/colors/default-dark.css');
        await  eliminarEstilo('assets/css/pages/login-register-lock.css');
      }
      eliminarDependecias(); 
  }
}

