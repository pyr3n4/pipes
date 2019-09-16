import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenya'
})
export class ContrasenyaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {

    if( activar ) {
        
        for (let i = 0; i < value.length; i++) {
        value = value.replace( value.charAt(i), '*' );  // Opcional, crear vble salida en el if, salida += '*';
      }
      return value; //Otra opción, es usar el operador ternario en: return !activar ? value.replace(/./gi,'*') : value;

    } else {
      
      return value;

    }
    
  }

}
