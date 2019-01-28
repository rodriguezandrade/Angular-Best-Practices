import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HeroetarjetaComponent } from './heroetarjeta/heroetarjeta.component';
import { SearchheroetarjetaComponent } from './searchheroetarjeta/searchheroetarjeta.component';
import { TemplateComponent } from '../formularios/components/template/template.component';
import { DataComponent } from '../formularios/components/data/data.component';
import { MiscelaneosComponent } from '../miscelaneos/miscelaneos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchheroetarjetaComponent,
    HeroetarjetaComponent,
    SearchHeroeComponent,
    TemplateComponent,
    DataComponent,
    MiscelaneosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FeatureRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
