import {
  SET_ACCESS_TOKEN,
} from './actionTypes';

import { authenticationDataReducer } from './authenticationDataReducer';

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const defaultState = {
    accessToken: {},
  };
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = authenticationDataReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = {
    accessToken: {
      access_token: 'tanzil-matt-test-data112123234',
      token_type: 'Bearer',
      expires_in: 3600,
      scope: 'orangePayServices.all',
    },
  };
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = authenticationDataReducer(state, action);
  expect(value).toEqual(state);
});

test('providing accessToken results in an updated accessToken value', () => {
  const state = {
    accessToken: '',
  };
  const action = {
    type: SET_ACCESS_TOKEN,
    accessToken: {
      access_token: 'tanzil-matt-test-data112123234',
      token_type: 'Bearer',
      expires_in: 3600,
      scope: 'orangePayServices.all',
    },
  };
  const expectedState = {
    accessToken: {
      access_token: 'tanzil-matt-test-data112123234',
      token_type: 'Bearer',
      expires_in: 3600,
      scope: 'orangePayServices.all',
    },
  };
  const value = authenticationDataReducer(state, action);
  expect(value).toEqual(expectedState);
});
