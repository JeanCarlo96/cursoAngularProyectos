import { Component } from '@angular/core';
import { Search, Datum } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// endpoint
endpoint = 'https://datosabiertos.compraspublicas.gob.ec/PLATAFORMA/api/search_ocds?year=2020&';

// Variables de interés para el endpoint
newYear = '';
years: string[] = [];
respuestaApi: boolean = false;
respTotal: number = 0;
respPage: number = 0;
respPages: number = 0;

// Variable que almacene el conjunto de datos de respuesta de varios años
respYears: Search[] = [
  {
  total: 0,
  page: 0,
  pages: 0,
  }
];

// Método que lipie el input del año
cleanYear(){
  this.years = [];
  this.respuestaApi = false;
}

// Método que me permita agregar un año a la lista
addYear(){
  if(this.newYear === ''){
    alert('Debe ingresar un año antes de agregar');
  }else {
    this.respYears = [
      {
      total: 0,
      page: 0,
      pages: 0,
      }
    ];
    this.years.push(this.newYear);
    this.newYear = '';
  }
}

// Método que permita comprobar que el año ingresado es correcto
validYear(): boolean{
  let newYearNumber = Number(this.newYear);
  if(newYearNumber >= 2015 && newYearNumber <= 2022){
    return true;
  }else{
    return false;
  }
}

// Método que permita consultar el API
consumirApiYear(){
  for(let year of this.years){
    // Fetch
  fetch(this.endpoint + 'search=' + year)
  .then(response => response.json())
  .then(data => {
    // Casteando la respuesta
    let year = data as Search;
    //console.log(year.data);
    //this.respTotal = year.total;
    //this.respPage = year.page;
    //this.respPages = year.pages;
    this.respYears.push(year);
  })
  .catch(err => console.log(err));

  }

  // Activar la tabla
  this.respuestaApi = true;
}

}
