import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productListDataUrl = '../../../assets/json/products/productsList.json';
  private productSetailDataUrl = '../../../assets/json/products/productDetail.json';

  constructor(private http: HttpClient) { }

  getProductListData(): Observable<any> {
    return this.http.get<any>(this.productListDataUrl);
  }

  getProductDetailData(): Observable<any> {
    return this.http.get<any>(this.productSetailDataUrl);
  }

}
