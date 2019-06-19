import { Component, OnInit } from '@angular/core';
import { ShowServiceService } from '../show-service.service';
import { TvShow } from '../tv-show';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public series: Array<TvShow>;

  constructor(private showService: ShowServiceService) {
    this.series = showService.obtenerSeries();
  }

  ngOnInit() {
  }
}
