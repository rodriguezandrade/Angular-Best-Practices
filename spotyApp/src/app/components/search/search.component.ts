import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service: SpotifyService) { }
  artista: any[] = [];
  buscar(termino: string) {
    this.service.getArtista(termino).subscribe((data: any) => {
      this.artista = data;
    });
  }
}
