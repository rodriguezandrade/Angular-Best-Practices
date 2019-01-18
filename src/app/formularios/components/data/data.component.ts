import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  usuario: Object = {
    nombreCompleto: {
      nombre: 'Jonathan Andrade',
      apellido: 'Andrade'
    },
    correo: '1140117@unav.edu.mx',
    pasatiempos: ['correr', 'dormir', 'comer']
  };


  forma: FormGroup;
  constructor() {
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
        'apellido': new FormControl('', [Validators.required, Validators.minLength(5), this.noAndrade]),
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    this.forma.controls['password1'].setValidators([
      Validators.required,
      this.noIgualContra.bind(this.forma)]);
    // this.forma.setValue(this.usuario);
  }

  ngOnInit() {
    // console.log(this.usuario);
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    // definir los valores al inicial

    // this.forma.reset(this.usuario);

    this.forma.reset({
      nombreCompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    });

    // assigar valor a campo especifico
    // this.forma.controls['correo'].setValue('holamono@mail.com');
  }

  // Anadir datos a un array
  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }

  noAndrade(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Andrade') {
      return {
        noJonathan: true
      };
    }
    return null;
  }


  noIgualContra(control: FormControl): any {
    const forma: any = this;
    if (control.value !== forma.controls['password1'].value) {
      return {
        noIguales: true
      };
    }

    return null;
  }
}
