import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AllservicesComponent } from '../services/components/all-services/allservices.component';
import { ServiceCategoryComponent } from '../services/components/service-category/service-category.component';
import { ServiceSubCategoryComponent } from '../services/components/service-sub-category/service-sub-category.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AllservicesComponent,
    ServiceCategoryComponent,
    ServiceSubCategoryComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FormsModule

  ]
})
export class MainModule { }
