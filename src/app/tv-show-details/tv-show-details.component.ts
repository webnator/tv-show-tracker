import { Component, OnInit } from '@angular/core';
import { ShowServiceService } from '../show-service.service';
import { TvShow } from '../tv-show';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.sass']
})
export class TvShowDetailsComponent implements OnInit {
  public serie: TvShow;
  
  constructor(private showService: ShowServiceService) {
    this.serie = showService.obtenerSeries()[0];
  }

  ngOnInit() {
  }

}
