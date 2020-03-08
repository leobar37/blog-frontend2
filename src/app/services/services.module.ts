import { NgModule } from '@angular/core';
import { BloApiService } from './posts.service';
import { SidebarService } from './sidebar.service';

@NgModule({
  declarations: [
     
  ],
  imports: [
  
  ],
  providers : [
     BloApiService,
     SidebarService
  ]
})
export class ServicesModule { }
