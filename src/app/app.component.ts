import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  nombre = 'Asun';

  nombre2 = 'asunción de la torre del río';

  texto = 'Pelícano';

  vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  moneda = 5.25;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    direccion: {
      calle: 'primera',
      casa: '19'
    }
  };

  // Con promesas (AsyncPipe Impure)
  // valorDePromesa = new Promise(
    
    // ( resolve, reject )=>{

  //   setTimeout( ()=>{
  //     console.log('Promesa terminada.');
  //     resolve('Llegaron los datos!');
  //   }, 3500 );
  
  // }
  // );

// Con observables
time = new Observable<string>((observer: Observer<string>) => {
  setInterval(() => observer.next(new Date().toString()), 1000);
});

fecha = new Date();

video = '__g053kKGiM';

nombre3 = 'Leonardo';

// activar = true;

}
