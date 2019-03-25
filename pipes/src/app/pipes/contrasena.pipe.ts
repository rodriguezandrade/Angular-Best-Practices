import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, convertir = true): any {
    if (convertir) {
      let element = '';
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < value.length; index++) {
        element += '*';
      }

      return element;
    } else {
      return value;
    }
  }
}
