import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blogList } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
  loaded:boolean=true;
  blogList?: blogList[];


  constructor(private route: ActivatedRoute,
              private blogService:BlogService,
              private router:Router) {}


  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
    this.getblogList();

  }


  getblogList(): void {
    this.loaded=true;
    this.blogService.getblogListData().subscribe(data => {
    this.blogList=data.blogs;
    this.loaded=false;
    });
  }

  openURL(event:Event,module:string,url:string){
    event.stopPropagation();
    this.router.navigate(['/'+module+'/'+url]);
  }


}
