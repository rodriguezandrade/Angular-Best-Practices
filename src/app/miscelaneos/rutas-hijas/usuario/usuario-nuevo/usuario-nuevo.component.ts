import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private _router: ActivatedRoute) {
    this._router.parent.params.subscribe(parametros => {
      console.log('Ruta Hija NuevoUsuario');
      console.log(parametros);
    });
  }

  ngOnInit() {
  }

}
