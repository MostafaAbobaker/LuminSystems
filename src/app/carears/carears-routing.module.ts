import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarearMainPageComponent } from './components/carear-main-page/carear-main-page.component';
import { ExploreJobsComponent } from './components/explore-jobs/explore-jobs.component';
import { ApplyForJopComponent } from './components/apply-for-jop/apply-for-jop.component';

const routes: Routes = [
  {path:'',component:CarearMainPageComponent},
  {path:'explore-jobs',component:ExploreJobsComponent},
  {path:'apply-for-job',component:ApplyForJopComponent},
  { path: 'apply-for-job/:id', component: ApplyForJopComponent } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarearsRoutingModule { }
