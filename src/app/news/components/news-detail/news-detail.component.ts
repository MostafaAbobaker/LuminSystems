import { Component } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent {
  loaded:boolean=true;
  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
  }
}
