import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../../models/categoria';
import { CateriaService } from '../../../../services/cateria.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categorias : Categoria []= [];
  constructor( private _categoria:CateriaService) { 
     _categoria.listarCategorias().subscribe( (data: any )  =>{
      this.categorias = data.docs;         
       
     } );
  }

  ngOnInit() {
  }

}
