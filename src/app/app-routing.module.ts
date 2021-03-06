import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddShowComponent } from './add-show/add-show.component';
import { MainComponent } from './main/main.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'agregar-serie', component: AddShowComponent },
  { path: 'detalle-serie/:indice', component: TvShowDetailsComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
