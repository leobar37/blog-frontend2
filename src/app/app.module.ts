import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrivateComponent } from './pages/private/private.component';
import { PublicModule } from './pages/public/public.module';
import { BloApiService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PrivateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule
  ],
  providers: [
    BloApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
