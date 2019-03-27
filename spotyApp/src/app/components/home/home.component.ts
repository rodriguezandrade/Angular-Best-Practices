import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  releases: any;
  nuevasCanciones: [] = [];
  constructor(private service: SpotifyService) {
    this.getReleases();
  }

  ngOnInit() {
  }

  getReleases() {
    this.service.getNewReleases().subscribe(data => {
      this.nuevasCanciones = data;
      console.log(data);
    });
  }
}
