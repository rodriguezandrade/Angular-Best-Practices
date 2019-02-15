import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';
import { HeroeService } from 'src/app/services/heroe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    casa: 'Marvel',
    bio: ''
  };

  key: string;

  constructor(
    private _service: HeroeService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this._route.params.subscribe(params => {

      console.log(params);
      this.key = params['id'];

      if (this.key !== 'nuevo') {
        this._service.getHeroe(this.key)
          .subscribe((data: Heroe) =>
            this.heroe = data
          );
      }
    });
  }

  nuevo: false;

  ngOnInit() {
  }

  guardar() {
    if (this.key === 'nuevo') {
      this._service.nuevoHeroe(this.heroe).subscribe(data => {
        console.log(data.nombre);
      });
    } else {
      this._service.editarHeroe(this.heroe, this.key).subscribe(data => {
        console.log(data.nombre);
      });
    }
  }

  agregarNuevo(forma: NgForm) {
    console.log(forma);
    this._router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: 'Marvel'
    });
  }
}
