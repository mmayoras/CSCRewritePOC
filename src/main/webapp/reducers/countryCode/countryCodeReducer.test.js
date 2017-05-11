import {
  updateCountryCodeCA,
  updateCountryCodeUS,
} from './actionCreators';
import { countryCodeReducer } from './countryCodeReducer';

test('an undefined state and an unmatched action returns state', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
  };
  const value = countryCodeReducer(state, action);
  expect(value).toEqual('US');
});

test('an unmatched action returns the state unchanged', () => {
  const state = 'CA';
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = countryCodeReducer(state, action);
  expect(value).toEqual(state);
});

test('update language code to CA, returns a new state with language code CA', () => {
  const state = 'US';
  const action = updateCountryCodeCA();
  const value = countryCodeReducer(state, action);
  expect(value).toEqual('CA');
});

test('update language code to US, returns a new state with language code US', () => {
  const state = 'CA';
  const action = updateCountryCodeUS();
  const value = countryCodeReducer(state, action);
  expect(value).toEqual('US');
});
