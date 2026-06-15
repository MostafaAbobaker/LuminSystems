import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { TextTruncatePipe } from './pipes/text-truncate.pipe';  
import { MonthNamePipe } from './pipes/month-name.pipe';
import { DayCountPipe } from './pipes/day-count.pipe';
import { FormatDatePipe } from './pipes/form-date.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    LoaderComponent,
    PageHeaderComponent,
    NotfoundComponent,
    ComingSoonComponent,
    TextTruncatePipe,
    MonthNamePipe,
    DayCountPipe,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports:[   
    LoaderComponent,
    PageHeaderComponent,
    TextTruncatePipe,
    MonthNamePipe,
    DayCountPipe,
    FormatDatePipe
  ]
})
export class SharedModule { }
