import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  // Otra forma de inicializar
  //@Input('product') product!: Product;

  // Inicializar en un estado por defecto
  @Input() product: Product = {
    id: -1,
    price: 0,
    image: '',
    title: ''
  };

  // Declaración del output
  @Output() addedProduct = new EventEmitter<Product>();

  // Método para agregar al carrito
  onAddToCar(){
    this.addedProduct.emit(this.product);
  }

  constructor() { }

}
