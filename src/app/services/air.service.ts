import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirService {
  public airplanes: Airplanes[] = [
    new Airplanes(1, "Airplanes 1", 32, "Yerevan", true, [new Customer("Ani", "Sargsyan"), new Customer("Liana", "Galstyan")]),
    new Airplanes(2, "Airplanes 2", 45, "Moscow", true, [new Customer("Liana", "Sargsyan"), new Customer("Vardan", "Galstyan")]),
    new Airplanes(3, "Airplanes 3", 45, "Yerevan", true, [new Customer("Nara", "Sargsyan"), new Customer("David", "Galstyan")])
  ]
  public addFlight: AddFlight = {departure: "", arrival: "", price: "", air: "", time: new Date}
  public inpVal: {anun: string, surname: string}[] = []
  public flightSelect: string[] = ["Airplanes 1", "Airplanes 2", "Airplanes 3"]
  
  constructor() {
    this.airplanes.forEach((r) => this.inpVal.push({anun: "", surname: ""}))

   }

 
  getAir(){
    return this.airplanes
  }
  getAdd(){
    return this.addFlight
  }
  getInpVal(){
    return this.inpVal
  }

  addCustomer(i){
    this.airplanes[i].customer.push(this.inpVal[i])
    this.inpVal[i] = {anun:  "", surname: ""}
  }


  addFl(x){
    this.airplanes.push(x)
    this.addFlight = {departure: "", arrival: "", price: "", air: "", time: new Date}
    console.log(x);
  }

}

export class Airplanes {
  public id: number
  public name: string
  public passengersNum: number
  public location: string
  public form: boolean
  public customer: Customer[]
  constructor(a: number, b: string, c: number, d: string, e: boolean, f:Customer[]){
    this.id = a
    this.name = b
    this.passengersNum = c
    this.location = d
    this.form = e
    this.customer = f
  }
}

class Customer {
  public anun: string
  public surname: string
  constructor(a: string, b: string){
    this.anun = a
    this.surname = b
  }
}

export class AddFlight {
  public departure: string
  public arrival: string
  public price: string
  public air: string
  public time: Date
  constructor(a: string, b: string, c: string, d: string, e: Date){
    this.departure = a
    this.arrival = b
    this.price = c
    this.air = d
    this.time = e
  }
}
