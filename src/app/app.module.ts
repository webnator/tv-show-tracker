import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { StarsPipe } from './stars.pipe';
import { OrdenarSeriesPipe } from './ordenar-series.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    StarsPipe,
    OrdenarSeriesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
