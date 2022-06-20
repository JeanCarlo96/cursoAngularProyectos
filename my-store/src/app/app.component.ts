import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  // Clases y Estilos
  nombreValido = '';
  widthImg = 10;
  imgYoutube = "data:image/jpeg;base64,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";

  // ngClass
  pais = '';

  //ngStyle
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
  // Formulario
  register = {
    name: '',
    email: '',
    password: '',
  };

  onRegister(){
    console.log(this.register);
  }

}
