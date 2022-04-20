import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceServiceService } from '../invoice-service.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private invoiceService: InvoiceServiceService) { }
  no : number = 0; tax: number = 0; total_price:any = 0; total_price_taxed: any = 0;
  name: String = ''; surName: String = ''; company: String = ''; payment: String = ''; _id: String = ''; date: String = "";
  displayedColumns: string[] = ['product_id', 'name', 'category_name', 'price',"quantity", "total_price",  "action"];
  dataSource = new MatTableDataSource<any>();
  private dataArray: any[] = [];
  product: String = '';
  quant: number = 0;
  products: any[] = [{
    "id": 12,
    "name": "Sfinaria",
    "description": "chay",
    "price": 400,
    "ref": "29",
    "category_name": "food"
  },
  {
    "id": 50,
    "name": "sala9",
    "description": "chay",
    "price": 1500,
    "ref": "30",
    "category_name": "food"
  },
  {
    "id": 51,
    "name": "Kromb",
    "description": "chay",
    "price": 300,
    "ref": "33",
    "category_name": "food"
  },
  {
    "id": 33,
    "name": "Lo7",
    "description": "chay",
    "price": 800,
    "ref": "29",
    "category_name": "object"
  },
  {
    "id": 80,
    "name": "Ma3dnous",
    "description": "chay",
    "price": 100,
    "ref": "51",
    "category_name": "food"
  }]
  ngOnInit(): void {
    this.no = +this.route.snapshot.params['id'];
    this.invoiceService.getInvoiceDetails(this.no).subscribe((response: any) => {
      this.no = response.invoice.details.id
      this.name = response.invoice.details.name_client
      this.surName = response.invoice.details.surname_client
      this.company = response.invoice.details.entreprise_name
      this.payment = response.invoice.details.mode_payment
      this.tax = response.invoice.details.tax
      this._id = response.invoice.details._id
      this.date = response.invoice.details.creation_date
     
      response.invoice.productList.forEach((data: any) => {
        console.log(data);
        this.total_price += (data.product.price * data.quantity);
        this.total_price_taxed = this.total_price + ((this.total_price * response.invoice.details.tax)/100);
        this.dataArray.push({
          id: data.product_id,
          name: data.product.name,
          category_name: data.product.category_name,
          price: data.product.price,
          total_price: data.product.price * data.quantity,
          quantity: data.quantity
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
  deleteProductFromInvoice(product_id: number){
    this.invoiceService.deleteProduct(product_id,this.no).subscribe((data) =>{
      console.log(data);
      if (data.message == "remove data successfully") {
        console.log('here');
        
        this.dataArray.splice(this.dataArray.indexOf(this.dataArray.map((ele) => ele.id == product_id)[0]), 1);
        console.log(this.dataArray);
        this.dataSource = new MatTableDataSource(this.dataArray);
        this.dataSource.data = this.dataArray;
      }
    })
  }
  addProductToinvoice(){
    let arrayob: any[] = this.products.filter((data) => data.name == this.product)
    arrayob[0]['quantity'] = +this.quant
    this.invoiceService.productToInvoice(arrayob, this.no).subscribe((data) =>{
      this.invoiceService.getInvoiceDetails(this.no).subscribe((response: any) => {
        this.no = response.invoice.details.id
        this.name = response.invoice.details.name_client
        this.surName = response.invoice.details.surname_client
        this.company = response.invoice.details.entreprise_name
        this.payment = response.invoice.details.mode_payment
        this.tax = response.invoice.details.tax
        this._id = response.invoice.details._id
        this.date = response.invoice.details.creation_date
        this.dataArray = []
        response.invoice.productList.forEach((data: any) => {
          console.log(data);
          this.total_price += (data.product.price * data.quantity);
          this.total_price_taxed = this.total_price + ((this.total_price * response.invoice.details.tax)/100);
          this.dataArray.push({
            id: data.product_id,
            name: data.product.name,
            category_name: data.product.category_name,
            price: data.product.price,
            total_price: data.product.price * data.quantity,
            quantity: data.quantity
          })
        });
        this.dataSource = new MatTableDataSource(this.dataArray);
      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
        console.log(error)
      },
      () => {                                   //complete() callback
        console.error('Request completed')      //This is actually not needed 
      })
    })
  }
}
