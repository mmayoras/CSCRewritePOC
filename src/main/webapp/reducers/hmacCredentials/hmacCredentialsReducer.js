/* eslint-disable import/prefer-default-export */
import R from 'ramda';

import {
  UPDATE_HMAC_CLIENT_ID,
  UPDATE_HMAC_CLIENT_TOKEN,
  UPDATE_HMAC_CLIENT_TIMESTAMP,
} from './actionTypes';

const defaultState = {
  clientId: 'CLIENT',
  clientTimestamp: 42,
  clientToken: 'swordfish',
};

export function hmacCredentialsReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_HMAC_CLIENT_ID:
      return R.assoc('clientId', action.payload, state);
    case UPDATE_HMAC_CLIENT_TOKEN:
      return R.assoc('clientToken', action.payload, state);
    case UPDATE_HMAC_CLIENT_TIMESTAMP:
      return R.assoc('clientTimestamp', action.payload, state);
    default:
      return state;
  }
}
