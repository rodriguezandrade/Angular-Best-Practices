import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchheroetarjeta',
  templateUrl: './searchheroetarjeta.component.html',
  styleUrls: ['./searchheroetarjeta.component.css']
})
export class SearchheroetarjetaComponent implements OnInit {
  @Input() heroe: Heroe[] = [];
  @Input() index: number;
  constructor(private _router: Router) { }
  ngOnInit() {
  }
  verHeroe() {
    this._router.navigate(['/heroe', this.index]);
  }

}
