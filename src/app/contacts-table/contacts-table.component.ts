import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { ContactRecord, ContactHeaders } from '../models/contact';
import { ContactDataSource } from '../datasources/contact-datasource';

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

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss'],
})
export class ContactsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ContactRecord>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [];
  colHeaders: ContactHeaders;

  constructor(
    public dataSource: ContactDataSource,
    private uiStrings: UIStrings
  ) {
    this.colHeaders = {
      _id: this.uiStrings.Get(CONTACTS_ID_COLUMN_NAME),
      index: this.uiStrings.Get(CONTACTS_INDEX_NAME),
      firstName: this.uiStrings.Get(CONTACTS_FIRST_NAME_NAME),
      lastName: this.uiStrings.Get(CONTACTS_LAST_NAME_NAME),
      company: this.uiStrings.Get(CONTACTS_COMPANY_NAME),
      email: this.uiStrings.Get(CONTACTS_EMAIL_NAME),
      phone: this.uiStrings.Get(CONTACTS_PHONE_NAME),
      address: this.uiStrings.Get(CONTACTS_ADDRESS_NAME),
    };

    this.displayedColumns = [
      '_id',
      'index',
      'firstName',
      'lastName',
      'company',
      'email',
      'phone',
      'address',
    ];
  }

  ngAfterViewInit() {
    // wait for all parts
    // before connecting
    this.dataSource.init({
      paginator: this.paginator,
      table: this.table,
      sort: this.sort,
    });
  }
}
