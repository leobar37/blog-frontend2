import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { TimeAgoPipe } from './time-ago.pipe';
import { HtmlPipe } from './html.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    TimeAgoPipe,
    HtmlPipe
  ],
  exports :[
    ImagePipe,
    TimeAgoPipe,
    HtmlPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
