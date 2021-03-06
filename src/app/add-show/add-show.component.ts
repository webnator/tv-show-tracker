import { Component, OnInit } from '@angular/core';
import { ShowServiceService } from '../show-service.service';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.sass']
})
export class AddShowComponent implements OnInit {

  constructor(private showService: ShowServiceService) { }

  ngOnInit() {
  }

  public agregarSerie(id: number): void {
    this.showService.agregarSerie(id);
  }

}
