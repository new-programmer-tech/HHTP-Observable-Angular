import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  list:any;

  constructor(private api: EmployeeService) { }

  ngOnInit(): void {
  }

  getAllEmployee(){
    this.api.getEmployee().subscribe({
      next:(res:any)=> {
        console.log(res);
        this.list =res;
      },
      error:()=>{
        alert("Error while fetching data")
      }
    })
  }

}
