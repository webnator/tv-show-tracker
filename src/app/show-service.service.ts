import { Injectable } from '@angular/core';
import { TvShow } from './tv-show';

@Injectable({
  providedIn: 'root'
})
export class ShowServiceService {

  constructor() { }

  public obtenerSeries(): Array<TvShow> {
    return [{
      nombre: 'Breaking Bad',
      temporadas: 5,
      episodios: 62
    }, {
      nombre: 'Game of Thrones',
      temporadas: 8,
      episodios: 73
    }, {
      nombre: 'Lucifer',
      temporadas: 4,
      episodios: 67
    }];
  }
}
