import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string= "/assets/data/employees.json"

  constructor(private http: HttpClient) {}
 
//  http request and model
  getEmployess(){
    return this.http.get<IEmployee[]>(this._url);
  }

  // service
    // getEmployess(){
    //   return [
    //     {'id':5998,'name':'abm'},
    //     {'id':6001,'name':'ars'},
    //     {'id':4444,'name':'btn'}
    //   ]
    // }
   
}
 