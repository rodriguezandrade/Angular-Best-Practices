import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FeatureRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { HeroesService } from '../services/heroes.service';
import { HeroeComponent } from './heroe/heroe.component';
import { SearchHeroeComponent } from './search-heroe/search-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchHeroeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FeatureRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
