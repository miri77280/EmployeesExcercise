import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
EmployeesList:Array<Employee>=new Array<Employee>();
  constructor(private http: HttpClient) { }

  loadEmployeeData():Observable<Array<Employee>>{
   return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees').pipe(
    map(x => x.data.map((y: { id: any; employee_name: any; employee_age: any; employee_salary: any; }) => <Employee>{Id: y.id, EmployeeName: y.employee_name, EmployeeAge: y.employee_age,EmployeeSalary:y.employee_salary}))
  );
}

deleteEmployee(id:number):Observable<any>{
  
 return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/'+id);
  
}

}
