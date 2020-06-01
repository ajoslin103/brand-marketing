import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';

import { AddContactFormComponent } from './add-contact-form.component';

describe('AddContactFormComponent', () => {
  let component: AddContactFormComponent;
  let fixture: ComponentFixture<AddContactFormComponent>;
  let compiled: Element;

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
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should be titled: Add New Contact', () => {
    expect(
      compiled.querySelector('.mat-card-header-text').textContent
    ).toContain('Add New Contact');
  });

  it('should have a control for firstName', () => {
    expect(
      compiled.querySelector('[formcontrolname="firstName"]')
    ).toBeTruthy();
  });

  it('should have a control for lastName', () => {
    expect(compiled.querySelector('[formcontrolname="lastName"]')).toBeTruthy();
  });

  it('should have a control for company', () => {
    expect(compiled.querySelector('[formcontrolname="company"]')).toBeTruthy();
  });

  it('should have a control for email', () => {
    expect(compiled.querySelector('[formcontrolname="email"]')).toBeTruthy();
  });

  it('should have a control for phone', () => {
    expect(compiled.querySelector('[formcontrolname="phone"]')).toBeTruthy();
  });

  it('should have a control for address', () => {
    expect(compiled.querySelector('[formcontrolname="address"]')).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.addContactForm.valid).toBeFalsy();
  });

  it('firstName control should be invalid when empty', () => {
    expect(component.addContactForm.controls.firstName.valid).toBeFalsy();
  });

  it('firstName control should be valid when not empty', () => {
    component.addContactForm.controls.firstName.setValue('John');
    expect(component.addContactForm.controls.firstName.valid).toBeTruthy();
  });

  it('email control should be invalid when bad address', () => {
    component.addContactForm.controls.email.setValue('john');
    expect(component.addContactForm.controls.email.valid).toBeFalsy();
  });

  it('email control should be valid when good address', () => {
    component.addContactForm.controls.email.setValue('john@jim.com');
    expect(component.addContactForm.controls.email.valid).toBeTruthy();
  });

  it('should be valid when full', () => {
    component.addContactForm.controls.firstName.setValue('firstName');
    component.addContactForm.controls.lastName.setValue('lastName');
    component.addContactForm.controls.company.setValue('company');
    component.addContactForm.controls.email.setValue('john@jim.com');
    component.addContactForm.controls.phone.setValue('phone');
    component.addContactForm.controls.address.setValue('address');
    expect(component.addContactForm.valid).toBeTruthy();
  });

  it('should have a submit button', () => {
    expect(compiled.querySelector('[type="submit"]')).toBeTruthy();
  });

  it('should fail onSubmit when Submit button is clicked on an empty form', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    const button: HTMLElement = fixture.debugElement.query(By.css('button'))
      .nativeElement;
    button.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should pass onSubmit when Submit button is clicked on an empty form', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    const button: HTMLElement = fixture.debugElement.query(By.css('button'))
      .nativeElement;
    component.addContactForm.controls.firstName.setValue('firstName');
    component.addContactForm.controls.lastName.setValue('lastName');
    component.addContactForm.controls.company.setValue('company');
    component.addContactForm.controls.email.setValue('john@jim.com');
    component.addContactForm.controls.phone.setValue('phone');
    component.addContactForm.controls.address.setValue('address');
    button.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
