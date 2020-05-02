import { Component, OnInit } from '@angular/core';
import { RegisterDto } from './../../models/register.dto';
import { RegisterService } from './../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userName: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  tac: boolean;

  register: RegisterDto;

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public registerService: RegisterService, public router: Router) { }

  registerUser() {
    this.register = new RegisterDto(this.userName, this.name, this.email, this.password);
    console.log(this.register);
    this.registerService.registerUser(this.register).subscribe(
      (data:any) => {
        console.log("Register API result: ", data);
      },
      (err: any) => {
        console.log("Register API error: ", err);
      }
    )
  }

  routeLogin() {
    this.router.navigate(['login']);
  }

  onkeyup(events: any) {
    console.log(events);
    
  }

  ngOnInit(): void {
  }

}
