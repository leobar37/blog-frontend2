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
//editor
// Import all Froala Editor plugins.
import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
import 'froala-editor/js/plugins/align.min.js';

// Import a Froala Editor language file.
import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/image_tui.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/embedly.min';

// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { PipesModule } from '../../pipes/pipes.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { GuardsModule } from 'src/app/guards/guards.module';


@NgModule({
  declarations: [
    PrivateComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    SubirPostComponent,
    PostsComponent,
    DashboardComponent,
    ProfileComponent,
    EditPostComponent,
    
  ],
  imports: [
    GuardsModule,
    FormsModule,
    CommonModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    RUTASPRIVATE,
    RouterModule,
    PipesModule
  ]
})
export class PrivateModule { }
