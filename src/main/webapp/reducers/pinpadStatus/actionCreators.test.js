import {
  PINPAD_CLOSING_CONNECTION,
  PINPAD_CONNECTED,
  PINPAD_CONNECTING,
  PINPAD_OFFLINE,
} from './actionTypes';
import {
  pinpadConnecting,
  pinpadConnected,
  pinpadClosingConnection,
  pinpadOffline,
} from './actionCreators';

test('pinpad connecting action is created', () => {
  const actual = pinpadConnecting();
  expect(actual).toEqual({
    type: PINPAD_CONNECTING,
  });
});

test('pinpad connected action is created', () => {
  const actual = pinpadConnected();
  expect(actual).toEqual({
    type: PINPAD_CONNECTED,
  });
});

test('pinpad closing connection action is created', () => {
  const actual = pinpadClosingConnection();
  expect(actual).toEqual({
    type: PINPAD_CLOSING_CONNECTION,
  });
});

test('pinpad offline action is created', () => {
  const actual = pinpadOffline();
  expect(actual).toEqual({
    type: PINPAD_OFFLINE,
  });
});
