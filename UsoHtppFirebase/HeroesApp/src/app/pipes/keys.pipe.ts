import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  keys = [];
  transform(value: any): any {

    // tslint:disable-next-line:forin
    for (const key in value) {
      this.keys.push(key);
    }

    return this.keys;
  }

}
