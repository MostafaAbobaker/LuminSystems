import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leap',
  templateUrl: './leap.component.html',
  styleUrls: ['./leap.component.scss']
})
export class LeapComponent implements OnInit{
  loaded:boolean=true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)

  }
}
