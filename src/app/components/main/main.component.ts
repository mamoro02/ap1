import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public menu: string = 'invisible';


  public onTitle(event: MouseEvent): void {
    const h2: HTMLElement = <HTMLElement>event.target;
    h2.style.color = 'black';
    h2.style.backgroundImage = `url('https://www.lovevalencia.com/wp-content/uploads/2010/10/ciudad.jpg')`;

  }

  public onMouseout(event: MouseEvent): void {
    const h2: HTMLElement = <HTMLElement>event.target;
    // Restaurar el fondo a su estado original o cualquier acción que desees realizar al salir del mouse.
    h2.style.backgroundImage = `url('https://www.spain.info/.content/images/cabeceras-grandes/comunidad-valenciana/ciudad-artes-ciencias-noche-valencia-pexel256150.jpg')`;
    h2.style.color = 'white';
  }

  public onClick(): void {
    if (this.menu === 'invisible') {
      this.menu = 'visible';
    } else {
      this.menu = 'invisible';
    }   
  }
}

