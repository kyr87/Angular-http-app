import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { Employee } from '../shared/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee = new Employee;

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {}
   

  @ViewChild("myForm",{static:false}) Form:NgForm;
  
  addEmployee() {
    this.restApi.createEmployee(this.employee).subscribe(data => {
      this.router.navigate(['/employees-details'])
    });
  }

  // We have access to the form via the 'ViewChild' so we can access the form and clear it.
  onClear() {
    this.Form.reset();
  }

}