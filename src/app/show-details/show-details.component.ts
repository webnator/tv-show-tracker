import { Component, OnInit } from '@angular/core';
import { TvShow } from '../tv-show';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.sass']
})
export class ShowDetailsComponent implements OnInit {

  public serie: TvShow = {
    nombre: 'Breaking Bad',
    temporadas: 5,
    episodios: 62
  }

  constructor() { }

  ngOnInit() {
  }

}
