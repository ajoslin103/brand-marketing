import { TestBed, async } from '@angular/core/testing';

import {
  UIStrings,
  SPANISH,
  DEFAULT_LANGUAGE,
  TEST_STRING,
} from './ui-strings';

describe('UIStrings', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
    }).compileComponents();
  }));

  // review: there are arguments against complex tesing

  const langStrings = new UIStrings();
  const usingLanguage = langStrings.setLang(SPANISH);

  it(`requested SPANISH but got DEFAULT_LANGUAGE`, () => {
    expect(usingLanguage).toEqual(DEFAULT_LANGUAGE);
  });

  const testString = langStrings.Get(TEST_STRING);
  it(`testString should equal 'test string'`, () => {
    expect(testString).toEqual('test string');
  });

  const notFoundString = langStrings.Get('notFoundString');
  it(`notFoundString should equal ''`, () => {
    expect(notFoundString).toEqual('');
  });
});
