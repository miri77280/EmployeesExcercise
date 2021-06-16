import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Input()
 employee:Employee=new Employee();
 
 @Output()
 deleteEmployee=new EventEmitter<number>();
 
  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
  }

  onClickEvent(id:number){
    debugger;
    this.deleteEmployee.emit(id);
  }
 
}
