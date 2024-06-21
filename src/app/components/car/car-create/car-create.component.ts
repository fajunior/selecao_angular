import { CarDataService } from './../car-data.service';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {


  constructor(private carService: CarService, private router: Router, private carDataService: CarDataService) { }
  

  ngOnInit(): void {
    
  }

  createCar(): void {
    this.carService.create(this.car).subscribe(()=>{
      this.carService.showMessage('Carro criado!')
      this.carDataService.carData = {
        "licensePlate": "",
        "year": 2018,
        "model": "",
        "color": ""
      }
      this.router.navigate(["/cars"])
    })
  }

  cancel(): void {
    this.router.navigate(['/cars'])
  }

  get car(): Car {
    return this.carDataService.carData
  }


}
