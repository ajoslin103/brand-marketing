import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { ContactRecord } from '../models/contact';
import { ContactService } from '../services/contact.service';

/**
 * Data source for the ContactsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */

@Injectable({
  providedIn: 'root',
})
export class ContactDataSource extends DataSource<ContactRecord> {
  table: MatTable<ContactRecord>;
  data: ContactRecord[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private contactService: ContactService) {
    super();
  }

  /**
   * This routine requestst the data, hooks up the paginator, sorter, and table
   * Then replaces the tables dataSource when records have been loaded
   * There are Waaaaay better ways to do this when I get better at moden Angular
   *
   * @param paginator passed down from the owning table componant
   * @param sort passed down from the owning table componant
   * @param table passed down from the owning table componant
   */
  init({ paginator, sort, table }): Promise<ContactRecord[]> {
    return new Promise((resolve, reject) => {
      this.contactService.getContactRecordObservable().subscribe((records) => {
        this.data.push(...records);
        this.table.dataSource = this;
        resolve(records);
      });

      this.paginator = paginator;
      this.table = table;
      this.sort = sort;
      this.connect();
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ContactRecord[]> {
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
  private getPagedData(data: ContactRecord[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ContactRecord[]) {
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
