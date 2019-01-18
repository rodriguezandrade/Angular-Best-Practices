import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  usuario: object = {
    nombre: '',
    apellido: '',
    email: '',
    pais: 'HN',
    sexo: 'hombre',
    acepta: true
  };

  pais = [{
    codigo: 'CRI',
    nombre: 'CostaRica'
  },
  {
    codigo: 'HN',
    nombre: 'HONDURAS'
  }];

  sexos: string[] = ['Hombre', 'Mujer'];

  constructor() { }

  guardar(forma: any) {
    console.log(forma);

    console.log('valor' + JSON.stringify(forma.value));
  }

}
