import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-textohtml',
  templateUrl: './textohtml.component.html',
  styleUrls: ['./textohtml.component.css']
})
export class TextohtmlComponent implements OnInit {
  @ViewChild('texto', null) elemento :ElementRef;
  @Input() text :string;
  constructor() { }

  ngOnInit() {
    this.renderizartexto();
  }
  
  renderizartexto(){
   let div: HTMLElement = this.elemento.nativeElement;
   
     div.innerHTML = this.text;
  }
   
}
