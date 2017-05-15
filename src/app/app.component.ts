import { Component } from '@angular/core';
import { User } from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'JsFy';
  user:User;
  identity:string;
  token:string;
  newPassword:string;
  passwordConfirm:string;

  constructor(){
    this.user = new User('ROLE_USER');
  }
}