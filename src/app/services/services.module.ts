import { NgModule } from '@angular/core';
import { BloApiService } from './posts.service';
import { SidebarService } from './sidebar.service';
import { ScriptLoaderService } from './extras/script.service';

@NgModule({
  declarations: [
     
  ],
  imports: [
  
  ],
  providers : [
     BloApiService,
     SidebarService,
     ScriptLoaderService
  ]
})
export class ServicesModule { }
