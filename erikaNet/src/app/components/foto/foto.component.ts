import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})
export class FotoComponent implements OnInit {

  // Variable que almacena la ruta de la imagen
  @Input() rutaFoto:string = '';

  // Declaración de Output
  @Output() salidaFoto = new EventEmitter<string>();

  // Método que se llama cuando la imagen carga correctamente
  cargaFoto() {
    console.log('Carga Correcta de Foto (Hijo)');
    this.salidaFoto.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
