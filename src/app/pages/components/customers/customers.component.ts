import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit{
  loaded:boolean=true;

  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
  }
}
