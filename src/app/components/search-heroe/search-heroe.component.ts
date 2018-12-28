import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.css']
})
export class SearchHeroeComponent implements OnInit {
  Heroe: any[] = [];
  termino: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _service: HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.Heroe = this._service.buscarHeroe(params['termino']);
      this.termino = params['termino'];
      console.log(this.Heroe);
    });
  }

}
