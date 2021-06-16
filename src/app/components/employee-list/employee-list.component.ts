import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
 employeeList:Array<Employee>=new Array<Employee>();
 employeesFiltered:Array<Employee>=new Array<Employee>();

  constructor(private employeeService:EmployeesService) { }

loadEmployees(){
  this.employeeService.loadEmployeeData().
  subscribe(
    (res)=>{
      debugger;
      this.employeeList=res;
      this.employeesFiltered=res;
    });
}

  ngOnInit(): void {
    this.loadEmployees();
    }

  deleteEmployee(id:any){
  this.employeeService.deleteEmployee(id).subscribe(()=>alert('deleted sucessfully!'));
 // this.loadEmployees();
    let itemToDelete= this.employeeList.find(x=>x.Id==id);
   itemToDelete? this.employeeList.splice(this.employeeList.indexOf(itemToDelete),1):0;
   this.employeesFiltered=this.employeeList;

   }

   filterEmployees(){
    this.employeesFiltered=this.employeeList.filter(x=>x.EmployeeAge>30 && x.EmployeeSalary>200000);
   }

  }
