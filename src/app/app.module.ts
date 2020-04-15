import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PublicModule } from './pages/public/public.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { PrivateModule } from './pages/private/private.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/login/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageErrorsComponent } from './pages/components/message-errors/message-errors.component';
import { URLBACKEND } from './keywords/constants';

const config: SocketIoConfig = { url:URLBACKEND, options: {} };
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MessageErrorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    AppRoutingModule,
    PublicModule,
    PrivateModule,
     FormsModule,
     ReactiveFormsModule,
     SocketIoModule.forRoot(config) 

  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
