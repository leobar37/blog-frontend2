import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopularComponent } from './popular/popular.component';
import { PostPricipalComponent } from './single/post-pricipal.component';
import { PublicComponent } from './public.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageTPipe } from '../../pipes/image-t.pipe';
import { PopularPostsComponent } from './popular-posts/popular-posts.component';
import { ROUTESPUBLIC } from './routes.module';


@NgModule({
  declarations: [
  FooterComponent,
  NavbarComponent,
  PopularComponent,
   PostPricipalComponent,
   PublicComponent,
   PostsComponent,
   ImageTPipe,
   PopularPostsComponent
  ],
  exports :[
    FooterComponent,
    NavbarComponent,
    PopularComponent,
    PostPricipalComponent,
    PublicComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ROUTESPUBLIC
  ],
  bootstrap :[ PublicComponent]
})
export class PublicModule { }
