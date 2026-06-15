import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustryPageComponent } from './components/industry-page/industry-page.component';
import { SharedModule } from '../shared/shared.module';
import { IndustrydetailsComponent } from './components/industry-details/industry-details.component';


@NgModule({
  declarations: [
    IndustryPageComponent,
    IndustrydetailsComponent
  ],
  imports: [
    CommonModule,
    IndustriesRoutingModule,
    SharedModule
  ]
})
export class IndustriesModule { }
