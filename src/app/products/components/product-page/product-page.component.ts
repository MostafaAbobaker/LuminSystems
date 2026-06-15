import { Component, OnInit } from '@angular/core';
import { productList } from '../../models/productList.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { serviceCategory } from 'src/app/services/models/serviceCategory.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{
  loaded:boolean=true;
  productName: string='';
  productList?: productList[];

  constructor(private route: ActivatedRoute,
              private productDataService:ProductsService,
              private router:Router) {}

  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
    this.getProductList();
  }


  getProductList(): void {
    this.loaded=true;
    this.productDataService.getProductListData().subscribe(data => {
    this.productList=data.products;
    this.loaded=false;
    });
  }

  openURL(event:Event,module:string,url:string){
    event.stopPropagation();
    this.router.navigate(['/'+module+'/'+url]);
  }


}
