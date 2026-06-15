import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServices {
  private ContactDataUrl = '../../../assets/json/contact/ContactUs.json';

  constructor(private _http:HttpClient) { }

  getContact():Observable<any> {
    return this._http.get(this.ContactDataUrl)
  }


}
