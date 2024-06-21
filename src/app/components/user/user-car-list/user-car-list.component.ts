import { UserCarService } from './../user-car.service';
import { Car } from './../../car/car.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-car-list',
  templateUrl: './user-car-list.component.html',
  styleUrls: ['./user-car-list.component.css']
})
export class UserCarListComponent implements OnInit {

  constructor(private userCarService: UserCarService) { }

  ngOnInit(): void {
    
  }

  get cars(): Car[] {
    return this.userCarService.userCarData
  }

}
