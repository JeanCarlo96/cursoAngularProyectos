import { Component } from '@angular/core';
import { Vehiculo } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Listado Inicial de Vehículos
  vehiculos: Vehiculo[] = [
    {
      marca: 'Chevrolet',
      modelo: 'Sail',
      tipo: 'Sedán',
      anio: 2017,
      precio: 10000,
      imagen: './assets/images/sail.jpg'
    },
    {
      marca: 'Toyota',
      modelo: 'Hilux',
      tipo: 'Camioneta',
      anio: 2015,
      precio: 40000,
      imagen: './assets/images/hilux.jpg'
    },
    {
      marca: 'Renault',
      modelo: 'Duster',
      tipo: 'SUV',
      anio: 2022,
      precio: 22000,
      imagen: './assets/images/duster.jpg'
    }
  ];

  // Variable que almacena los datos de un vehiculo
  newVehiculo: Vehiculo = {
    marca: 'Desconocido',
    modelo: 'Desconocido',
    tipo: 'Desconocido',
    anio: 0,
    precio: 0,
  };

  // Variables para almacenar los datos de los inputs
  marca: string = 'Desconocido';
  modelo: string = 'Desconocido';
  tipo: string = 'Desconocido';
  anio: number = 0;
  precio: number = 0;

  // Variable bandera para mostrar mensaje
  mostrarMensaje: boolean = false;

  // Método para agregar un vehículo
  agregarVehiculo(){
    console.log(this.newVehiculo);
    if(this.newVehiculo.marca != 'Desconocido'){
      this.vehiculos.push(this.newVehiculo);
      this.mostrarMensaje = true;
      setTimeout(() => this.mostrarMensaje = false, 3000);
      this.newVehiculo = {
        marca: this.marca,
        modelo: this.modelo,
        tipo: this.tipo,
        anio: this.anio,
        precio: this.precio
      }
    }else{
      alert('No se han ingresado todos los campos');
    }
  }

  // Método para eliminar un vehículo de la lista
  quitarVehiculo(index: number){
    this.vehiculos.splice(index, 1);
  }

}
