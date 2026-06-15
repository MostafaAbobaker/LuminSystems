import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LeapComponent } from './components/leap/leap.component';
import { AboutComponent } from './components/about/about.component';
import { PartnersComponent } from './components/partners/partners.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NewsDetailComponent } from '../news/components/news-detail/news-detail.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './components/terms-condition/terms-condition.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    LeapComponent,
    AboutComponent,
    PartnersComponent,
    CustomersComponent,
    NewsDetailComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
