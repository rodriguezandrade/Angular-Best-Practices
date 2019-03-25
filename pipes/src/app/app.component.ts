import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre = 'jonathan';
  nombre2 = 'juan OrlANdo El baNdidO rOBa GallINAs';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = 3.714161820;
  a = 0.234;
  salario = 1234.5;

  HEROE = {
    nombre: 'wolverine',
    edad: 500,
    direccion: {
      calle: 25,
      casa: 121,
      colonia: 'la cajeme'
    },
    casa: 'dc'
  };

  valorDePromesa = new Promise((resolve, rejected) => {
    setTimeout(() => resolve('llego la data'), 4500);
  });

  fecha = new Date();
  activar = true;
  video = 'Su9z9dddly8';
}
