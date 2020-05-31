import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ContactRecord } from '../models/contact';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // private serviceUrl = 'http://demo5838836.mockable.io/contact';
  private serviceUrl = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {}

  getServiceUrl = () => this.serviceUrl;

  getContactRecordObservable(): Observable<ContactRecord[]> {
    return this.http.get<ContactRecord[]>(this.serviceUrl);
  }
}
