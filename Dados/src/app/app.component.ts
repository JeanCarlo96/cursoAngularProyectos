import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables
  dadoIzquierda = './assets/img/dice1.png';
  dadoDerecha = './assets/img/dice4.png';
  numero1: number = -1;
  numero2: number = -2;
  intentos = 0;

  // Métodos
  tirarDados(){
    if(this.numero1 === this.numero2){
      this.intentos = 0;
    }else{
      this.intentos += 1;
    }

    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;

    this.dadoIzquierda = `./assets/img/dice${this.numero1}.png`;
    this.dadoDerecha = `./assets/img/dice${this.numero2}.png`;
  }
}

