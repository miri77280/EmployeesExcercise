import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';

@Pipe({
  name: 'filterByAgeAndSalary'
})
export class FilterByAgeAndSalaryPipe implements PipeTransform {

  transform(value: Employee, ...args: Employee[]): boolean {
    return value.EmployeeAge>30 && value.EmployeeSalary>200000;
  }

}
