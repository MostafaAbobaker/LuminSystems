import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private technologyListDataUrl = '../../../assets/json/technology/technologyList.json';
  private technologySetailDataUrl = '../../../assets/json/technology/technologyDetail.json';

  constructor(private http: HttpClient) { }

  getTechnologyListData(): Observable<any> {
    return this.http.get<any>(this.technologyListDataUrl);
  }

  getTechnologyDetailData(): Observable<any> {
    return this.http.get<any>(this.technologySetailDataUrl);
  }
}
