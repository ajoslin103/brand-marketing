import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { ContactRecord } from '../models/contact';

import { ContactDataSource } from '../datasources/contact-datasource';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss'],
})
export class ContactsTableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ContactRecord>;

  constructor(public dataSource: ContactDataSource) {}

  /**
   * Columns displayed in the table. Columns IDs can be added, removed, or reordered.
   * Nice-to-have: show/hide the inner-workings columns dynamically
   */
  displayedColumns = [
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
