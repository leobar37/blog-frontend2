import { Component, OnInit } from '@angular/core';
declare function initPlugins();
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls : ["../main.component.css" , "../base.component.css" , "./footer.component.css" ]
})
export class FooterComponent implements OnInit {
  
  footer =  {
     links:  {  
        titulo: 'enlaces',
        links  : [ 
           "home" , "Blog" , "Styles", "About" , "Contact", "Privacy Policy"  
        ]
     } ,
     Archivos : {
         titulo : "archivos",
         archivos   : [
            "January 2018" , "December 2017" ,"November 2017" ,
            "October 2017" , "September 2017" , "August 2017"
         ]
     } ,
     social : {
         titulo :  "Visitanos",
         social : [
            "Facebook" , "Instagram", "Twitter" ,
             "Pinterest", "Google" , "Linkedin"
         ]
     },
     correo :  {
         titulo  : "Contactanos" , 
          texto  :  "Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati."
     }
  }
  constructor() { 
    
  }

  ngOnInit() {
    initPlugins();
  }

}
