import { Component, OnInit } from '@angular/core';
declare var $: any;
// declare function   initPlugins();

declare function initPlugins();
declare function posts();
@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
// styleUrls : ['./public.component.css']
  styleUrls : ["./main.component.css" , "./base.component.css" ]

})
export class PublicComponent implements OnInit {

  constructor() {
      //  $(".body").removeClass('cl-preload');
        $(".body").addClass('cl-loaded');
  }
  
  ngOnInit() {
    //  iniciarPlugin();
    posts();
    initPlugins();
   this.loading();
  }
  
  loading(){
               //force page scroll position to top at page refresh
          // $('html, body').animate({ scrollTop: 0 }, 'normal');
          // will first fade out the loading animation 
        //   let elemento =  $('#loader');
          $("#loader").fadeOut("slow", function() {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
          }); 
         
        // for hero content animations 
        // $(".body").removeClass('cl-preload');
        // $(".body").addClass('cl-loaded');
  }

}
