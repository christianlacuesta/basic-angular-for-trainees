import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Employee } from "./employee.model";

const apiUrl = environment.apiUrl + 'employee/';
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({providedIn: 'root'}) 
export class EmployeeService {

    constructor(private http: HttpClient) { }
    

    getEmployees(): Observable<Employee[]> {
        return this.http.post<any>(apiUrl + 'employee', [], {headers});
    }

    postEmployees(employee: Employee): Observable<Employee> {
        return this.http.post<any>(apiUrl + 'employee/create', employee, {headers});
    }

    putEmployees(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(apiUrl + 'employee/' + employee.idNo, employee, {headers});
    }

    deleteEmployee(idNo: number): Observable<Employee> {
        return this.http.delete<Employee>(apiUrl + 'employee/' + idNo);
      }

}