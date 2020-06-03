import { TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { Subscription } from 'rxjs';

import { ContactAddedService } from './contact-added.service';

describe('ContactAddedService', () => {
  let injector: Injector;
  let subscription: Subscription;
  let serviceToTest: ContactAddedService;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      providers: [ContactAddedService],
    });

    serviceToTest = injector.get(ContactAddedService);
  });

  it('should pass data', (done: DoneFn) => {
    subscription = serviceToTest.newContact.subscribe(
      (newContact) => {
        expect(newContact).toEqual({ test: 'data' });
        expect(newContact).not.toEqual('invalid');
        done();
      }
    );

    serviceToTest.emitNewContact({ test: 'data' });
  });
});
