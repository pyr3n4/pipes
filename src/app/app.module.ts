import { BrowserModule } from '@angular/platform-browser';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe'; // Importar pipe personalizado

import { LOCALE_ID, NgModule } from '@angular/core'; // Para DatePipe a espanyol

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es'; // Para DatePipe a espanyol
import { registerLocaleData } from '@angular/common';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenyaPipe } from './pipes/contrasenya.pipe'; // Para DatePipe a espanyol
registerLocaleData(localeEs); // función para DatePipe a espanyol

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenyaPipe  // Anyadir el pipe personalizado
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],  // Para DatePipe a espanyol
  bootstrap: [AppComponent]
})
export class AppModule { }
