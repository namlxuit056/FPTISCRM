import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user/user.service';
import { AuthenticationService } from '../../service/authentication/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../../node_modules/ng2-toastr/bundles/ng2-toastr.min.css']
})
export class LoginComponent implements OnInit {
  username: string;
  userpassword: string;
  returnUrl: string;
  loading = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService,) {
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginUser(event) {
    event.preventDefault();
    this.authenticationService.login(this.username, this.userpassword)
      .subscribe(
      data => {
        let user = data;
        if (user && user.token) {
          this.userService.setUserLoggedIn();
          this.route.queryParams.forEach(item => {
            if (item.returnUrl)
              this.router.navigate([item.returnUrl]);
            else
              this.router.navigate(['/']);
          })
          //this.router.navigate([this.returnUrl]);
        }
        else {
          document.getElementById("login_failed").innerHTML = "Username or password incorrect";
        }
      },);
  }

}
