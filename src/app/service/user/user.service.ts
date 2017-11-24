import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {User} from '../../model/user'
@Injectable()
export class UserService {
 public isUserLoggedIn = false;
  // create authorization header with jwt token
  private currentUser = JSON.parse(localStorage.getItem('currentUser'));
  constructor() {
    if(this.currentUser){
      this.isUserLoggedIn = true;
    }
    this.isUserLoggedIn = false;
   }
   setUserLoggedIn(){
    this.isUserLoggedIn = true;
    console.log(this.currentUser);
   }
   //
   setUserLoggedOut(){
    this.isUserLoggedIn = false;
    console.log(this.currentUser);
   }
   //get
   getUserLoggedIn(){
     return this.isUserLoggedIn
   }

  
 // private helper methods
  
 private jwt() {
 
  if (this.currentUser && this.currentUser.token) {
      let headers = new Headers({ 'Authorization': 'JWT' + this.currentUser.token });
      return new RequestOptions({ headers: headers });
  }
}
}
