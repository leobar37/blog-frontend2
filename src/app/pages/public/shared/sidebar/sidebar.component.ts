import { Component, OnInit } from '@angular/core';
import { CateriaService } from '../../../../services/cateria.service';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {  
   categorias : Categoria[];
  constructor(
    private _categoria : CateriaService
  ) { 
    _categoria.listarCategorias().subscribe( (data:any)  =>{
       this.categorias = data.docs;
       
    })
  }
  
  ngOnInit() {
  }

}
