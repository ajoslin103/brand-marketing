import { Component } from '@angular/core';

import { UIString, UIStrings, CONTACTS_PAGE_TITLE } from './utils/ui-strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: UIString;

  constructor(private enStrings: UIStrings) {
    this.title = enStrings.Get(CONTACTS_PAGE_TITLE);
  }
}
