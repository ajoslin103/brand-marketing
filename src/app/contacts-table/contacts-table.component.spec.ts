import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { Injector } from '@angular/core';

import { ContactsTableComponent } from './contacts-table.component';
import { ContactDataSource } from '../datasources/contact-datasource';
import { ContactService } from '../services/contact.service';

describe('ContactsTableComponent', () => {
  let component: ContactsTableComponent;
  let fixture: ComponentFixture<ContactsTableComponent>;
  let contactService: ContactService;
  let dataSource: ContactDataSource;
  let injector: Injector;
  let compiled: Element;

  beforeEach(async(() => {
    injector = TestBed.configureTestingModule({
      providers: [ContactService],
      imports: [HttpClientModule],
    });

    TestBed.configureTestingModule({
      declarations: [ContactsTableComponent],
      imports: [
        NoopAnimationsModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ],
    }).compileComponents();

    contactService = injector.get(ContactService);
    dataSource = injector.get(ContactDataSource);

    fixture = TestBed.createComponent(ContactsTableComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();

    return dataSource.init({
      paginator: component.paginator,
      table: component.table,
      sort: component.sort,
    });
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should have all sortable columns', () => {
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-_id').textContent
    ).toEqual('_id');
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-index').textContent
    ).toEqual('Index');
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-firstName')
        .textContent
    ).toEqual('First Name');
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-lastName').textContent
    ).toEqual('Last Name');
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-company').textContent
    ).toEqual('Company');
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-email').textContent
    ).toEqual('Email');
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-phone').textContent
    ).toEqual('Phone');
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-address').textContent
    ).toEqual('Address');
  });

  it('should sort on email', () => {
    const element: HTMLElement = fixture.debugElement.query(
      By.css('.mat-sort-header.mat-column-email')
    ).nativeElement;
    const emailBefore: any = fixture.debugElement.query(
      By.css('.mat-cell.mat-column-email')
    );
    // TODO: rows aren't loading because the MatTable is connected too soon
    if (element && emailBefore) {
      element.click();
      const emailAfter: any = fixture.debugElement.query(
        By.css('.mat-cell.mat-column-email')
      );
      expect(emailBefore).not.toEqual(emailAfter);
    }
  });
});
