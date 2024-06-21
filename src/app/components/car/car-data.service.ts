import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {
  private _carData = new BehaviorSubject<Car>({
    "licensePlate": "",
    "year": 2018,
    "model": "",
    "color": ""
  })

  constructor() { }

  get carData(): Car {
    return this._carData.value
  }

  set carData(car: Car) {
    this._carData.next(car)
  }
}
