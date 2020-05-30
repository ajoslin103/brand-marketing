import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ContactRecord } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private serviceUrl = 'http://demo5838836.mockable.io/contact';

  constructor(private http: HttpClient) {}

  getContactsTableItem(): Observable<ContactRecord[]> {
    return this.http.get<ContactRecord[]>(this.serviceUrl);
  }
}
