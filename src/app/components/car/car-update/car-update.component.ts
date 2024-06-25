import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { UserCarService } from '../../user/user-car.service';
import { Car } from '../car.model';
import { User } from '../../user/user.module';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  car: Car
  user: User
  constructor(private carService: CarService,private router: Router, private route: ActivatedRoute, private userCarService: UserCarService, private carDataService: CarDataService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.carService.readById(id).subscribe(car => {
      console.log(car)
      this.car = car
      this.carDataService.carData = car
      this.user = this.userCarService.userData
    })
  }

  updateCar(): void {
    let url = '/cars'
    if (this.user.id > 0) {
      url = `/users/update/${this.user.id}`
    }
    console.log(this.car)
    this.carService.update(this.car).subscribe(() => {
      this.carService.showMessage('Usuário atualizado com sucesso')
      this.router.navigate([url])
    })
  }

  cancel(): void {
    let url = '/cars'
    if (this.user.id > 0) {
      url = `/users/update/${this.user.id}`
    }
    this.router.navigate([url])
  }

}
