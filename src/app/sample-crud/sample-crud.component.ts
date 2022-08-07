import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-sample-crud',
  templateUrl: './sample-crud.component.html',
  styleUrls: ['./sample-crud.component.css'],
  providers: [EmployeeService]
})
export class SampleCrudComponent implements OnInit, OnDestroy {

  employees: Employee[] = [];

  employee: Employee = {
    name: '',
    idNo: 0,
    job: ''
  };

  trackByMethod(index: number, el:any): number {
    return el.index;
  }

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });

  }

  onCreate() {

    let employeeCopy = JSON.parse(JSON.stringify(this.employee))

    this.employeeService.postEmployees(employeeCopy).subscribe(employees => {
      this.employees.push(employees);
    });

  }

  onUpdate(data: any, index: number) {


    this.employeeService.putEmployees(this.employees[index]).subscribe(employees => {
      this.employees[index] = data;
    });
  }

  onDelete(index: number, data: any) {
    this.employees.splice(index , 1);

    this.employeeService.deleteEmployee(data.idNo).subscribe(employees => {
      this.employees.splice(index , 1);
    });
  }

  ngOnDestroy(): void {
    
  }

}
