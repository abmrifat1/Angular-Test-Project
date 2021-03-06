import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InvoiceComponent } from './invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InvoiceComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
