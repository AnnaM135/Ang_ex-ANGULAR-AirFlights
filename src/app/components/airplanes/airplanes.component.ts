import { Component, OnInit } from '@angular/core';
import { AirService, Airplanes } from 'src/app/services/air.service';

@Component({
  selector: 'app-airplanes',
  templateUrl: './airplanes.component.html',
  styleUrls: ['./airplanes.component.css']
})
export class AirplanesComponent implements OnInit {
public airplanes: Airplanes[]
  constructor(private Air: AirService) { }

  ngOnInit(): void {
    this.airplanes = this.Air.getAir()
  }

}
