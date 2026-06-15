import { Component } from '@angular/core';
import { newsList } from '../../models/news.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  loaded:boolean=true;
  newsList?: newsList[];


  constructor(private route: ActivatedRoute,
              private newsService:NewsService,
              private router:Router) {}


  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
    this.getnewsList();

  }


  getnewsList(): void {
    this.loaded=true;
    this.newsService.getnewsListData().subscribe((data:any) => {
    this.newsList=data.news;
    this.loaded=false;
    });
  }

  openURL(event:Event,module:string,url:string){
    event.stopPropagation();
    this.router.navigate(['/'+module+'/'+url]);
  }

}
