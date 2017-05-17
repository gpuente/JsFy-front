import { Component, OnInit } from '@angular/core';
import { User } from "./models/user.model";
import { environment } from "../environments/environment";
import { UserService } from "./services/user.service";
import { st } from "../strings/en.lang"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  /**
   * ---------------------------------------------------------
   * Properties
   * ---------------------------------------------------------
   */
  title:string = 'JsFy';
  user:User;
  identity:any;
  token:string;
  newPassword:string;
  passwordConfirm:string;
  errorMessage:string;




  /**
   * Creates an instance of AppComponent.
   * @param {UserService} _userService
   * 
   * @memberOf AppComponent
   */
  constructor(private _userService:UserService){
    this.user = new User('ROLE_USER');
  }

  ngOnInit(){
    
  }





/**
 * --------------------------------------------------------------------
 * Login an user and get their hash token
 * --------------------------------------------------------------------
 * 
 * 
 * @memberOf AppComponent
 */
  onSubmit(){
    this.logInUser(this.user).then(user => {
      this.identity = user;
      return this.getUserHash(this.user);
    }).then(hash => {
      console.log('inside hash')
      console.log(hash);
    }).catch(err => {
       console.log(err);
       this.errorMessage = st.err_message;
    });
  }






  /**
   * -------------------------------------------------------------------
   * Get the user data requested from webservice
   * -------------------------------------------------------------------
   * 
   * @param {User} [user=this.user] user object with username and password
   * @returns Promise:user
   * 
   * @memberOf AppComponent
   */
  logInUser(user:User = this.user){
    return new Promise((resolve, reject) => {
      this._userService.logIn(user).subscribe(res => {
        if(!res.user) throw new Error('Usuario no logueado!!!');
        resolve(res.user);
      },
      err => {
        reject(err);
      });
    });
  }





/**
 * -------------------------------------------------------------------
 * Get the token user requested from webservice
 * -------------------------------------------------------------------
 * 
 * @param {User} [user=this.user] user object with username and password
 * @returns Promise:token
 * 
 * @memberOf AppComponent
 */
  getUserHash(user:User = this.user){
    return new Promise((resolve, reject) => {
      this._userService.logIn(user, 'true').subscribe(res => {
        resolve(res.token);
      },
      err => {
        reject(err);
      });
    });
  }

}