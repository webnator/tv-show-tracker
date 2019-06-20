import { Injectable } from '@angular/core';
import { TvShow } from './tv-show';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowServiceService {

  constructor(private http: HttpClient) { }

  private series: Array<TvShow> = [{
    nombre: 'Breaking Bad',
    temporadas: 5,
    episodios: 62,
    rate: 5,
    id: 1396
  }, {
    nombre: 'Game of Thrones',
    temporadas: 8,
    episodios: 73,
    rate: 4,
    id: 1399
  }, {
    nombre: 'Lucifer',
    temporadas: 4,
    episodios: 67,
    id: 63174
  }]

  public obtenerSeries(): Array<TvShow> {
    return this.series;
  }

  public obtenerSeriesConRetraso(): Observable<TvShow> {
    return new Observable((observer) => {
      let index = 0;
      const int = setInterval(() => {
        if (this.series[index]) {
          observer.next(this.series[index]);
          index += 1;
        } else {
          observer.complete();
          clearInterval(int);
        }
      }, 1000);
      return { unsubscribe() { } };
    });
  }

  public obtenerSerie(indice: number): TvShow {
    return this.series[indice];
  }

  public obtenerSerieAPI(indice: number): Observable<any> {
    const serie = this.series[indice];
    return this.http.get(`http://api.themoviedb.org/3/tv/${serie.id}`, {
      params: {
        api_key: 'f806d8716f5bd880ed8aac0a5e1a4d79',
        language: 'es-ES'
      }
    });
  }

  public agregarSerie(serie: TvShow) {
    this.series.push(serie);
  }
}
