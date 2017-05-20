import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/observable";
import { environment } from "../../environments/environment";

@Injectable()
export class UserService {

  url:string;
  identity:any;
  token:any;

  constructor(private http:Http) { 
    this.url = environment.urls.base;
  }

  logIn(user:any, getHash:string = 'false'){
    user.gethash = getHash;
    let headers = new Headers({'Content-Type':'application/json'});
    return this.http.post(`${this.url}login`, user, headers)
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
