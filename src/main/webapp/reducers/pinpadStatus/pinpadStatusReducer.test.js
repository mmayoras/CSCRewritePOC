import {
  pinpadConnecting,
  pinpadConnected,
  pinpadClosingConnection,
  pinpadOffline,
} from './actionCreators';
import {
  PINPAD_OFFLINE,
  PINPAD_CONNECTING,
  PINPAD_CONNECTED,
  PINPAD_CLOSING_CONNECTION,
} from './actionTypes';
import { pinpadStatusReducer } from './pinpadStatusReducer';

test('an undefined state and an unmatched action returns false', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = pinpadStatusReducer(state, action);
  expect(value).toEqual(PINPAD_OFFLINE);
});

test('an unmatched action returns the state unchanged', () => {
  const state = PINPAD_OFFLINE;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = pinpadStatusReducer(state, action);
  expect(value).toEqual(PINPAD_OFFLINE);
});

test('setting pinpad status to pinpad connecting', () => {
  const state = '';
  const action = pinpadConnecting();
  const value = pinpadStatusReducer(state, action);
  expect(value).toEqual(PINPAD_CONNECTING);
});

test('setting pinpad status to pinpad connected', () => {
  const state = '';
  const action = pinpadConnected();
  const value = pinpadStatusReducer(state, action);
  expect(value).toEqual(PINPAD_CONNECTED);
});

test('setting pinpad status to pinpad closing connection', () => {
  const state = '';
  const action = pinpadClosingConnection();
  const value = pinpadStatusReducer(state, action);
  expect(value).toEqual(PINPAD_CLOSING_CONNECTION);
});

test('setting pinpad status to pinpad offline', () => {
  const state = '';
  const action = pinpadOffline();
  const value = pinpadStatusReducer(state, action);
  expect(value).toEqual(PINPAD_OFFLINE);
});
