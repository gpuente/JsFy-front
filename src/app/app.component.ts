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
  newUser:User;
  identity:any;
  token:any;
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
    this.newUser = new User('ROLE_USER');
  }






/**
 * -------------------------------------------------------------------
 * Get user token and identity from localStorage if exist
 * -------------------------------------------------------------------
 * 
 * @memberof AppComponent
 */
  ngOnInit(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
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
      localStorage.setItem('identity', JSON.stringify(this.identity));
      return this.getUserHash(this.user);
    }).then(hash => {
      this.token = <string>hash;
      localStorage.setItem('token', <string>hash);
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
        if(!res.user) throw new Error(st.err_message);
        resolve(res.user);
      },
      err => {
        reject(err);
      });
    });
  }






  /**
   * --------------------------------------------------------------------
   * Destroy session from localStorage and reset user variables
   * --------------------------------------------------------------------
   * 
   * @memberOf AppComonent
   */
    logout(){
      localStorage.removeItem('identity');
      localStorage.removeItem('token');
      this.identity = null;
      this.token = null;
      this.user = new User();
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