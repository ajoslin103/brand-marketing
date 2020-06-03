/**
 * allen joslin
 * 5/28/2020
 *
 * a simulation of proper internationalized string support
 */

// types
export type UIStringLanguage = string; // IETF language tag
export type UIStringPath = string;
export type UIString = string;

export interface UIStringRecord {
  path: UIStringPath;
  text: UIString;
}

export type UIStringSource = Record<string, Array<UIStringRecord>>;

// languages
export const ENGLISH_US = 'en-us';
export const SPANISH = 'en-es';

// default langugae
export const DEFAULT_LANGUAGE = ENGLISH_US;

// registered strings
export const TEST_STRING = 'testString';
export const CONTACTS_FORM_TITLE = 'contactsPage/formTitle';
export const CONTACTS_FORM_PASS_MSG = 'contactsPage/formPassMsg';
export const CONTACTS_FORM_FAIL_MSG = 'contactsPage/formFailMsg';
export const CONTACTS_PAGE_TITLE = 'contactsPage/pageTitle';
export const CONTACTS_ID_COLUMN_NAME = 'contactsTable/columnHeader/_id';
export const CONTACTS_INDEX_NAME = 'contactsTable/columnHeader/index';
export const CONTACTS_FIRST_NAME_NAME = 'contactsTable/columnHeader/firstName';
export const CONTACTS_LAST_NAME_NAME = 'contactsTable/columnHeader/lastName';
export const CONTACTS_COMPANY_NAME = 'contactsTable/columnHeader/company';
export const CONTACTS_EMAIL_NAME = 'contactsTable/columnHeader/email';
export const CONTACTS_PHONE_NAME = 'contactsTable/columnHeader/phone';
export const CONTACTS_ADDRESS_NAME = 'contactsTable/columnHeader/address';

import { Injectable } from '@angular/core';

// NOTE: to avoid cluttering this space: see stringsByLanguage at EOF

@Injectable()
export class UIStrings {
  workingStringSet: Array<UIStringRecord> = [];
  workingLanguage: UIStringLanguage = DEFAULT_LANGUAGE;

  constructor() {
    this.workingLanguage = DEFAULT_LANGUAGE;
    this.workingStringSet = this.stringsByLanguage[this.workingLanguage];
  }

  /**
   *
   * @param desiredLang : specify via IETF language tag
   *
   * @return the current working language
   */
  setLang(desiredLang: UIStringLanguage): UIStringLanguage {
    try {
      this.workingLanguage = DEFAULT_LANGUAGE;
      if (!this.stringsByLanguage[desiredLang]) {
        // see stringsByLanguage at EOF
        console.warn(
          `Requested language [${desiredLang}] not found, defaulting to [${DEFAULT_LANGUAGE}]`
        ); // should be rsyslog'd
        this.workingLanguage = DEFAULT_LANGUAGE;
      }
      this.workingStringSet = this.stringsByLanguage[this.workingLanguage]; // see stringsByLanguage at EOF
    } catch (err) {
      console.error(err.message); // should be rsyslog'd
    }
    return this.workingLanguage;
  }

  /**
   *
   * @return the current working language
   */
  Lang(): UIStringLanguage {
    return this.workingLanguage;
  }

  /**
   *
   * @param requestedPath the path to the string we need
   */
  Get(requestedPath: UIStringPath): string {
    try {
      // find by path
      const stringByPath = this.workingStringSet.find(
        (eachString) => eachString.path === requestedPath
      );
      if (!stringByPath) {
        throw new Error(
          `Requested string at path [${requestedPath}] was not found`
        );
      }

      // confirm text
      if (!stringByPath.text) {
        throw new Error(
          `Found no text for the string at path [${requestedPath}]`
        );
      }

      // tslint:disable-next-line: no-console
      // console.debug(
      //   `Strings.Get(desiredLang: ${this.workingLanguage}, requestedPath: ${requestedPath}) => ${stringByPath.text}`
      // );

      return stringByPath.text;
    } catch (err) {
      console.error(err.message); // should be rsyslog'd
    }

    return '';
  }

  // as we are enterprise level, these would likely be centralized and maintainable in a database
  // for the purposes of this exercise, I'll statically declare them here
  // tslint:disable-next-line: member-ordering
  stringsByLanguage: UIStringSource = {
    'en-us': [
      { path: TEST_STRING, text: 'test string' },

      { path: CONTACTS_PAGE_TITLE, text: 'Brand Marketing [ajoslin]' },

      { path: CONTACTS_ID_COLUMN_NAME, text: '_id' },
      { path: CONTACTS_INDEX_NAME, text: 'Index' },
      { path: CONTACTS_FIRST_NAME_NAME, text: 'First Name' },
      { path: CONTACTS_LAST_NAME_NAME, text: 'Last Name' },
      { path: CONTACTS_COMPANY_NAME, text: 'Company' },
      { path: CONTACTS_EMAIL_NAME, text: 'Email' },
      { path: CONTACTS_PHONE_NAME, text: 'Phone' },
      { path: CONTACTS_ADDRESS_NAME, text: 'Address' },

      { path: CONTACTS_FORM_TITLE, text: 'Add New Contact' },
      {
        path: CONTACTS_FORM_FAIL_MSG,
        text: 'Please correct your form entries',
      },
      { path: CONTACTS_FORM_PASS_MSG, text: 'Contact Submitted' },
    ],
  };
}
