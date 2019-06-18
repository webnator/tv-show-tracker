import { Component } from '@angular/core';
import { TvShow } from './tv-show';
import { ShowServiceService } from './show-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public series: Array<TvShow>;

  constructor(showService: ShowServiceService) {
    this.series = showService.obtenerSeries();
  }


  public modificarSerie(nombre: string, temporadas: number, episodios: number): void {
    this.series[0] = {
      nombre,
      temporadas,
      episodios
    };
  }
}
