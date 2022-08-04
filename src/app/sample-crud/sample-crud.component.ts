import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-sample-crud',
  templateUrl: './sample-crud.component.html',
  styleUrls: ['./sample-crud.component.css']
})
export class SampleCrudComponent implements OnInit {

  employees: Employee[] = [];

  employee: Employee = {
    name: '',
    idNo: 0,
    job: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
