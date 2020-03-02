import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu/menu.service';
declare function navbar();
// declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls : ["../main.component.css" , "../base.component.css"  ]
  styleUrls : ["../main.component.css" , "../base.component.css"  ]

  // styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _me :MenuService ) { 
    console.log('navbar listo');
    
  }k

  ngOnInit() {
  navbar();
    //  this.animaciones();
  }
 
//    animaciones(){
//     var clSearch = function() {
            
//       var searchWrap = $('.header__search'),
//           searchField = searchWrap.find('.search-field'),
//           closeSearch = searchWrap.find('.header__overlay-close'),
//           searchTrigger = $('.header__search-trigger'),
//           siteBody = $('.header');
  
  
//       searchTrigger.on('click', function(e) {
//           console.log('click');
          
//           e.preventDefault();
//           e.stopPropagation();
      
//           var $this = $(this);
      
//           siteBody.addClass('search-is-visible');
//           setTimeout(function(){
//               searchWrap.find('.search-field').focus();
//           }, 100);
      
//       });
//    }
//    clSearch();
//  }
 }