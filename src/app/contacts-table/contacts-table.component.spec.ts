import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { ContactsTableComponent } from './contacts-table.component';

describe('ContactsTableComponent', () => {
  let component: ContactsTableComponent;
  let fixture: ComponentFixture<ContactsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsTableComponent],
      imports: [
        HttpClientModule,
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should have a sortable column for _id', () => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-_id').textContent
    ).toEqual('_id');
  });

  it('should have a sortable column for Index', () => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-index').textContent
    ).toEqual('Index');
  });

  it('should have a sortable column for First Name', () => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-firstName')
        .textContent
    ).toEqual('First Name');
  });

  it('should have a sortable column for Last Name', () => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-lastName').textContent
    ).toEqual('Last Name');
  });

  it('should have a sortable column for Company', () => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-company').textContent
    ).toEqual('Company');
  });

  it('should have a sortable column for EMail', () => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-email').textContent
    ).toEqual('Email');
  });

  it('should have a sortable column for Phone', () => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-phone').textContent
    ).toEqual('Phone');
  });

  it('should have a sortable column for Address', () => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.mat-sort-header.mat-column-address').textContent
    ).toEqual('Address');
  });

  it('should have a Paginator', () => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.mat-paginator')).toBeTruthy();
  });
});
