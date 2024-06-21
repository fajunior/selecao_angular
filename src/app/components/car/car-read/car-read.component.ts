import { CarService } from './../car.service';
import { UserCarService } from './../../user/user-car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-read',
  templateUrl: './car-read.component.html',
  styleUrls: ['./car-read.component.css']
})
export class CarReadComponent implements OnInit {

  constructor(private carService: CarService, private userCarService: UserCarService) { }

  ngOnInit(): void {
    this.carService.read().subscribe(cars => {
      console.log("carros")
      console.log(cars)
      this.userCarService.userCarData = cars
    })
  }

}
