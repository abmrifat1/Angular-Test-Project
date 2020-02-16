import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"]
})
export class InvoiceComponent implements OnInit {
  constructor() {}

  @Input() public nameOfApp;
  @Output() public childData = new EventEmitter();

  public sms="";
  public name=""
  public hasError = true;
  public displayCondition=false;
  public switchColor='blue';
  public fruits=['mango','apple','banana','orange']
  public successText = "text_success";
  public specialText = true;
  public messageClass = {
    text_success: !this.hasError,
    text_danger: this.hasError,
    text_special: this.specialText
  };

  public multyStyle = {
    color: "yellow",
    fontStyle: "italic"
  };
  ngOnInit(): void {}
  getsms(event) {
    this.sms="hi btn click"
    console.log("hi here!!!!");
    console.log("all event",event);
  }
  mainFeild (value){
    this.name=value;
    console.log(value)
  }
  getMathResult(num1,num2){
    return num1+num2;
  }
  fireEvent(){
    this.childData.emit("hey,this comes from child component")
  }
}
