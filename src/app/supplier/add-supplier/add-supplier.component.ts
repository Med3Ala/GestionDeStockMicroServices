import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {
  supplier: any = {
    id: 0,
    name: "",
    company: "",
    location: "",
    email: "",
    tel: 0,
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitTemplateBased(){
    
  }
}
