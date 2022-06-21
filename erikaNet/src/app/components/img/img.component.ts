import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  img: string = 'valor init';

  // Invocar desde el padre
  @Input() valorPadre: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
