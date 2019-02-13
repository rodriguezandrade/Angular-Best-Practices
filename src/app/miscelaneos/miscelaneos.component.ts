import { Component, OnInit } from '@angular/core';
import { faSpinner, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-miscelaneos',
  templateUrl: './miscelaneos.component.html',
  styleUrls: ['./miscelaneos.component.css']
})
export class MiscelaneosComponent implements OnInit {
  alert: string;
  tamano = 20;
  faSpinner = faSpinner;
  faSave = faSave;
  propiedades: object = {
    danger: true
  };

  loading = false;

  constructor() { }

  ngOnInit() {

  }

}
