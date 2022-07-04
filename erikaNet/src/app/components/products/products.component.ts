import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service'
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Arreglo que almacena los productos del carrito
  myShoppingCar: Product[] = [];

  // Variable que almacena el total
  total = 0;

  // Arreglo de Productos
  products: Product[] = [];

  // Fecha
  today = new Date();
  date = new Date(2021, 1, 21);

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.myShoppingCar = this.storeService.getMyShoppingCar();
  }

  ngOnInit(): void {
    // Como la petición es asíncrona debe ir dentro del ngOnInit
    this.productService.getAllProducts().subscribe(data => {
      this.products = data
    });
  }


  onAddToShoppingCar(product: Product) {
    //this.myShoppingCar.push(product);
    this.storeService.addProduct(product);
    //this.total = this.myShoppingCar.reduce((sum, item) => sum + item.price, 0);
    this.total = this.storeService.getTotal();
  }

}
