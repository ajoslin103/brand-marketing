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

  it('form should be invalid when empty', () => {
    expect(component.addContactForm.valid).toBeFalsy();
    component.onSubmit();
  });

  it('form firstName should be invalid when empty', () => {
    expect(component.addContactForm.controls.firstName.valid).toBeFalsy();
  });

  it('form firstName should be valid when not empty', () => {
    component.addContactForm.controls.firstName.setValue('John');
    expect(component.addContactForm.controls.firstName.valid).toBeTruthy();
  });

  it('form email should be invalid when bad address', () => {
    component.addContactForm.controls.email.setValue('john');
    expect(component.addContactForm.controls.email.valid).toBeFalsy();
  });

  it('form email should be valid when good address', () => {
    component.addContactForm.controls.email.setValue('john@jim.com');
    expect(component.addContactForm.controls.email.valid).toBeTruthy();
  });

  it('form should be valid when full', () => {
    component.addContactForm.controls.firstName.setValue('firstName');
    component.addContactForm.controls.lastName.setValue('lastName');
    component.addContactForm.controls.company.setValue('company');
    component.addContactForm.controls.email.setValue('john@jim.com');
    component.addContactForm.controls.phone.setValue('phone');
    component.addContactForm.controls.address.setValue('address');
    expect(component.addContactForm.valid).toBeTruthy();
    component.onSubmit();
  });

  it('should have a submit button', () => {
    fixture = TestBed.createComponent(AddContactFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[type="submit"]')).toBeTruthy();
  });

  it('should have a method: onSubmit', () => {
    expect(typeof component.onSubmit === 'function').toBeTrue();
  });
});
