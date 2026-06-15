import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { productDetail } from '../../models/productList.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  loaded:boolean=true;
  productName: string='';
  productDetail?:productDetail;

  constructor(private route: ActivatedRoute,private productService:ProductsService,
              private router:Router) {}



  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
    this. getActiveproductRoute();
  }

  getActiveproductRoute(){
    this.route.params.subscribe(params => {
      this.productName = params['productName'];
      this.getproductByName(this.productName)
    });
  }

  getproductByName(productName: string): void {
    this.loaded=true;
    this.productService.getProductDetailData().subscribe(data => {
    const productObject=data.products;
    this.productDetail = productObject.find((product:productDetail) => product.productDetailTitle === productName);
    this.loaded=false;
    if (!this.productDetail) {
      // Redirect to not found page
      this.router.navigateByUrl('page-not-found');
    }
    });
  }
  


}
