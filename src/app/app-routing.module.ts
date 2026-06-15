import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' }, 
  {path:'home',component:LayoutComponent,loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path:'services',component:LayoutComponent,loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)},
  {path:'products',component:LayoutComponent,loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path:'industries',component:LayoutComponent,loadChildren: () => import('./industries/industries.module').then(m => m.IndustriesModule)},
  {path:'technologies',component:LayoutComponent,loadChildren: () => import('./technologies/technologies.module').then(m => m.TechnologiesModule)},
   {path:'careers',component:LayoutComponent,loadChildren: () => import('./carears/carears.module').then(m => m.CarearsModule)},
  // {path:'blogs',component:LayoutComponent,loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
  {path:'news',component:LayoutComponent,loadChildren: () => import('./news/news.module').then(m => m.NewsModule)},
  {path:'',component:LayoutComponent,loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' ,useHash: true })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
