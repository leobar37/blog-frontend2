import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SubirPostComponent } from './pages/subir-post/subir-post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { RUTASPRIVATE } from './rutas.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    PrivateComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    SubirPostComponent,
    PostsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RUTASPRIVATE
  ]
})
export class PrivateModule { }
