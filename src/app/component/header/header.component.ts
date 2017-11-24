import { Component, OnInit } from '@angular/core';
import{User} from '../../model/user'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../assets/lib/vendor/font-awesome/css/font-awesome.css','./header.component.css','../../../assets/lib/vendor/bootstrap/css/bootstrap.min.css','../../../assets/lib/sb-css/sb-admin.css']
})
export class HeaderComponent implements OnInit {

  currentUser : User;
  constructor() { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
