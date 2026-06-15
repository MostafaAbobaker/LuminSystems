import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyPageComponent } from './components/technology-page/technology-page.component';
import { TechnologyDetailComponent } from './components/technology-detail/technology-detail.component';

const routes: Routes = [
  {path:'',component:TechnologyPageComponent},
  {path:':technologyCategoryName',component:TechnologyDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
