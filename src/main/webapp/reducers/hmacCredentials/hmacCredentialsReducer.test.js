import {
  updateHmacClientId,
  updateHmacClientToken,
  updateHmacClientTimestamp,
} from './actionCreators';
import { hmacCredentialsReducer } from './hmacCredentialsReducer';

const defaultState = {
  clientId: 'CLIENT',
  clientTimestamp: 42,
  clientToken: 'swordfish',
};

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = hmacCredentialsReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = {
    clientId: 'TEST',
    clientTimestamp: 101,
    clientToken: 'testToken',
  };
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = hmacCredentialsReducer(state, action);
  expect(value).toEqual(state);
});

test('update client ID, returns a new state with updated client ID', () => {
  const state = defaultState;
  const action = updateHmacClientId('TESTCLIENT');
  const value = hmacCredentialsReducer(state, action);
  const expectedState = {
    clientId: 'TESTCLIENT',
    clientTimestamp: 42,
    clientToken: 'swordfish',
  };
  expect(value).toEqual(expectedState);
});

test('update client token, returns a new state with updated client token', () => {
  const state = defaultState;
  const action = updateHmacClientToken('testclienttoken');
  const value = hmacCredentialsReducer(state, action);
  const expectedState = {
    clientId: 'CLIENT',
    clientTimestamp: 42,
    clientToken: 'testclienttoken',
  };
  expect(value).toEqual(expectedState);
});

test('update client timestamp, returns a new state with updated client timestamp', () => {
  const state = defaultState;
  const action = updateHmacClientTimestamp(1010101);
  const value = hmacCredentialsReducer(state, action);
  const expectedState = {
    clientId: 'CLIENT',
    clientTimestamp: 1010101,
    clientToken: 'swordfish',
  };
  expect(value).toEqual(expectedState);
});
