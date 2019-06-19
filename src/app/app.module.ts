import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { StarsPipe } from './stars.pipe';
import { OrdenarSeriesPipe } from './ordenar-series.pipe';
import { MainComponent } from './main/main.component';
import { AddShowComponent } from './add-show/add-show.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    StarsPipe,
    OrdenarSeriesPipe,
    MainComponent,
    AddShowComponent,
    TvShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
