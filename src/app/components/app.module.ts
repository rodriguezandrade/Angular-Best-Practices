import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule } from '@angular/router';
import { HeroesService } from '../services/heroes.service';
import { HeroeComponent } from './heroe/heroe.component';
import { SearchHeroeComponent } from './search-heroe/search-heroe.component';
import { HeroetarjetaComponent } from './heroetarjeta/heroetarjeta.component';
import { SearchheroetarjetaComponent } from './searchheroetarjeta/searchheroetarjeta.component';
import { TemplateComponent } from '../formularios/components/template/template.component';
import { DataComponent } from '../formularios/components/data/data.component';
import { MiscelaneosComponent } from '../miscelaneos/miscelaneos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResaltadoDirective } from '../directives/resaltado.directive';
import { RutasHijasComponent } from '../miscelaneos/rutas-hijas/rutas-hijas.component';
import { APP_ROUTING } from '../components/app.routing.module';
import { UsuarioComponent } from '../miscelaneos/rutas-hijas/usuario/usuario.component';
import { NavbarUsuarioComponent } from '../miscelaneos/rutas-hijas/navbar-usuario/navbar-usuario.component';
import { UsuarioNuevoComponent } from '../miscelaneos/rutas-hijas/usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from '../miscelaneos/rutas-hijas/usuario/usuario-editar/usuario-editar.component';
import { UsuarioDetalleComponent } from '../miscelaneos/rutas-hijas/usuario/usuario-detalle/usuario-detalle.component';
@NgModule({
  declarations: [
    AppComponent,
    ResaltadoDirective,
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
    MiscelaneosComponent,
    RutasHijasComponent,
    UsuarioComponent,
    NavbarUsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent ,
    UsuarioDetalleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    APP_ROUTING,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
