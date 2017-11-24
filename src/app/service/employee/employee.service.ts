import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {
  UrlConfig:string = "http://localhost:3000";
  constructor(private http:Http) { }

  //get employee
  getEmployees(){
    console.log("run employee Service for get all employee");
    return this.http.get(this.UrlConfig + "/api/employees").map(res => res.json());
  }


}
