import { AuthService } from './../auth.service';
import { JwtRequest } from './../jwt-request.module';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {
  jwtRequest: JwtRequest = {
    username: "",
    password: ""
}
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signin():void{
    console.log(this.jwtRequest)
    this.authService.signin(this.jwtRequest).subscribe(token => {
      console.log(token)
    })
  }

}
