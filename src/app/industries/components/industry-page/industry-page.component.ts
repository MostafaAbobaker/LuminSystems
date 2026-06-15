import { Component, OnInit } from '@angular/core';
import { industryList } from '../../models/industriesList.nodel';
import { IndustriesService } from '../../services/industries.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-industry-page',
  templateUrl: './industry-page.component.html',
  styleUrls: ['./industry-page.component.scss']
})
export class IndustryPageComponent implements OnInit{
  loaded:boolean=true;
  industryName: string='';
  industryList?: industryList[];

  constructor(private route: ActivatedRoute,
              private industryDataService:IndustriesService,
              private router:Router) {}

  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
    this.getindustryList();
  }


  getindustryList(): void {
    this.loaded=true;
    this.industryDataService.getIndustryListData().subscribe(data => {
    this.industryList=data.industries;
    this.loaded=false;
    });
  }

  openURL(event:Event,module:string,url:string){
    event.stopPropagation();
    this.router.navigate(['/'+module+'/'+url]);
  }

}
