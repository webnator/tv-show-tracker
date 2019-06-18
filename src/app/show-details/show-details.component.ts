import { Component, OnInit, Input } from '@angular/core';
import { TvShow } from '../tv-show';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.sass']
})
export class ShowDetailsComponent implements OnInit {

  @Input() serie: TvShow;

  constructor() { }

  ngOnInit() {
  }

}
