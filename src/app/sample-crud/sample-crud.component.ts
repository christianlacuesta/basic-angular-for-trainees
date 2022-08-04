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

  trackByMethod(index: number, el:any): number {
    return el.index;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onCreate() {

    let employeeCopy = JSON.parse(JSON.stringify(this.employee))

    this.employees.push(employeeCopy)
    console.log(this.employees)
  }

  onUpdate(data: any, index: number) {

    this.employees[index] = data;

    console.log(this.employees[index])
  }

  onDelete(index: number) {
    this.employees.splice(index , 1);
  }

}
