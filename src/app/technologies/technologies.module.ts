import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologiesRoutingModule } from './technologies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TechnologyPageComponent } from './components/technology-page/technology-page.component';
import { TechnologyDetailComponent } from './components/technology-detail/technology-detail.component';


@NgModule({
  declarations: [
    TechnologyPageComponent,
    TechnologyDetailComponent
  ],
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    SharedModule
  ]
})
export class TechnologiesModule { }
