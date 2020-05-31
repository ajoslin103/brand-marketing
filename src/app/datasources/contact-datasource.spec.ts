import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ContactDataSource } from './contact-datasource';

const SAMPLE_DATA = [
  {
    _id: '5de91c005b98615393e74931',
    index: 0,
    firstName: 'Browning',
    lastName: 'Graham',
    company: 'MELBACOR',
    email: 'browninggraham@melbacor.com',
    phone: '+1 (906) 585-2525',
    address: '920 Hastings Street, Roosevelt, Puerto Rico, 5573',
  },
  {
    _id: '5de91c00d6b4d04e96ef44da',
    index: 1,
    firstName: 'Mcmahon',
    lastName: 'Fulton',
    company: 'ILLUMITY',
    email: 'mcmahonfulton@illumity.com',
    phone: '+1 (814) 489-3373',
    address: '676 Bainbridge Street, Abrams, Mississippi, 2652',
  },
];

describe('ContactDataSource', () => {
  let datasource: ContactDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    datasource = new ContactDataSource([]);
  });

  it('should be created', () => {
    expect(datasource).toBeTruthy();
  });

  // it('should have a private method: getPagedData', () => {
  //   expect(datasource.getPagedData).toBeFalsy();
  // });

  // it('should have a private method: getSortedData', () => {
  //   expect(datasource.getSortedData).toBeFalsy();
  // });

  it('should have a method: connect', () => {
    expect(typeof datasource.connect === 'function').toBeTrue();
  });

  it('should have a method: disconnect', () => {
    expect(typeof datasource.disconnect === 'function').toBeTrue();
  });

  // it('should have a function: compare', () => {
  //   expect(typeof datasource.compare === 'function').toBeTrue();
  // });
});
