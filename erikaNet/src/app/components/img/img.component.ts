/* eslint-disable @angular-eslint/no-input-rename */
import { Component, OnInit, Input, Output, EventEmitter,OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, AfterViewInit{

  //img: string = 'valor init';
  // COnvertir la imagen en un set
  @Input()
  img: string = '';
  set changeImg(newImg: string){
    this.img = newImg;
  }



  // Invocar desde el padre
  valorPadre: string = '';
  @Input('valorPadre')
  set changeValorPadre(newValorPadre: string){
    this.valorPadre = newValorPadre;
    console.log('change just img = > ', this.valorPadre);
  }

  @Input() alt: string = '';

  // Mandar hacia el padre
  @Output() loaded = new EventEmitter<string>();

  imageDefault = './assets/images/default.jpg';

  //counter = 0;

  //counterFn: number | undefined;

  imgError() {
    this.valorPadre = this.imageDefault;
  }

  imgLoaded(){
    console.log('Log Hijo');
    this.loaded.emit(this.valorPadre);
  }


  constructor() {
    // before render
    // no async -- once time
    console.log('Constructor', 'imgValue =>', this.valorPadre);
   }

  ngOnChanges(changes: SimpleChanges){
    // before render
    // change inputs - some times
    console.log('ngOnChanges', 'imgValue =>', this.valorPadre);
    console.log('Changes: ', changes);
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

}
