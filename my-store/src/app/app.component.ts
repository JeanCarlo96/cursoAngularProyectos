import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jean Carlo Marchesini';
  age = 18;
  img = 'https://i.ytimg.com/vi/qJxYoiFzIC0/maxresdefault.jpg';
  persona1 = {
    name: 'Juan',
    lastname: 'Palomeque',
    age: 25,
  }
  persona2 = {
    name: 'Gissela',
    lastname: 'Sangoquiza',
    age: 27,
  }

  personas = [this.persona1, this.persona2];

  // Propiedades
  btnDisabled = true;
  inputValue = 'Jean Carlo Marchesini';
  framework = {
    name: 'Angular',
    version: 13,
    img: 'https://i.ytimg.com/vi/qJxYoiFzIC0/maxresdefault.jpg',
  };

  // Eventos
  btnDisabledClick = true;

  toggleButton(){
    this.btnDisabledClick = !this.btnDisabledClick;
  }

  subirVersion(){
    this.framework.version += 1;
  }

  // Evento para el scroll del div
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  //Evento usado cuando tecleamos en el input
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.persona1.lastname = element.value;
  }

  // NgModel
  precio = 360.88;

  // *ngFor
  names: string[] = ['Jean', 'Jonathan', 'Estefania', 'Paola', 'Karla'];
  newName = '';
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  // Repaso *ngFor
  marcasAutos: string[] = ['Chevrolet', 'Wolskwagen', 'Nissan', 'Toyota', 'Citroen'];

  nuevaMarca = '';

  agregarMarca(){
    this.marcasAutos.push(this.nuevaMarca);
    this.nuevaMarca = '';
  }

  elimnarMarca(i: number){
    this.marcasAutos.splice(i);
  }

  products: Product[] = [
    {
      name: 'Jabón',
      price: 0.85,
      image: './assets/images/cepillo.jpg',
      category: 'Aseo'
    },
    {
      name: 'Shampoo',
      price: 3.25,
      image: './assets/images/jabon.jpg'
    },
    {
      name: 'Cepillo',
      price: 5.36,
      image: './assets/images/shampo.jpg'
    }
  ];

  // *ngSwitch
  valorInputNombre = '';

}
