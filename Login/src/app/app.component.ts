import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Formulario
  registerForm = {
    name: '',
    email: '',
    password: '',
  };

  newName = '';
  newMail = '';
  newPass = '';

  // Método que permita registrarse
  onRegister() {
    this.saveData();
    this.clear();
    this.isCreate = true;
  }

  // Bandera creción usuario
  isCreate = false;

  // Método que respalda los datos de ingreso
  saveData(){
    this.newName = this.registerForm.name;
    this.newMail = this.registerForm.email;
    this.newPass = this.registerForm.password;
  }

  // Método que me permita limpiar
  clear() {
    this.registerForm.name = '';
    this.registerForm.email = '';
    this.registerForm.password = '';
  }

  // Tarjeta
  cardImage = 'https://i.pinimg.com/474x/46/92/8b/46928be5494f95b5744324539f3e9555.jpg';

}
