import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {
  employee: any = {
    id: 0,
    name: "",
    surname: "",
    salairy: 0,
    position: "",
    hiring_date: new Date(),
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitTemplateBased(){
    
  }
}
