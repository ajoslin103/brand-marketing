import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(`Contact Added: ${JSON.stringify(this.addContactForm.value)}`);
  }
}
