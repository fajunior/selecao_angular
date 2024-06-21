import { UserCarService } from './../user-car.service';
import { Car } from './../../car/car.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-car-list',
  templateUrl: './user-car-list.component.html',
  styleUrls: ['./user-car-list.component.css']
})
export class UserCarListComponent implements OnInit {
  /*cars: Car[] = [{
    "id": 7,
    "year": 2018,
    "licensePlate": "PDV-0625",
    "model": "Audi",
    "color": "White"
}]*/
  

  constructor(private userCarService: UserCarService) { }

  ngOnInit(): void {
    
  }

  get cars(): Car[] {
    return this.userCarService.userCarData
  }

}
