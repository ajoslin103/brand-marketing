import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ContactRecord } from '../models/contact';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  serviceUrl = environment.contactListUrl;

  constructor(private http: HttpClient) {}

  getServiceUrl = () => this.serviceUrl;

  getContactRecordObservable(): Observable<ContactRecord[]> {
    return this.http.get<ContactRecord[]>(this.serviceUrl);
  }
}
