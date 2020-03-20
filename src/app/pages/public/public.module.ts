import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicComponent } from './public.component';

import { HttpClientModule } from '@angular/common/http';


import { ROUTESPUBLIC } from './routes.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PostPricipalComponent } from './pages/single/post-pricipal.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ServicesModule } from 'src/app/services/services.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TextohtmlComponent } from './shared/textohtml/textohtml.component';
import { BuscarComponent } from './pages/buscar/buscar.component';


@NgModule({
  declarations: [

   PostPricipalComponent,
   PublicComponent,
  HeaderComponent,
  FooterComponent,
  BuscarComponent,
    PrincipalComponent,
    SidebarComponent,
    TextohtmlComponent
 
  ],
  exports :[

    PostPricipalComponent,
    PublicComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ROUTESPUBLIC,
    ServicesModule,
    PipesModule
  ],
  bootstrap :[ PublicComponent]
})
export class PublicModule { }
