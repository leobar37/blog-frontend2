import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { item } from '../../../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
   public menu : item[];
  constructor(private _sidebar:SidebarService) {
      this.menu =  _sidebar.menu;
   }

  ngOnInit() {
  }

}
