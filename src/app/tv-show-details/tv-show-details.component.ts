import { Component, OnInit } from '@angular/core';
import { ShowServiceService } from '../show-service.service';
import { TvShow } from '../tv-show';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.sass']
})
export class TvShowDetailsComponent implements OnInit {
  public serie: TvShow;

  constructor(private showService: ShowServiceService, private route: ActivatedRoute) {}

  ngOnInit() {
    const indice = this.route.snapshot.paramMap.get('indice');
    this.serie = this.showService.obtenerSerie(parseInt(indice));
  }

}
