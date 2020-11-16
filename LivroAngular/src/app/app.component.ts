import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'LivroAngular {{Interpolation}} passamos informações da classe para o template';

  foto: string = 'favicon.ico';

  msgAlerta(): void {
    alert('Projeto Angular');
  }
  
}
