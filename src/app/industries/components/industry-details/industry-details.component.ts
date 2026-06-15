import { Component } from '@angular/core';
import { IndustriesService } from '../../services/industries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { industryDetail } from '../../models/industriesList.nodel';

@Component({
  selector: 'app-industry-details',
  templateUrl: './industry-details.component.html',
  styleUrls: ['./industry-details.component.scss']
})
export class IndustrydetailsComponent {
  loaded:boolean=true;
  industryName: string='';
  industryDetail?:industryDetail;

  constructor(private route: ActivatedRoute,private industryService:IndustriesService,
              private router: Router) {}



  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
    this. getActiveindustryRoute();
  }

  getActiveindustryRoute(){
    this.route.params.subscribe(params => {
      this.industryName = params['industryName'];
      this.getindustryByName(this.industryName)
    });
  }

  getindustryByName(industryName: string): void {
    this.loaded=true;
    this.industryService.getIndustryDetailData().subscribe(data => {
    const industryObject=data.industries;
    this.industryDetail = industryObject.find((industry:industryDetail) => industry.industryDetailTitle === industryName);
    this.loaded=false;
    if (!this.industryDetail) {
      // Redirect to not found page
      this.router.navigateByUrl('page-not-found');
    }
    });
  }
}
