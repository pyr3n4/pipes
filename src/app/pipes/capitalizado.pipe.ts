import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
    // En versiones anteriores de Angular, los argumentos se indicaban con el operador rest parameters ...
    // ...args: any[]
    // transform( value: string, ...args: any[] ): string {
    // transform( value: string, arg1: any, arg2: any ): string {
    transform( value: string, todas: boolean ): string { // value es el valor de la vble a la que le aplicamos el pipe
        console.log(value);
        value = value.toLowerCase();
        // tslint:disable-next-line: prefer-const
        let nombres: string[] = value.split(' ');

        // tslint:disable-next-line: prefer-const
        // tslint:disable-next-line: forin
        if( todas ){
            // tslint:disable-next-line: forin
            for (let i in nombres) {

                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substring(1);
            }

        } else {

            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
            
        }
        return nombres.join(' ');
    }
}