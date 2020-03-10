import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
   titulo : string  = "";
  constructor(private router:Router) { }

  ngOnInit() {
    this.router.events
    .pipe(  
       filter(evento => evento instanceof ActivationEnd),
       map((evento:ActivationEnd)=>{
        if(evento.snapshot.data){
           return evento.snapshot.data.titulo;
        }
       })
    )
    .subscribe( (titulo:string)=> {
       if(titulo) 
      this.titulo = titulo;
      
    });
  }

}
