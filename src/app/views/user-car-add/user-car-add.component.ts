import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCarService } from 'src/app/components/user/user-car.service';

@Component({
  selector: 'app-user-car-add',
  templateUrl: './user-car-add.component.html',
  styleUrls: ['./user-car-add.component.css']
})
export class UserCarAddComponent implements OnInit {

  constructor(private userCarService: UserCarService, private router: Router) { }

  ngOnInit(): void {
  }

  add(): void {

  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
