import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}
  // recibirá un valor con el código del vídeo y otro string para crear la url segura (el parámetro del pipe)
  transform(value: string, url: string): any {  // Devuelve un SaveResourceUrl
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
