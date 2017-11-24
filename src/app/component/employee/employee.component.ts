import { Component, OnInit,ViewChild } from '@angular/core';
import {Employee} from '../../model/employee';
import { EmployeeService } from '../../service/employee/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  employees:Employee[];
  temp=[];
  columns = [
    {name:'idEmployee'},
    {name:'FullName'},
    {name:'Gender'},
    {name:'Position'},
    {name:'Department'},
    {name:'Part'},
    {name:'DateOfBirth'},
    {name:'Address'},
    {name:'Email'},
    {name:'PhoneNumber'}];


  constructor(private employeeService:EmployeeService) { 
   this.employeeService.getEmployees()
    .subscribe(employees => {
      this.employees = employees}); 

  }

  ngOnInit() {
    
  }
}
