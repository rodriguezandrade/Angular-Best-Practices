import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private _service: HeroesService, private _router: Router) { }
  heroes: Heroe[] = [];

  ngOnInit() {
    this.heroes = this._service.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(i: number) {
    this._router.navigate(['/heroe', i]);
  }
}
