import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllservicesService {
  private serviceDataUrl = '../../../assets/json/services/serviceCategory.json';
  private serviceSubCategoryDataUrl = '../../../assets/json/services/serviceSubCategory.json';

  constructor(private http: HttpClient) { }

  getServiceData(): Observable<any> {
    return this.http.get<any>(this.serviceDataUrl);
  }
  getSubServiceCategoryData(): Observable<any> {
    return this.http.get<any>(this.serviceSubCategoryDataUrl);
  }
}
