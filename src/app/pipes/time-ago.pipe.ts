import { Pipe, PipeTransform } from '@angular/core';
declare  function format(val);
import * as timeago from 'timeago.js';
@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: number ): string {
    
     let dato  =timeago.format(value);
    
    return dato;

  }

}
