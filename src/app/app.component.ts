import { Component } from '@angular/core';
import { TvShow } from './tv-show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public serie: TvShow = {
    nombre: 'Breaking Bad',
    temporadas: 5,
    episodios: 62
  }


  public modificarSerie(nombre: string): void {
    this.serie.nombre = nombre;
  }
}
