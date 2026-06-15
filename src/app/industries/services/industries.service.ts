import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndustriesService {

  private industryListDataUrl = '../../../assets/json/industries/industryList.json';
  private industryDetailDataUrl = '../../../assets/json/industries/industryDetail.json';

  constructor(private http: HttpClient) { }

  getIndustryListData(): Observable<any> {
    return this.http.get<any>(this.industryListDataUrl);
  }

  getIndustryDetailData(): Observable<any> {
    return this.http.get<any>(this.industryDetailDataUrl);
  }

}
