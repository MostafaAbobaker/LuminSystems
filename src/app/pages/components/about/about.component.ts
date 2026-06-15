import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  loaded:boolean=true;

  constructor(private router:Router) {}

  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)

  }
  openURL(event:Event,module:string,url:string){
    event.stopPropagation();
    this.router.navigate(['/'+module+'/'+url]);
  }

}

