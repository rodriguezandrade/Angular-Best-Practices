import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _service: HeroesService) {
    this._activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this._service.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

}
