import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent {
  loaded:boolean=true;

  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
  }

}
