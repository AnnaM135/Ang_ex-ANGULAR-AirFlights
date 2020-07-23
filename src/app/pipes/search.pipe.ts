import { Pipe, PipeTransform } from '@angular/core';
import {Airplanes} from "../services/air.service"

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Airplanes[], ...args: any[]): Airplanes[] {
    console.log(value);
    return value.filter(a => a.name.search(new RegExp(args[0], "ig")) != -1)
  }

}
