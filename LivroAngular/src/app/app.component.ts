import { Component } from '@angular/core';
import { from } from 'rxjs';

import {AlertaService} from './alerta.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'LivroAngular {{Interpolation}} passamos informações da classe para o template';

  foto: string = 'favicon.ico';

  constructor( private service: AlertaService ){
    
  }

  enviarMsg() : void {
    this.service.msgAlerta();
  }


  //msgAlerta(): void {
  //  alert('Projeto Angular');
  //}
  
}
