import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AddEmployeesComponent } from './employees/add-employees/add-employees.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { InvoiceDetailsComponent } from './invoice/invoice-details/invoice-details.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
    { path: 'Auth', component: AuthComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'invoice', component: InvoiceComponent},
    { path: 'invoice/details/:id', component: InvoiceDetailsComponent},
    { path: 'invoice/add', component: AddInvoiceComponent},
    { path: 'employees', component: EmployeesComponent},
    { path: 'employees/add', component: AddEmployeesComponent},
    { path: 'employees/details/:id', component: EmployeeDetailComponent},
    { path: 'supplier', component: SupplierComponent},
    { path: 'supplier/add', component: AddSupplierComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
