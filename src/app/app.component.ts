import { Component } from '@angular/core';
import { TvShow } from './tv-show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public series: Array<TvShow> = [{
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
  }]


  public modificarSerie(nombre: string, temporadas: number, episodios: number): void {
    this.series[0] = {
      nombre,
      temporadas,
      episodios
    };
  }
}
