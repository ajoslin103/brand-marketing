import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { AddContactFormComponent } from './add-contact-form.component';

describe('AddContactFormComponent', () => {
  let component: AddContactFormComponent;
  let fixture: ComponentFixture<AddContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddContactFormComponent],
      imports: [
        MatSnackBarModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should be titled: Add New Contact', () => {
    fixture = TestBed.createComponent(AddContactFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('.mat-card-header-text').textContent
    ).toContain('Add New Contact');
  });

  it('should have a control for firstName', () => {
    fixture = TestBed.createComponent(AddContactFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('[formcontrolname="firstName"]')
    ).toBeTruthy();
  });

  it('should have a control for lastName', () => {
    fixture = TestBed.createComponent(AddContactFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[formcontrolname="lastName"]')).toBeTruthy();
  });

  it('should have a control for company', () => {
    fixture = TestBed.createComponent(AddContactFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[formcontrolname="company"]')).toBeTruthy();
  });

  it('should have a control for email', () => {
    fixture = TestBed.createComponent(AddContactFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[formcontrolname="email"]')).toBeTruthy();
  });

  it('should have a control for phone', () => {
    fixture = TestBed.createComponent(AddContactFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[formcontrolname="phone"]')).toBeTruthy();
  });

  it('should have a control for address', () => {
    fixture = TestBed.createComponent(AddContactFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[formcontrolname="address"]')).toBeTruthy();
  });

  it('should have a submit button', () => {
    fixture = TestBed.createComponent(AddContactFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[type="submit"]')).toBeTruthy();
  });
});
