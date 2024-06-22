import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.module';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService,private authService: AuthService) { }
  username: string
  ngOnInit(): void {
    this.username = this.authService.getUsername()
    console.log(this.userService)
  }

  logout():void {
    this.authService.logout()
  }

}
