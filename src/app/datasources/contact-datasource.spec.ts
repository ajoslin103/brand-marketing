import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTable } from '@angular/material/table';
import { Injector } from '@angular/core';

import { ContactDataSource } from './contact-datasource';
import { ContactService } from '../services/contact.service';

describe('ContactDataSource', () => {
  let injector: Injector;
  let dataSource: ContactDataSource;

  beforeEach(async(() => {
    injector = TestBed.configureTestingModule({
      providers: [ContactService],
      imports: [HttpClientModule],
    });
    dataSource = injector.get(ContactDataSource);
  }));

  it('should be created', () => {
    expect(dataSource).toBeTruthy();
  });

  // TODO: using the datasource will be tested in the ContactsTableComponent
  // as it needs connection to a MatTable, MatPaginator, and MatSort
  // before it loads the records into it's `data` field
});
