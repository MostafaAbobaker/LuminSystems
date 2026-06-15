import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  loaded:boolean=true;

  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
  }
}
