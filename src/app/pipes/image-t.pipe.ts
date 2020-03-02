import { Pipe, PipeTransform } from '@angular/core';
import { URLBACKEND } from '../keywords/constants';

@Pipe({
  name: 'imageT'
})
export class ImageTPipe implements PipeTransform {

  transform( image:string , numero:number): any {
  //  console.log('paso por mi pipe');
   
  //   console.log(image);
     //"uploads/posts/5e5af4f3d013d04aa4721c6a-1.jpg", "uploads/posts/5e5af4f3d013d04aa4721c6a-2.jpg"]
    let url = URLBACKEND + '/' + image[numero];  
    console.log('retorno');
    console.log(url);
    return  url;
  }

}
