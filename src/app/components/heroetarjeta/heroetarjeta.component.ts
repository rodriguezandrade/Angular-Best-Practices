import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styleUrls: ['./heroetarjeta.component.css']
})
export class HeroetarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;
  @Output() heroeSelecionado: EventEmitter<number>;
  constructor(private _router: Router) {
    this.heroeSelecionado = new EventEmitter();
  }

  ngOnInit() {
  }
  verHeroe() {
    this.heroeSelecionado.emit(this.index);
    // this._router.navigate(['/heroe', this.index]);
  }
}
