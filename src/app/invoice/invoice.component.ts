import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"]
})
export class InvoiceComponent implements OnInit {
  constructor() {}

  public sms="";
  public hasError = true;
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
}
