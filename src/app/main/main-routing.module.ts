import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from '../shared/components/notfound/notfound.component';
import { ComingSoonComponent } from '../shared/components/coming-soon/coming-soon.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'**',component:NotfoundComponent,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
