import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogListDataUrl = '../../../assets/json/blog/blogList.json';
  private blogSetailDataUrl = '../../../assets/json/blog/blogDetail.json';

  constructor(private http: HttpClient) { }

  getblogListData(): Observable<any> {
    return this.http.get<any>(this.blogListDataUrl);
  }

  getblogDetailData(): Observable<any> {
    return this.http.get<any>(this.blogSetailDataUrl);
  }

}
