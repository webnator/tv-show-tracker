import { Injectable } from '@angular/core';
import { TvShow } from './tv-show';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowServiceService {

  constructor(private http: HttpClient) { }

  private idSeries: Array<number> = [ 1396, 1399, 63174 ];

  private series: Array<TvShow> = [];

  public obtenerSeriesAPI(): Observable<TvShow> {
    return new Observable((observer) => {
      for (const id of this.idSeries) {
        this.obtenerDetallesPorId(id).subscribe({
          next: (serieAPI: any) => {
            const serie: TvShow = {
              nombre: serieAPI.name,
              episodios: serieAPI.number_of_episodes,
              temporadas: serieAPI.number_of_seasons,
              rate: serieAPI.vote_average / 2,
              id: serieAPI.id
            }
            this.series.push(serie);
            observer.next(serie);
          }
        })
      }
      return { unsubscribe() { } };
    });
  }

  public obtenerSerieAPI(indice: number): Observable<any> {
    return this.obtenerDetallesPorId(this.idSeries[indice]);
  }

  private obtenerDetallesPorId(idSerie: number) {
    return this.http.get(`http://api.themoviedb.org/3/tv/${idSerie}`, {
      params: {
        api_key: 'f806d8716f5bd880ed8aac0a5e1a4d79',
        language: 'es-ES'
      }
    })
  }

  public agregarSerie(idSerie: number) {
    this.idSeries.push(idSerie);
  }
}
