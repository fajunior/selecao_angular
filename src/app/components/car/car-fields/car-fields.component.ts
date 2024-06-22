import { CarDataService } from './../car-data.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-fields',
  templateUrl: './car-fields.component.html',
  styleUrls: ['./car-fields.component.css']
})
export class CarFieldsComponent implements OnInit {
  car: Car
  constructor(private carDataService: CarDataService) { }

  ngOnInit(): void {
    this.car = this.carDataService.carData
    //console.log("car: "+this.car)
  }
/*
  get car(): Car {
    return this.carDataService.carData
  }
*/
  
}
