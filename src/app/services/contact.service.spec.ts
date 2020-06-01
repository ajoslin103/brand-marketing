import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let injector: Injector;
  let contactService: ContactService;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      providers: [ContactService],
      imports: [HttpClientModule],
    });

    contactService = injector.get(ContactService);
  });

  it('should pull data', (done: DoneFn) => {
    contactService.getContactRecordObservable().subscribe((data) => {
      expect(data).toBeInstanceOf(Array);
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

  // TODO: if I have time I'll mock the http and test failed data url
});
