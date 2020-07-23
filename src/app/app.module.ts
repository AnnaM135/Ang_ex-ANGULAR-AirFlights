import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirplanesComponent } from './components/airplanes/airplanes.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { FlightsComponent } from './components/flights/flights.component';
import { SearchPipe } from './pipes/search.pipe';
import { FlightsChildComponent } from './components/flights-child/flights-child.component';

@NgModule({
  declarations: [
    AppComponent,
    AirplanesComponent,
    AddFlightComponent,
    FlightsComponent,
    SearchPipe,
    FlightsChildComponent
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
