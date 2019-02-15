import { Component, OnInit } from '@angular/core';
import { HeroeService } from 'src/app/services/heroe.service';
import { Heroe } from 'src/app/models/heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any;
  constructor(private _services: HeroeService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this._services.getHeroes().
      subscribe((heroe: Heroe) => {
        this.heroes = heroe;
        console.log(this.heroes);
      }
      );
  }
}
