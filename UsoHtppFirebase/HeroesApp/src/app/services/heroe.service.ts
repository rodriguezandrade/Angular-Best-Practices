import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../models/heroe';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroeService {
  url = 'https://heroesapp-10309.firebaseio.com/Heroes.json';
  urlHeroe = 'https://heroesapp-10309.firebaseio.com/Heroes/';

  constructor(private _http: HttpClient) { }

  nuevoHeroe(heroe: Heroe) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._http.post<Heroe>(this.url, heroe, httpOptions)
      .pipe(
        map(res => {
          console.log(res);
          return res;
        }));
  }

  editarHeroe(heroe: Heroe, key) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._http.put<Heroe>(this.urlHeroe + key + `.json`, heroe, httpOptions)
      .pipe(
        map(res => {
          console.log(res);
          return res;
        }));
  }

  getHeroe(key: string) {
    const url = this.urlHeroe + key + `.json`;
    return this._http.get(url).pipe(map(res => {
      return res;
    }));
  }

  getHeroes() {
    return this._http.get(this.url).pipe(map(res => {
      return res;
    }));
  }
}
