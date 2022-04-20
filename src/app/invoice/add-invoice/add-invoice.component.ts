import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceServiceService } from '../invoice-service.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {
  clients: any = [{
    id: 0,
    name: "Bouhajja",
    surname: "Alaeddine",
    entreprise: "Ala's group",
    tel: "+2153655694",
    email: "ala@gmail.com",
    location: "here",
    sex: 'homme'
  },{
    id: 1,
    name: "Mohammed",
    surname: "Ala",
    entreprise: "Galaxy group",
    tel: "+2153655693",
    email: "ala_new@gmail.com",
    location: "here",
    sex: 'homme'
  },{
    id: 2,
    name: "mana3rafich",
    surname: "Chiraz",
    entreprise: "Chiraz beauty",
    tel: "+2153655695",
    email: "chiraz@gmail.com",
    location: "here",
    sex: 'famme'
  },
  ]
  client: any = {
    id: 0,
    name: "",
    surname: "",
    tel: '',
    entreprise: "",
    email: "",
    location: "",
    sex: ''
  }
  tax:any=0;
  methode: String ="";
  array: any;
  constructor(private invoiceService: InvoiceServiceService,private route: Router) { }

  ngOnInit(): void {
  }

  onSubmitTemplateBased(){
    this.invoiceService.addInvoice(this.array, this.tax, this.methode).subscribe((data) =>{
      if(data.status == 200)
      this.route.navigate(['/invoice'])
    })
  }

  changeClient(val: any){
    this.array = this.clients.filter((data: any) => data.surname == val)[0];
    this.client.name = this.array.name;
    this.client.surname = this.array.surname;
    this.client.entreprise = this.array.entreprise;
    this.client.email = this.array.email;
    this.client.tel = this.array.tel;
    this.client.location = this.array.location;
    this.client.sex = this.array.sex;
  }
}
