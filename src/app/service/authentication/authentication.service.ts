import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserService} from '../user/user.service';
@Injectable()
export class AuthenticationService {
  user:UserService

  constructor(private http: Http) {
  }
  //function login with username and userpassword
  login(username: string, userpassword: string) {
    return this.http.post('http://localhost:3000/api/auth/login', {username:username,userpassword:userpassword})
      .map(
        res=>{
          let user = res.json();
          if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify({token: user.token}));
          }

          return user;
        })
      }

  //logout
  logout() {
    localStorage.removeItem('currentUser');

  }
};
