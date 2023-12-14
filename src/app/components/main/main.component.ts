import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public onMouseover(event: MouseEvent): void {
    const image: HTMLElement = <HTMLElement>event.target;
    image.style.backgroundImage = `url('https://www.lovevalencia.com/wp-content/uploads/2010/10/ciudad.jpg')`;
    
  }
  public onMouseout(event: MouseEvent): void {
    const image: HTMLElement = <HTMLElement>event.target;
    // Restaurar el fondo a su estado original o cualquier acción que desees realizar al salir del mouse.
    image.style.backgroundImage = `url('https://www.spain.info/.content/images/cabeceras-grandes/comunidad-valenciana/ciudad-artes-ciencias-noche-valencia-pexel256150.jpg')`;
    image.style.color= 'black' 
  }

  public onClick(): void {
    alert('hola');
  }
}

