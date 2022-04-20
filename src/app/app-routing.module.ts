import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { InvoiceDetailsComponent } from './invoice/invoice-details/invoice-details.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'invoice', component: InvoiceComponent},
    { path: 'invoice/details/:id', component: InvoiceDetailsComponent},
    { path: 'invoice/add', component: AddInvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
