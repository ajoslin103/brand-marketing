import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: move to the project types file
export type ContactUID = string;
export type ContactIndex = number;
export type ContactFirstName = string;
export type ContactLastName = string;
export type ContactCompany = string;
export type ContactEMail = string;
export type ContactPhone = string;
export type ContactAddress = string;

// TODO: alias from the project types file
export interface ContactsTableItem {
  _id: ContactUID;
  index: ContactIndex;
  firstName: ContactFirstName;
  lastName: ContactLastName;
  company: ContactCompany;
  email: ContactEMail;
  phone: ContactPhone;
  address: ContactAddress;
}

// TODO: pull from the project sample data file
const EXAMPLE_DATA: ContactsTableItem[] = [
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

/**
 * Data source for the ContactsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ContactsTableDataSource extends DataSource<ContactsTableItem> {
  data: ContactsTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ContactsTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange,
    ];

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ContactsTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ContactsTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    // NOTE: replaced original strategy (see below)
    // return data.sort((a, b) => {
    //   switch (this.sort.active) {
    //     case 'id':
    //       return compare(+a.id, +b.id, isAsc);
    //     case 'name':
    //       return compare(a.name, b.name, isAsc);
    //     default:
    //       return 0;
    //   }
    // });

    // NOTE: use a dynamic approach to ease future changes
    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (true) {
        case 'string' === typeof a[this.sort.active]:
          return compare(a[this.sort.active], b[this.sort.active], isAsc);
        case 'number' === typeof a[this.sort.active]:
          return compare(a[+this.sort.active], b[+this.sort.active], isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
