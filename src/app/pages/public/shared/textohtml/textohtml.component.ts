import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-textohtml',
  templateUrl: './textohtml.component.html',
  styleUrls: ['./textohtml.component.css']
})
export class TextohtmlComponent implements OnInit {
  @ViewChild('texto', null) elemento :ElementRef;
  @Input() text :string;
  texto:string;
  constructor() { }

  ngOnInit() {
  this.texto = this.text;
  }   
}
