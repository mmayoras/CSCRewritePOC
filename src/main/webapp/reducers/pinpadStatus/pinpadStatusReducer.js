/* eslint-disable import/prefer-default-export */
import {
  PINPAD_CONNECTING,
  PINPAD_CONNECTED,
  PINPAD_CLOSING_CONNECTION,
  PINPAD_OFFLINE,
} from './actionTypes';

export const pinpadStatusReducer = (state = PINPAD_OFFLINE, action) => {
  switch (action.type) {
    case PINPAD_CONNECTING:
      return PINPAD_CONNECTING;
    case PINPAD_CONNECTED:
      return PINPAD_CONNECTED;
    case PINPAD_CLOSING_CONNECTION:
      return PINPAD_CLOSING_CONNECTION;
    case PINPAD_OFFLINE:
      return PINPAD_OFFLINE;
    default:
      return state;
  }
};
