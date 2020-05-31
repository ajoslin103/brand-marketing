import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { ContactRecord } from '../models/contact';
import { ContactDataSource } from '../datasources/contact-datasource';
import { ContactService } from '../services/contact.service';

import { tap } from 'rxjs/operators';

const TESTING_DATA = [
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
  {
    _id: '5de91c007e02a7eb64124760',
    index: 2,
    firstName: 'Susan',
    lastName: 'Dyer',
    company: 'ZAGGLE',
    email: 'susandyer@zaggle.com',
    phone: '+1 (940) 547-2965',
    address: '853 Decatur Street, Waumandee, Nevada, 7107',
  },
  {
    _id: '5de91c002229191af175899d',
    index: 3,
    firstName: 'Becker',
    lastName: 'Gibson',
    company: 'SKINSERVE',
    email: 'beckergibson@skinserve.com',
    phone: '+1 (908) 466-2681',
    address:
      '995 Banner Avenue, Wollochet, Federated States Of Micronesia, 2706',
  },
  {
    _id: '5de91c000dd0867e858c4a8e',
    index: 4,
    firstName: 'Sparks',
    lastName: 'Bullock',
    company: 'COMBOGENE',
    email: 'sparksbullock@combogene.com',
    phone: '+1 (922) 456-2177',
    address: '267 Chestnut Street, Waterview, Maryland, 1246',
  },
];

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
              const msg = `attaching the dataSource to the contactsTable threw:${err.message}`;
              console.error(msg);
              throw new Error(msg);
            }
          },
          (err) => {
            // HACK: in this case we're going to return data NO MATTER WHAT because I want the demo to run
            const msg = `requesting the data from contactService threw:${err.message}`;
            console.error(msg);

            this.dataSource = new ContactDataSource(TESTING_DATA); // records);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

            this.table.dataSource = this.dataSource;
          }
        )
      )
      .subscribe();
  }
}
