import { Component, OnInit } from '@angular/core';
import { ShowServiceService } from '../show-service.service';
import { TvShow } from '../tv-show';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.sass']
})
export class TvShowDetailsComponent implements OnInit {
  public serie: TvShow;

  constructor(private showService: ShowServiceService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    const indice = this.route.snapshot.paramMap.get('indice');
    this.showService.obtenerSerieAPI(parseInt(indice)).subscribe({
      next: (serieAPI) => {
        this.serie = {
          nombre: serieAPI.name,
          episodios: serieAPI.number_of_episodes,
          temporadas: serieAPI.number_of_seasons,
          rate: serieAPI.vote_average / 2,
          descripcion: serieAPI.overview
        }
      }
    })
  }

  public volver(): void {
    this.location.back();
  }

}
