import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.module';
import { UserCarService } from '../user-car.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private userCarService: UserCarService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.userService.readById(id).subscribe(user => {
      this.user = user
      this.userCarService.userCarData = user.cars
      this.userCarService.userData = user
    })
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMessage('Usuário atualizado com sucesso')
      this.router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.router.navigate(["/users"])
  }

}
