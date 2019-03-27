import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  header: any;
  constructor(private http: HttpClient) { }

  getNewReleases() {
    this.header = new HttpHeaders({
      Authorization: 'Bearer BQCIgKggQ2vruhY8EztCz37-sOQ3ulfDitzFHSf0MMSIqmZRlKiueQ8bIseBt8FLGDve3Hm15-Pv7aUU1-A'
    });

    return this.http.get('	https://api.spotify.com/v1/browse/new-releases?limit=21', { headers: this.header })
      .pipe(
        map(data => {
          return data['albums'].items;
        })
      );
  }

  getArtista(termino: string) {
    this.header = new HttpHeaders({
      Authorization: 'Bearer BQCIgKggQ2vruhY8EztCz37-sOQ3ulfDitzFHSf0MMSIqmZRlKiueQ8bIseBt8FLGDve3Hm15-Pv7aUU1-A'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, { headers: this.header })
      .pipe(
        map(data => {
          return data['artists'].items;
        })
      );

  }
}
