import { Component } from '@angular/core';

@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrls: ['./allservices.component.scss']
})
export class AllservicesComponent {
  loaded:boolean=true;

  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
   
  }
}
