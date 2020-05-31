import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should have a private field: serviceUrl', () => {
  //   expect(service.serviceUrl).toBeFalsy();
  // });

  it('should have a method: getServiceUrl', () => {
    expect(typeof service.getServiceUrl === 'function').toBeTrue();
  });

  it('should have a function: getContactRecordObservable', () => {
    expect(typeof service.getContactRecordObservable === 'function').toBeTrue();
  });
});
