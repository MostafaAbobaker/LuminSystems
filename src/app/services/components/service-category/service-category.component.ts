import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { serviceCategory, serviceSubCategory } from 'src/app/services/models/serviceCategory.model';
import { AllservicesService } from 'src/app/services/services/allservices.service';

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.scss']
})
export class ServiceCategoryComponent {
  loaded:boolean=true;
  serviceName: string='';
  serviceCategory: serviceCategory | undefined;

  constructor(private route: ActivatedRoute,private serviceDataService:AllservicesService,
              private router:Router) {}

  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
    this.getActiveServiceRoute();   
  }
  getActiveServiceRoute(){
    this.route.params.subscribe(params => {
      this.serviceName = params['serviceCategoryName'];
      this.getServiceCategoryByName(this.serviceName)
    });
  }

  getServiceCategoryByName(serviceName: string): void {
    this.serviceDataService.getServiceData().subscribe(data => {
    const serviceObject=data.services;
    this.serviceCategory = serviceObject.find((category:serviceCategory) => category.serviceCategoryTitle === serviceName);
    if (!this.serviceCategory) {
      // Redirect to not found page
      this.router.navigateByUrl('page-not-found');
    }
    });
  }
}
