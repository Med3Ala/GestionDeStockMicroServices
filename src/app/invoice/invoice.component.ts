import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { InvoiceServiceService } from './invoice-service.service';

  export interface PeriodicElement {
    name_client: string;
    surname_client: string;
    id: number;
    entreprise_name: String;
    creation_date: String;
    mode_payment: String;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, name_client: 'Hydrogen', entreprise_name: 'bacaha', creation_date: 'new Date()', surname_client: 'hi',mode_payment: 'card'}
  ];
  
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'name_client', 'surname_client', "entreprise_name", "mode_payment", "action"];
  dataSource = new MatTableDataSource<PeriodicElement>();
  private dataArray: PeriodicElement[] = [];

  ngAfterViewInit() {
    //this.dataSource.data = ELEMENT_DATA;
  }
  
  constructor(private invoiceService: InvoiceServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getData()
  }
  clickEvent(ele: any){
    this.router.navigate(['/invoice/details/' + ele]);
  }
  getData(){
    this.invoiceService.getInvoices().subscribe((response: any) => {                           //next() callback
      console.log('response received')
      console.log(response)
      response.invoices.forEach((data: { id: any; creation_date: any; entreprise_name: any; mode_payment: any; name_client: any; surname_client: any; }) => {
        console.log(data);
        this.dataArray.push({
          id: data.id,
          creation_date: data.creation_date,
          entreprise_name: data.entreprise_name,
          mode_payment: data.mode_payment,
          name_client: data.name_client,
          surname_client: data.surname_client
        })
      });
      console.log(this.dataArray)
      this.dataSource = new MatTableDataSource(this.dataArray);
    },
    (error) => {                              //error() callback
      console.error('Request failed with error')
      console.log(error)
    },
    () => {                                   //complete() callback
      console.error('Request completed')      //This is actually not needed 
    })
  }
  deleteInvoice(id: number){
    this.invoiceService.deleteInvoice(id).subscribe((data) =>{
      console.log(data);
      if(data == "Deleted successfully"){
        this.dataArray = []
        this.getData()
      }
        
    })
  }
}