import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit{
  loaded:boolean=true;
  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
  }
}
