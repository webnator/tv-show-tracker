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

  constructor(private showService: ShowServiceService) {
    this.series = showService.obtenerSeries();
  }


  public agregarSerie(nombre: string, temporadas: number, episodios: number, rate?: number): void {
    this.showService.agregarSerie({
      nombre,
      temporadas,
      episodios,
      rate
    });
  }
}
