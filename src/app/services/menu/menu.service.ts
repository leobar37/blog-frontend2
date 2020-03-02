import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
   navbar  = [
      { titulo  : 'Home'},
      { titulo  : 'Categories' , subMenu : ['Lifestyle','Health','Family','Management','Travel','Work' ]},
      { titulo  : 'Blog' , subMenu : ['Video Post','Audio Post','Gallery Post','Standard Post']},
      { titulo : 'Styles' },
      {titulo: 'About'},
      {titulo : 'Contacto'}
   ]

  constructor() { }
}


