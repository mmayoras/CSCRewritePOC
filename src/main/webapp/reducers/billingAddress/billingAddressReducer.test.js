import {
  updateAddressLine1,
  updateAddressLine2,
  updateAddressCity,
  updateAddressState,
  updateAddressZipCode,
  updateAddressCountryCode,
} from './actionCreators';
import { billingAddressReducer } from './billingAddressReducer';

const defaultState = {
  addressLine1: '',
  addressLine2: '',
  city: '',
  countryCode: 'US',
  state: '',
  zipCode: '',
};

test('an undefined state and an unmatched action returns the default state', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = billingAddressReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = {
    addressLine1: '123 West Street',
    addressLine2: '',
    city: 'Atlanta',
    countryCode: 'CA',
    state: 'GA',
    zipCode: '30303',
  };
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = billingAddressReducer(state, action);
  expect(value).toEqual(state);
});

test('update addressLine1, returns a new state with updated addressLine1', () => {
  const state = defaultState;
  const action = updateAddressLine1('123 West Street');
  const value = billingAddressReducer(state, action);
  const expectedState = {
    addressLine1: '123 West Street',
    addressLine2: '',
    city: '',
    countryCode: 'US',
    state: '',
    zipCode: '',
  };
  expect(value).toEqual(expectedState);
});

test('update addressLine2, returns a new state with updated addressLine2', () => {
  const state = defaultState;
  const action = updateAddressLine2('Apt #2B');
  const value = billingAddressReducer(state, action);
  const expectedState = {
    addressLine1: '',
    addressLine2: 'Apt #2B',
    city: '',
    countryCode: 'US',
    state: '',
    zipCode: '',
  };
  expect(value).toEqual(expectedState);
});

test('update city, returns a new state with updated city', () => {
  const state = defaultState;
  const action = updateAddressCity('Atlanta');
  const value = billingAddressReducer(state, action);
  const expectedState = {
    addressLine1: '',
    addressLine2: '',
    city: 'Atlanta',
    countryCode: 'US',
    state: '',
    zipCode: '',
  };
  expect(value).toEqual(expectedState);
});

test('update state, returns a new state with updated state', () => {
  const state = defaultState;
  const action = updateAddressState('GA');
  const value = billingAddressReducer(state, action);
  const expectedState = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    countryCode: 'US',
    state: 'GA',
    zipCode: '',
  };
  expect(value).toEqual(expectedState);
});

test('update zip code, returns a new state with updated zip code', () => {
  const state = defaultState;
  const action = updateAddressZipCode('30303');
  const value = billingAddressReducer(state, action);
  const expectedState = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    countryCode: 'US',
    state: '',
    zipCode: '30303',
  };
  expect(value).toEqual(expectedState);
});

test('update country code, returns a new state with updated country code', () => {
  const state = defaultState;
  const action = updateAddressCountryCode('CA');
  const value = billingAddressReducer(state, action);
  const expectedState = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    countryCode: 'CA',
    state: '',
    zipCode: '',
  };
  expect(value).toEqual(expectedState);
});
