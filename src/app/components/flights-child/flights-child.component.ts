import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { AirService, Airplanes } from 'src/app/services/air.service';

@Component({
  selector: 'app-flights-child',
  templateUrl: './flights-child.component.html',
  styleUrls: ['./flights-child.component.css']
})
export class FlightsChildComponent implements OnInit {
public flights: Airplanes
public cust: string[]
  constructor(private Route: ActivatedRoute, private Air: AirService) { }

  ngOnInit(): void {
    let id = parseInt(this.Route.snapshot.params.id)
    this.flights = this.Air.airplanes.find(a => a.id == id) 
  }


}
