import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarSeries'
})
export class OrdenarSeriesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
