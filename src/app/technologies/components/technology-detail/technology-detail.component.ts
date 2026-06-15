import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { technologyDetail } from '../../models/technologyList.model';
import { TechnologyService } from '../../services/technology.service';

@Component({
  selector: 'app-technology-detail',
  templateUrl: './technology-detail.component.html',
  styleUrls: ['./technology-detail.component.scss']
})
export class TechnologyDetailComponent {
  loaded:boolean=true;
  technologyName: string='';
  technologyDetail?:technologyDetail;

  constructor(private route: ActivatedRoute,private technologyService:TechnologyService,private router:Router) {}



  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
    this. getActivetechnologyRoute();
  }

  getActivetechnologyRoute(){

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.technologyName = params.get('technologyCategoryName')?.replace(/-/g, ' ') !!;
      console.log(this.technologyName)
      this.gettechnologyByName(this.technologyName)

    });
  }


  gettechnologyByName(technologyName: string): void {
    this.loaded=true;
    this.technologyService.getTechnologyDetailData().subscribe(data => {
    const technologyObject=data.technologies;
    this.technologyDetail = technologyObject.find((technology:technologyDetail) => technology.technologyDetailTitle === technologyName);
    this.loaded=false;
    if (!this.technologyDetail) {
      // Redirect to not found page
      this.router.navigateByUrl('page-not-found');
    } 
    });
  }
  
}
