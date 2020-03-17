import { NgModule } from '@angular/core';
import { BloApiService } from './posts.service';
import { SidebarService } from './sidebar.service';
// import { ScriptLoaderService } from './extras/script.service';
import { UsuariosService } from './usuarios.service';

@NgModule({
  declarations: [
     
  ],
  imports: [
  
  ],
  providers : [
     BloApiService,
     SidebarService,
     UsuariosService
    //  ScriptLoaderService
  ]
})
export class ServicesModule { }
