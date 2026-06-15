import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit{
  loaded:boolean=true;

  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
  }

}
