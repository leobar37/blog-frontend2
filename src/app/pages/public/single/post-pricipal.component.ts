import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
declare function initPlugins();
declare function header2();

@Component({
  selector: 'app-post-pricipal',
  templateUrl: './post-pricipal.component.html',
  styleUrls : ["./post-pricipal.component.css"  ]
})
export class PostPricipalComponent implements OnInit {

  constructor(private _nav:MenuService) { }

  ngOnInit() {
    initPlugins();
    header2();
  }

}
