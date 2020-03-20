import { Pipe, PipeTransform } from '@angular/core';
import { URLBACKEND } from '../keywords/constants';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image:string, tipo:string =  'posts' ): any {
      
    let ruta =  URLBACKEND ;    
    if(image.length == 0 || !image){
      ruta = `${ruta}/uploads/${tipo}/rdsasa`;
      return ruta;;
    }
    switch(tipo){
        case 'usuarios':
            ruta =  `${ruta}/uploads/${tipo}/${image}` 
            break;
        case 'posts' : 
               ruta =  `${ruta}/uploads/${tipo}/${image}` 
            break;  
        default : 
            ruta =  `${ruta}+/uploads/${tipo}/rdsasa` 
           break;
    }
   
    return ruta;
  }

}
