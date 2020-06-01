import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { ContactRecord } from '../models/contact';
import { ContactDataSource } from '../datasources/contact-datasource';
import { ContactService } from '../services/contact.service';

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

  constructor(public dataSource: ContactDataSource) {}

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
