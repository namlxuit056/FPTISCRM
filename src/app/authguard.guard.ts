import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './service/user/user.service';
@Injectable()
export class AuthguardGuard implements CanActivate {
   
  private currentUser = JSON.parse(localStorage.getItem('currentUser'));
  constructor( private router: Router,private userService:UserService){
    if(this.currentUser)
      userService.setUserLoggedIn();
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.userService.getUserLoggedIn() === false){
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    }
    return  this.userService.getUserLoggedIn();
  }
}
