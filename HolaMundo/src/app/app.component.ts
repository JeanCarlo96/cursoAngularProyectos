import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listEtudiantes: any[] = [
    {nombre: 'Tomás Gonzales', estado: 'Promocionado'},
    {nombre: 'Lucas Pérez', estado: 'Regular'},
    {nombre: 'Patricia Funes', estado: 'Libre'},
    {nombre: 'Juan García', estado: 'Regular'},
    {nombre: 'Martha Perez', estado: 'Promocionado'},
    {nombre: 'Nicolas Gomez', estado: 'Libre'},
  ];

  mostrar = true;

  toogle(): void {
    this.mostrar = !this.mostrar;
  }
}