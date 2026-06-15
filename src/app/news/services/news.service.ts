import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsListDataUrl = '../../../assets/json/news/newsList.json';

  constructor(private http: HttpClient) { }

  getnewsListData(): Observable<any> {
    return this.http.get<any>(this.newsListDataUrl);
  }

}
