import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ComingSoonComponent } from '../shared/components/coming-soon/coming-soon.component';
import { NotfoundComponent } from '../shared/components/notfound/notfound.component';
import { LeapComponent } from './components/leap/leap.component';
import { PartnersComponent } from './components/partners/partners.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AboutComponent } from './components/about/about.component';
import { NewsDetailComponent } from '../news/components/news-detail/news-detail.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './components/terms-condition/terms-condition.component';

const routes: Routes = [
  {path:'about-us',component:AboutComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'customers',component:CustomersComponent},
  {path:'leap',component:LeapComponent},
  {path:'partners',component:PartnersComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'terms-condition',component:TermsConditionComponent},
  {path:'coming-soon',component:ComingSoonComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
