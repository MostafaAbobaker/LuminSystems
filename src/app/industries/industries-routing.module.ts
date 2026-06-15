import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustryPageComponent } from './components/industry-page/industry-page.component';
import { IndustrydetailsComponent } from './components/industry-details/industry-details.component';

const routes: Routes = [
  {path:'',component:IndustryPageComponent},
  {path:':industryName',component:IndustrydetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }
