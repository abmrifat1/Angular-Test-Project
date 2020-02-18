import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IEmployee } from "./employee";
import { Observable } from "rxjs";
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) {}

  //  http request and model
  // getEmployess(): Observable<IEmployee[]> {
  //   return this.http.get<IEmployee[]>(this._url);
   
  // }

  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message || "Serber Error");
  // }

  // service
  getEmployess(){
    return [
      {'id':5998,'name':'abm'},
      {'id':6001,'name':'ars'},
      {'id':4444,'name':'btn'}
    ]
  }
}
