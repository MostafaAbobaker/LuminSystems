import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllservicesService } from 'src/app/services/services/allservices.service';
import { serviceSubCategory } from '../../models/serviceSubCategory.model';

@Component({
  selector: 'app-service-sub-category',
  templateUrl: './service-sub-category.component.html',
  styleUrls: ['./service-sub-category.component.scss']
})
export class ServiceSubCategoryComponent {
  loaded:boolean=true;
  serviceName: string='';
  serviceSubCategoryName: string='';
  serviceSubCategory: serviceSubCategory | undefined;

  constructor(private route: ActivatedRoute,private serviceDataService:AllservicesService,private router:Router) {}



  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
    this. getActiveServiceRoute();
  }

  getActiveServiceRoute(){
    this.route.params.subscribe(params => {
      this.serviceName = params['serviceCategoryName'];
      this.serviceSubCategoryName = params['serviceSubCategoryName'];;
      this.getServiceCategoryByName(this.serviceSubCategoryName)

    });
  }

  getServiceCategoryByName(serviceSubCategoryName: string): void {
    this.serviceDataService.getSubServiceCategoryData().subscribe(data => {
    const serviceObject=data.services;
    this.serviceSubCategory = serviceObject.find((subCategory:serviceSubCategory) => subCategory.serviceSubCategoryTitle === serviceSubCategoryName);
    if (!this.serviceSubCategory) {
      // Redirect to not found page
      this.router.navigateByUrl('page-not-found');
    }    
  });
  }

}
