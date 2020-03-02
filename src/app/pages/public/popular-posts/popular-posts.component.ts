import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-posts',
  templateUrl: './popular-posts.component.html',
  styleUrls: ['./popular-posts.component.css' , "../main.component.css" , "../base.component.css"],


})
export class PopularPostsComponent implements OnInit {
 title   : string = "Hoy se habla de:"
  tags = [ 
     "salad", "Recipe",
      "places" ,"Tips","Friends",
      "Travel" , "Exercise" ,"Reading", 
      "Running" , "Selft-help" , "vacation"
  ]
  constructor() { }

  ngOnInit() {
  }

}
