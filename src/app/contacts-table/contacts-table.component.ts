import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
  ContactsTableDataSource,
  ContactsTableItem,
} from './contacts-table-datasource';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss'],
})
export class ContactsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ContactsTableItem>;
  dataSource: ContactsTableDataSource;

  /**
   * Columns displayed in the table. Columns IDs can be added, removed, or reordered.
   * Nice-to-have: show/hide the inner-workings columns dynamically to aid in future debugging
   */
  displayedColumns = [
    // '_id',
    // 'index',
    'firstName',
    'lastName',
    'company',
    'email',
    'phone',
    'address',
  ];

  ngOnInit() {
    this.dataSource = new ContactsTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
