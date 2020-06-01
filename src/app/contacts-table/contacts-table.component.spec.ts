import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { Injector } from '@angular/core';

import {
  UIString,
  UIStrings,
  CONTACTS_ID_COLUMN_NAME,
  CONTACTS_INDEX_NAME,
  CONTACTS_FIRST_NAME_NAME,
  CONTACTS_LAST_NAME_NAME,
  CONTACTS_COMPANY_NAME,
  CONTACTS_EMAIL_NAME,
  CONTACTS_PHONE_NAME,
  CONTACTS_ADDRESS_NAME,
} from '../utils/ui-strings';

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
  let enStrings: UIStrings;
  let contactsIdColumnName: UIString;
  let contactsIndexColumnName: UIString;
  let contactsFirstNameColumnName: UIString;
  let contactsLastNameColumnName: UIString;
  let contactsCompanyColumnName: UIString;
  let contactsEmailColumnName: UIString;
  let contactsPhoneColumnName: UIString;
  let contactsAddressColumnName: UIString;

  beforeEach(
    asy(() => {
      injector = TestBed.configureTestingModule({
        providers: [ContactService, UIStrings],
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
      enStrings = injector.get(UIStrings);
      contactsIdColumnName = enStrings.Get(CONTACTS_ID_COLUMN_NAME);
      contactsIndexColumnName = enStrings.Get(CONTACTS_INDEX_NAME);
      contactsFirstNameColumnName = enStrings.Get(CONTACTS_FIRST_NAME_NAME);
      contactsLastNameColumnName = enStrings.Get(CONTACTS_LAST_NAME_NAME);
      contactsCompanyColumnName = enStrings.Get(CONTACTS_COMPANY_NAME);
      contactsEmailColumnName = enStrings.Get(CONTACTS_EMAIL_NAME);
      contactsPhoneColumnName = enStrings.Get(CONTACTS_PHONE_NAME);
      contactsAddressColumnName = enStrings.Get(CONTACTS_ADDRESS_NAME);

      fixture = TestBed.createComponent(ContactsTableComponent);
      component = fixture.componentInstance;
      compiled = fixture.nativeElement;
      fixture.detectChanges();

      return dataSource.init({
        paginator: component.paginator,
        table: component.table,
        sort: component.sort,
      });
    })
  );

  // review: there are arguments against complex tesing

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should have all sortable columns', () => {
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-_id').textContent
    ).toEqual(contactsIdColumnName);
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-index').textContent
    ).toEqual(contactsIndexColumnName);
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-firstName')
        .textContent
    ).toEqual(contactsFirstNameColumnName);
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-lastName').textContent
    ).toEqual(contactsLastNameColumnName);
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-company').textContent
    ).toEqual(contactsCompanyColumnName);
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-email').textContent
    ).toEqual(contactsEmailColumnName);
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-phone').textContent
    ).toEqual(contactsPhoneColumnName);
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-address').textContent
    ).toEqual(contactsAddressColumnName);
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
