import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // Arreglo que almacena los productos del carrito
  private myShoppingCar: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() {}

  addProduct(product: Product) {
    this.myShoppingCar.push(product);
    this.myCart.next(this.myShoppingCar);
  }

  getMyShoppingCar(){
    return this.myShoppingCar;
  }

  getTotal(){
    return this.myShoppingCar.reduce((sum, item) => sum + item.price, 0);
  }
}
