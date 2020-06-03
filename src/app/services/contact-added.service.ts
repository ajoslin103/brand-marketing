import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactAddedService {
  public newContact = new Subject<any>();

  emitNewContact(newContact: any) {
    this.newContact.next(newContact);
  }
}
