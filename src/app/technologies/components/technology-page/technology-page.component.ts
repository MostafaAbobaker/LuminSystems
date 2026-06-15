import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../../services/technology.service';
import { technologyList } from '../../models/technologyList.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-technology-page',
  templateUrl: './technology-page.component.html',
  styleUrls: ['./technology-page.component.scss']
})
export class TechnologyPageComponent implements OnInit{
  loaded:boolean=true;
  TechnologyList?: technologyList[];

  constructor(private route: ActivatedRoute,
              private technologyService:TechnologyService,
              private router:Router) {}

  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
    this.getTechnologyList();
  }



  getTechnologyList(): void {
    this.loaded=true;
    this.technologyService.getTechnologyListData().subscribe(data => {
    this.TechnologyList=data.technologies;
    this.loaded=false;
    });
  }

  openURL(event:Event,module:string,url:string){
    event.stopPropagation();
    this.router.navigate(['/'+module+'/'+url]);
  }
}
