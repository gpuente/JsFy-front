import { Component, OnInit } from '@angular/core';
import { User } from "./models/user.model";
import { environment } from "../environments/environment";
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title:string = 'JsFy';
  user:User;
  identity:string;
  token:string;
  newPassword:string;
  passwordConfirm:string;

  constructor( private _userService:UserService){
    this.user = new User('ROLE_USER');
  }

  ngOnInit(){
    
  }

  onSubmit(){
    this._userService.logIn(this.user).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error)
      }, ()=>{});
  }
}