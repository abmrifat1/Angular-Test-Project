import { EmployeeService } from './../employee.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  title = "This is test templete";

  public name = "Rifat";
  public bill_to = "Bill to";
  public employees =[]
  // constructor(private _employeeService: EmployeeService) {}

  

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployess()
  }
}
