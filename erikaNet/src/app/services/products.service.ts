import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  // Método que me trae todos los productos de un API
  getAllProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
