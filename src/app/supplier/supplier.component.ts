import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
const ELEMENT_DATA: any[] = [
  {id: 1, name: 'mrad', company: 'OGH', email: 'ala@gmail.com', location: 'lahna', tel: '25655785'}
];
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'name', 'company', "location", "tel", "action"];
  dataSource = new MatTableDataSource<any>();
  private dataArray: any[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA)
  }
  deleteInvoice(id: number){

  }
  clickEvent(ele: any){
    this.router.navigate(['/invoice/details/' + ele]);
  }
}
