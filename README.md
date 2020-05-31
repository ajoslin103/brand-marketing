# Reviewable

`src/app/datasources/contact-datasource.ts`

- switch to dynamic sorting

`src/app/services/contact-service.spec.ts`

- discussion: how does one test private fields and methods

`src/app/contacts-table/contacts-table.component.html/.ts`

- discussion: it would be nice to combine dataSource && displayedColumns in some way... creating an iterable to simplify the declarative table definition style, but one can't walk a type at runtime...
- discussion: the sample data indicates to me that the postal-code might be managed as a number rather than a string... additional work may be needed elsewhere should we need to support international contacts...

# The Assignment

## Brand Marketing Code Test

### Purpose

This code test is designed to offer you a chance to show off your technical capabilities in a real-world way. The challenge presented here represents a cross-section of the type of work our team is typically accountable for at any given moment.

### The Challenge

As a business that is highly dependent on maintaining great communication with our clients, we would like for you to build a basic contact list page /app. In it, you will need to pull data from an existing mock endpoint, render to the page a table that displays all available information, and
includes a mock form with basic validation and submit button to add a new contact. As this would be an internal app, it does not need to conform to any existing external brand styles.

### Requirements

- This page should be built out using Angular 7 or above.
- This page should be fully responsive and mobile friendly.
- The code for this should be saved to GitHub or similar service (GitLab, BitBucket, etc).
- The table data should be dynamic and pull it's content from http://demo5838836.mockable.io/contact
- The form on the page should contain the following fields
  - First Name
  - Last Name
  - Company
  - Email
  - Phone
  - Address
- The form on the page should display an error should any of the fields be blank.
- The form should display an error should it not adhere to a standard email format (i.e. username@domain.tld)
- The form should display a message indicating success when the submit button is pressed and all fields pass validation.
- On successful submission, the page should serialize the inputs and post the output to console.log().

### Evaluation

Once you're happy with your work here, send the link to your repo to your recruiter. They will, in turn, pass that link on to the engineering team for review. From there, the team will evaluate the code based on the following:

- Feature Completeness: Did the submission meet or exceed the listed requirements.
- Future proofing: How well will submitted code grow as needs change or evolve?
- Maintainability: How clean or well organized is the submitted code.
- Code Quality: Does the code show a strong understanding of the technology?
- Creativity: Does the submission show novel solutions unique design decisions?

### Questions

Should you have any questions, issues, or comments regarding this test, please contact your recruiter and they'll be more than happy to help!

# BrandMarketing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
