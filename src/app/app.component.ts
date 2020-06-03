import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UIString, UIStrings, CONTACTS_PAGE_TITLE } from './utils/ui-strings';
import { ContactAddedService } from './services/contact-added.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  title: UIString;

  constructor(private enStrings: UIStrings, private contactAddedService: ContactAddedService) {
    this.title = enStrings.Get(CONTACTS_PAGE_TITLE);
  }

  ngOnInit() {
    this.subscription = this.contactAddedService.newContact.subscribe(
      (newContact) => {
        console.log(`Contact Submitted: ${JSON.stringify(newContact)}`);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription?.unsubscribe) {
      this.subscription.unsubscribe();
    }
  }
}
