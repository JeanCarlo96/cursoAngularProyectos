import { Component } from '@angular/core';
import { Search, Datum } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// endpoint
endpoint = 'https://datosabiertos.compraspublicas.gob.ec/PLATAFORMA/api/search_ocds?';

// Variables de interés para el endpoint
newYear = '';
newSearch = '';
searchs: string[] = [];
years: string[] =[];
respuestaApi: boolean = false;
respTotal: number = 0;
respPage: number = 0;
respPages: number = 0;

// Variable que almacene el conjunto de datos de respuesta de varios años
respSearchs: Search[] = [];

// Método que limpie el input de year
cleanYear(){
  this.years = [];
  this.respuestaApi = false;
}

// Método que limpie el input del search
cleanSearch(){
  this.searchs = [];
  this.respuestaApi = false;
}

// Método que me permita agregar un año a la lista
addYear(){
  if(this.newYear === ''){
    alert('Debe ingresar un year antes de agregar');
  }else {
    this.respSearchs = [];
    this.years.push(this.newYear);
    this.newYear = '';
  }
}

// Método que me permita agregar un search a la lista
addSearch(){
  if(this.newSearch === ''){
    alert('Debe ingresar un search antes de agregar');
  }else {
    this.respSearchs = [];
    this.searchs.push(this.newSearch);
    this.newSearch = '';
  }
}

// Método que permita comprobar que el año ingresado es correcto
validSearch(): boolean{
  let newYearNumber = Number(this.newSearch);
  if(newYearNumber >= 2015 && newYearNumber <= 2022){
    return true;
  }else{
    return false;
  }
}

// Método que permita consultar el API
consumirApiYear(){
  this.respSearchs = [];
  for(let year of this.years){
    for(let search of this.searchs){
      // Fetch
      fetch(this.endpoint + 'year=' + year + '&' + 'search=' + search)
      .then(response => response.json())
      .then(data => {
        // Casteando la respuesta
        let year = data as Search;
        this.respSearchs.push(year);
      })
      .catch(err => console.log(err));

    }
  }

  // Activar la tabla
  this.respuestaApi = true;
}

}
