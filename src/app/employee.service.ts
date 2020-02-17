import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {}
    getEmployess(){
      return [
        {'id':5998,'name':'abm'},
        {'id':6001,'name':'ars'},
        {'id':4444,'name':'btn'}
      ]
    }
   
}
