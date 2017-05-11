import {
  updateLanguageCodeEnCa,
  updateLanguageCodeFrCa,
  updateLanguageCodeEnUs,
 } from './actionCreators';
import { languageCodeReducer } from './languageCodeReducer';

test('an undefined state and an unmatched action returns default state', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
  };
  const value = languageCodeReducer(state, action);
  expect(value).toEqual('en_US');
});

test('an unmatched action returns the state unchanged', () => {
  const state = 'en_CA';
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = languageCodeReducer(state, action);
  expect(value).toEqual(state);
});

test('update language code, returns a new state with updated language code', () => {
  const state = 'en_US';
  const action = updateLanguageCodeEnCa();
  const value = languageCodeReducer(state, action);
  expect(value).toEqual('en_CA');
});

test('update language code, returns a new state with updated language code', () => {
  const state = 'en_US';
  const action = updateLanguageCodeEnUs();
  const value = languageCodeReducer(state, action);
  expect(value).toEqual('en_US');
});

test('update language code, returns a new state with updated language code', () => {
  const state = 'en_US';
  const action = updateLanguageCodeFrCa();
  const value = languageCodeReducer(state, action);
  expect(value).toEqual('fr_CA');
});
