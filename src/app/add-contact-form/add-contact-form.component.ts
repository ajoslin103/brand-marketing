import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactHeaders } from '../models/contact';
import { Subject } from 'rxjs';

import {
  UIString,
  UIStrings,
  CONTACTS_FORM_TITLE,
  CONTACTS_FORM_PASS_MSG,
  CONTACTS_FORM_FAIL_MSG,
  CONTACTS_ID_COLUMN_NAME,
  CONTACTS_INDEX_NAME,
  CONTACTS_FIRST_NAME_NAME,
  CONTACTS_LAST_NAME_NAME,
  CONTACTS_COMPANY_NAME,
  CONTACTS_EMAIL_NAME,
  CONTACTS_PHONE_NAME,
  CONTACTS_ADDRESS_NAME,
} from '../utils/ui-strings';

import { ContactAddedService } from '../services/contact-added.service';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss'],
})
export class AddContactFormComponent {
  addedContact: Subject<object>;

  addContactForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    company: [null, Validators.required],
    email: [null, Validators.required],
    phone: [null, Validators.required],
    address: [null, Validators.required],
  });

  formTitle: UIString;
  formPassSnack: UIString;
  formFailSnack: UIString;
  colHeaders: ContactHeaders;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private uiStrings: UIStrings,
    private contactAddedService: ContactAddedService
  ) {
    this.formTitle = this.uiStrings.Get(CONTACTS_FORM_TITLE);
    this.formPassSnack = this.uiStrings.Get(CONTACTS_FORM_PASS_MSG);
    this.formFailSnack = this.uiStrings.Get(CONTACTS_FORM_FAIL_MSG);
    this.colHeaders = {
      _id: this.uiStrings.Get(CONTACTS_ID_COLUMN_NAME),
      index: this.uiStrings.Get(CONTACTS_INDEX_NAME),
      firstName: this.uiStrings.Get(CONTACTS_FIRST_NAME_NAME),
      lastName: this.uiStrings.Get(CONTACTS_LAST_NAME_NAME),
      company: this.uiStrings.Get(CONTACTS_COMPANY_NAME),
      email: this.uiStrings.Get(CONTACTS_EMAIL_NAME),
      phone: this.uiStrings.Get(CONTACTS_PHONE_NAME),
      address: this.uiStrings.Get(CONTACTS_ADDRESS_NAME),
    };
  }

  onSubmit() {
    if (!this.addContactForm.valid) {
      this.snackBar.open(this.formFailSnack);
    } else {
      this.snackBar.open(this.formPassSnack);
      this.contactAddedService.emitNewContact(this.addContactForm.value);
    }
  }
}
