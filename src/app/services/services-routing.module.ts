import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllservicesComponent } from './components/all-services/allservices.component';
import { ServiceCategoryComponent } from './components/service-category/service-category.component';
import { ServiceSubCategoryComponent } from './components/service-sub-category/service-sub-category.component';
import { NotfoundComponent } from '../shared/components/notfound/notfound.component';

const routes: Routes = [
  {path:'',component:AllservicesComponent },
  {path:':serviceCategoryName/:serviceSubCategoryName',component:ServiceSubCategoryComponent},
  {path:':serviceCategoryName',component:ServiceCategoryComponent},
  {path:'**',component:NotfoundComponent,pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
