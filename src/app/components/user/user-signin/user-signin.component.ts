import { AuthService } from './../auth.service';
import { JwtRequest } from './../jwt-request.module';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {
  hide = true;
  jwtRequest: JwtRequest = {
    username: "",
    password: ""
}
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signin():void{
    this.authService.signin(this.jwtRequest).subscribe(token => {
      this.router.navigate(['users/profile']);
    })
  }

}
