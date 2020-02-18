import { Observable } from "rxjs";
import { IEmployee } from "./employee";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import "rxjs/add/operator/catch";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) {}

  //  http request and model
  getEmployess(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {}

  // service
  // getEmployess(){
  //   return [
  //     {'id':5998,'name':'abm'},
  //     {'id':6001,'name':'ars'},
  //     {'id':4444,'name':'btn'}
  //   ]
  // }
}
