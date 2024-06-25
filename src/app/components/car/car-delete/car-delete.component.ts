import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car.model';
import { CarDataService } from '../car-data.service';
import { UserCarService } from '../../user/user-car.service';
import { User } from '../../user/user.module';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {
  car: Car
  user: User
  
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute, private carDataService: CarDataService, private userCarService: UserCarService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.carService.readById(id).subscribe(car => {
      console.log(id)
      this.car = car
      this.carDataService.carData = car
      this.user = this.userCarService.userData
    })
  }
  
  async deleteCar() {
 
    try {
      const response = await this.carService.delete(this.car.id).toPromise();
    
      this.carDataService.carData = {
        "licensePlate": "",
        "year": null,
        "model": "",
        "color": ""
      }
      this.carService.showMessage('Carro excluído com sucesso!')
      this.router.navigate([this.getUrl()])
      
    } catch (error) {
        console.error("Error fetching data", error);
    }
  }
    
  cancel(): void {
    
    this.router.navigate([this.getUrl()])
  }

  getUrl(): string {
    let url = '/cars'
    if (this.user.id > 0) {
      url = `/users/update/${this.user.id}`
    }
    return url
  }

}
