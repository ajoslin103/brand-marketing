import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { ContactRecord } from '../models/contact';
import { ContactDataSource } from '../datasources/contact-datasource';
import { ContactService } from '../services/contact.service';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss'],
})
export class ContactsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ContactRecord>;
  dataSource: ContactDataSource;

  constructor(private contactService: ContactService) {}

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

  ngOnInit() {
    this.contactService
      .getContactRecordObservable()
      .pipe(
        tap(
          (records) => {
            try {
              this.dataSource = new ContactDataSource(records);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;

              this.table.dataSource = this.dataSource;
            } catch (err) {
              console.error(
                `attaching the dataSource to the contactsTable threw:${err.message}`
              );
            }
          },
          (err) =>
            console.error(
              `error retrieving from: [${this.contactService.getServiceUrl()}] : ${
                err.message
              }`
            )
        )
      )
      .subscribe();
  }
}
