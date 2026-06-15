import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';
import { IndustriesModule } from './industries/industries.module';
import { ProductsModule } from './products/products.module';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { CarearsModule } from './carears/carears.module';
import { BlogModule } from './blog/blog.module';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    MainModule,
    ServicesModule,
    IndustriesModule,
    ProductsModule,
    FormsModule,
    PagesModule,
    CarearsModule,
    BlogModule,
    NgxGoogleAnalyticsModule.forRoot('G-36JYENF3M4'),
    NgxGoogleAnalyticsRouterModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
