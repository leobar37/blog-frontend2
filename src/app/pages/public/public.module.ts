import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicComponent } from './public.component';

import { HttpClientModule } from '@angular/common/http';
import { ImageTPipe } from '../../pipes/image-t.pipe';

import { ROUTESPUBLIC } from './routes.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PostPricipalComponent } from './pages/single/post-pricipal.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ServicesModule } from 'src/app/services/services.module';


@NgModule({
  declarations: [

   PostPricipalComponent,
   PublicComponent,
  HeaderComponent,
  FooterComponent,
   ImageTPipe,
    PrincipalComponent,
    SidebarComponent
 
  ],
  exports :[

    PostPricipalComponent,
    PublicComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ROUTESPUBLIC,
    ServicesModule
  ],
  bootstrap :[ PublicComponent]
})
export class PublicModule { }
