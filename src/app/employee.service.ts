import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = "../assets/data/employee.json";

  constructor(private http:HttpClient) { 
  }

  getEmployee(){
    return this.http.get(this._url);
  }
}
