import { Component, OnInit } from '@angular/core';
import { AirService, AddFlight, Airplanes } from 'src/app/services/air.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
public add: AddFlight
public inqnatir: string[]
  constructor(private Add: AirService) { }

  ngOnInit(): void {
    this.add = this.Add.addFlight
    this.inqnatir = this.Add.flightSelect
  }

  addFlight(){
     this.Add.addFl(this.add)
    this.add = {departure: "", arrival: "", price: "", air: "", time: new Date}
  }

}
