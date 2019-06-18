import { Pipe, PipeTransform } from '@angular/core';
import { TvShow } from './tv-show';

@Pipe({
  name: 'ordenarSeries'
})
export class OrdenarSeriesPipe implements PipeTransform {

  transform(listaSeries: Array<TvShow>, args?: any): any {
    listaSeries.sort((a: TvShow, b: TvShow) => {
      if (a.rate > b.rate) {
        return -1;
      } else if (a.rate < b.rate) {
        return 1;
      } else {
        return 0;
      }
    });
    return listaSeries;
  }

}
