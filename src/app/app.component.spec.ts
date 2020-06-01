import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UIString, UIStrings, CONTACTS_PAGE_TITLE } from './utils/ui-strings';
import { Injector } from '@angular/core';

describe('AppComponent', () => {
  let injector: Injector;
  let enStrings: UIStrings;
  let contactsPageTitle: UIString;

  beforeEach(async(() => {
    injector = TestBed.configureTestingModule({
      providers: [UIStrings],
    });

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();

    enStrings = injector.get(UIStrings);
    contactsPageTitle = enStrings.Get(CONTACTS_PAGE_TITLE);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // there are arguments against complex testing...
  // helpers should be built to reduce/remove this technical debt
  // TODO: do this if I have time

  it(`should have as title '${contactsPageTitle}'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(contactsPageTitle);
  });
});
