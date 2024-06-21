import { UserCarService } from './../../user/user-car.service';
import { Observable } from 'rxjs';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  displayedColumns = ['id', 'licensePlate', 'year', 'model', 'color', 'action']

  constructor(private carService: CarService, private userCarService: UserCarService) { }

  ngOnInit(): void {
  }

  get cars(): Car[] {
    return this.userCarService.userCarData
  }

}
