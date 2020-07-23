import { Component, OnInit } from '@angular/core';
import { AirService, Airplanes } from 'src/app/services/air.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
public flights: Airplanes[]
public inp: string =  ""
public inp2: {anun: string, surname: string}[]

  constructor(private Flights: AirService) { }

  ngOnInit(): void {
    this.flights = this.Flights.getAir()
    this.inp2 = this.Flights.getInpVal()

  }
  forma(a){
    console.log(a);
    if(a.form){
      a.form = false
    }else{
      a.form = true
    }
  }
  ok(i){
    return this.Flights.addCustomer(i)
  }
}


