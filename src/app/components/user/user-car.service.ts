import { Injectable } from '@angular/core';
import { Car } from '../car/car.model';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class UserCarService {
  private _userCarData = new BehaviorSubject<Car[]>([])
  private _userData = new BehaviorSubject<User>({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "2023-01-01",
    login: "",
    password: "",
    phone: "",
    cars:[]
})

  constructor() { }

  get userCarData(): Car[] {
    return this._userCarData.value
  }

  set userCarData(userCarData: Car[]) {
    this._userCarData.next(userCarData)
  }

  get userData(): User {
    return this._userData.value
  }

  set userData(user: User) {
    this._userData.next(user)
  }
}
