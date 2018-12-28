import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styleUrls: ['./heroetarjeta.component.css']
})
export class HeroetarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  verHeroe() {
    this._router.navigate(['/heroe', this.index]);
    console.log(this.index);
  }
}
