import { User } from './../user.module';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
      firstName: "",
      lastName: "",
      email: "",
      birthday: "2023-01-01",
      login: "",
      password: "",
      phone: ""
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createUser(): void {
    if (this.user.birthday) {
      const date = new Date(this.user.birthday);
      this.user.birthday = date.toISOString().split('T')[0];
    }
    console.log(this.user)

    /*
    this.userService.getUser().subscribe((user)=>{
      console.log("retornou")
      console.log(user)
      this.router.navigate(["/users"])
    })
      */
    
    this.userService.create(this.user).subscribe(()=>{
      this.userService.showMessage('Usuario criado!')
      this.router.navigate(["/users"])
    })
      
      
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }

}
