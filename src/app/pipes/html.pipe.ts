import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlP'
})
export class HtmlPipe implements PipeTransform {

  transform(value: string): HTMLElement {
    let element =  document.createElement('p'); 
    element.innerHTML=  value;
     console.log(element);
          
    return element;
  }

}
