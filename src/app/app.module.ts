import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MatTableModule } from '@angular/material/table';
import { InvoiceDetailsComponent } from './invoice/invoice-details/invoice-details.component'  
import { HttpClientModule } from '@angular/common/http';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { MatSelectModule } from '@angular/material/select';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeesComponent } from './employees/add-employees/add-employees.component';
import { MatNativeDateModule } from '@angular/material/core';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    InvoiceComponent,
    InvoiceDetailsComponent,
    AddInvoiceComponent,
    EmployeesComponent,
    AddEmployeesComponent,
    EmployeeDetailComponent,
    SupplierComponent,
    AddSupplierComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
