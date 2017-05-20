import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/observable";
import { environment } from "../../environments/environment";
import { User } from "../models/user.model";

@Injectable()
export class UserService {

  url:string;
  identity:any;
  token:any;
  headers:Headers;

  constructor(private http:Http) { 
    this.url = environment.urls.base;
    this.headers = new Headers({'Content-Type':'application/json'});
  }

  logIn(user:any, getHash:string = 'false'){
    user.gethash = getHash;
    return this.http.post(`${this.url}login`, user, this.headers)
      .map(res => res.json());
  }

  register(user:User){
    return this.http.post(`${this.url}register`, user, this.headers)
      .map(res => res.json());
  }

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    identity != undefined ? this.identity = identity : this.identity = null;
    return this.identity;
  }

  getToken(){
    let token = JSON.parse(localStorage.getItem('token'));
    token != undefined ? this.token = token : this.token = null;
    return this.token;
  }

}
