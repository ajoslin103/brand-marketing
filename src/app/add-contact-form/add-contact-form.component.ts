import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss'],
})
export class AddContactFormComponent {
  addContactForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    company: [null, Validators.required],
    email: [null, Validators.required],
    phone: [null, Validators.required],
    address: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {}

  onSubmit() {
    if (/invalid/i.test(this.addContactForm.status)) {
      this.snackBar.open('Please correct your form entries');
    } else {
      this.snackBar.open('Contact Submitted');
      console.log(
        `Contact Submitted: ${JSON.stringify(this.addContactForm.value)}`
      );
    }
  }
}
