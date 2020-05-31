import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';

import { ContactDataSource } from './contact-datasource';
import { ContactRecord } from '../models/contact';

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
  let datasource = new ContactDataSource(SAMPLE_DATA);
  // datasource.paginator = new MatPaginator(
  //   MatPaginatorIntl,
  //   ChangeDetectorRef,
  //   MatPaginatorDefaultOptions
  // );
  // datasource.sort = new MatSort();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    datasource = new ContactDataSource([]);
  });

  it('should be created', () => {
    expect(datasource).toBeTruthy();
  });

  it('should have a [was private] method: getPagedData', () => {
    expect(typeof datasource.getPagedData === 'function').toBeTrue();
  });

  it('should have a [was private] method: getSortedData', () => {
    expect(typeof datasource.getSortedData === 'function').toBeTrue();
  });

  it('should have a method: connect', () => {
    expect(typeof datasource.connect === 'function').toBeTrue();
  });

  it('should have a method: disconnect', () => {
    expect(typeof datasource.disconnect === 'function').toBeTrue();
  });

  it('should have a function: compare', () => {
    expect(typeof datasource.compare === 'function').toBeTrue();
  });

  it('should compare a to b', () => {
    expect(datasource.compare('a', 'b', true)).toBe(-1);
  });

  it('should compare 1 to 2', () => {
    expect(datasource.compare(1, 2, true)).toBe(-1);
  });

  // it('should getPagedData', () => {
  //   datasource.paginator.pageSize = 10;
  //   datasource.paginator.pageIndex = 0;
  //   expect(datasource.getPagedData(SAMPLE_DATA)).toBeUndefined();
  // });

  // it('should getSortedData', () => {
  //   expect(datasource.getSortedData(SAMPLE_DATA)).toBeUndefined();
  // });
});
