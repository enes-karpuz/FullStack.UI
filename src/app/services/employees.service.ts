import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  readonly baseApiUrl = 'https://localhost:7016/api/employees';

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl);
  }

  addEmployee(addEmployeeRequest : Employee){
    addEmployeeRequest.id='0000000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl , addEmployeeRequest);
  }

  getEmployee(id : string): Observable<Employee>{
   return this.http.get<Employee>(this.baseApiUrl + id);
  }

  updateEmployee(id : string , updateEmployeeRequest : Employee) : Observable<Employee>{
   return this.http.put<Employee>(this.baseApiUrl + id, updateEmployeeRequest);
  }
  deleteEmployee(id : string) : Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + id);
  }
}
