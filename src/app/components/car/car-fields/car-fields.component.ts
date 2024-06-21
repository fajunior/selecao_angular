import { CarDataService } from './../car-data.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-fields',
  templateUrl: './car-fields.component.html',
  styleUrls: ['./car-fields.component.css']
})
export class CarFieldsComponent implements OnInit {
  /*
  car: Car = {
    "licensePlate": "",
    "year": 2018,
    "model": "",
    "color": ""
  }
  */
  constructor(private carDataService: CarDataService) { }

  ngOnInit(): void {
    this.carDataService.carData = this.car
  }

  get car(): Car {
    return this.carDataService.carData
  }

  
}
