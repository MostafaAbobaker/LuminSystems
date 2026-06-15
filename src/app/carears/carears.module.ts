import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarearsRoutingModule } from './carears-routing.module';
import { CarearMainPageComponent } from './components/carear-main-page/carear-main-page.component';
import { SharedModule } from '../shared/shared.module';
import { ExploreJobsComponent } from './components/explore-jobs/explore-jobs.component';
import { ApplyForJopComponent } from './components/apply-for-jop/apply-for-jop.component';
import { DayCountPipe } from '../shared/pipes/day-count.pipe';
import { MonthNamePipe } from '../shared/pipes/month-name.pipe';
import { TextTruncatePipe } from '../shared/pipes/text-truncate.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MainSectionComponent } from './components/carear-main-page/shared-career-main-page/main-section/main-section.component';
import { CoreValueComponent } from './components/carear-main-page/shared-career-main-page/core-value/core-value.component';
import { GetInvolvedComponent } from './components/carear-main-page/shared-career-main-page/get-involved/get-involved.component';


@NgModule({
  declarations: [
    CarearMainPageComponent,
    ExploreJobsComponent,
    ApplyForJopComponent,
    MainSectionComponent,
    CoreValueComponent,
    GetInvolvedComponent

  ],
  imports: [
    CommonModule,
    CarearsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  
  ]
})
export class CarearsModule { }
