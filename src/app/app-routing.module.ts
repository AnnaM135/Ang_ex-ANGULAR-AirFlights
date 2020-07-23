import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirplanesComponent } from './components/airplanes/airplanes.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightsChildComponent } from './components/flights-child/flights-child.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  // {path: "", component: AppComponent},
  {path: "airplanes", component: AirplanesComponent },
  {path: "addflight", component: AddFlightComponent},
  {path: "flights", component: FlightsComponent},
  {path: "flights/:id", component: FlightsChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
