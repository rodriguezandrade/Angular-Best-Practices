import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
