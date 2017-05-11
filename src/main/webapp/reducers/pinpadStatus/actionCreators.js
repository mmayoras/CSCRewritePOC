import {
  PINPAD_CLOSING_CONNECTION,
  PINPAD_CONNECTED,
  PINPAD_CONNECTING,
  PINPAD_OFFLINE,
} from './actionTypes';

export function pinpadConnecting() {
  return {
    type: PINPAD_CONNECTING,
  };
}

export function pinpadConnected() {
  return {
    type: PINPAD_CONNECTED,
  };
}

export function pinpadClosingConnection() {
  return {
    type: PINPAD_CLOSING_CONNECTION,
  };
}

export function pinpadOffline() {
  return {
    type: PINPAD_OFFLINE,
  };
}
