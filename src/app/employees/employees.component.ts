import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

const ELEMENT_DATA: any[] = [
  {id: 1, name_client: 'mrad', entreprise_name: 'OGH', creation_date: new Date(), surname_client: 'adnen',mode_payment: '2500'}
];

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'name_client', 'surname_client', "entreprise_name", "mode_payment", "action"];
  dataSource = new MatTableDataSource<any>();
  private dataArray: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA)
  }
  deleteEmployee(id:any){

  }
}
