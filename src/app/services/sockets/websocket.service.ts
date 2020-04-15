import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  constructor(
    private socket: Socket,
    private router: Router
  ) {
    console.log('se iniciaron los sockets');
    
    this.checkStatus();
  }
    checkStatus() {
      this.socket.on('connect', () => {     
        this.socketStatus = true;
      });
      this.socket.on('disconnect', () => {
        console.log('desconectado');
        this.socketStatus = false;
      });
    }
    emit( evento: string, payload?: any, callback?: Function ) {
     
       this.socket.emit( evento, payload, callback );

    }

    listen( evento: string ) {
      return this.socket.fromEvent( evento );
    }


  

}
