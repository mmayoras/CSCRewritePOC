import {
  UPDATE_HMAC_CLIENT_ID,
  UPDATE_HMAC_CLIENT_TIMESTAMP,
  UPDATE_HMAC_CLIENT_TOKEN,
} from './actionTypes';

export function updateHmacClientId(payload) {
  return {
    type: UPDATE_HMAC_CLIENT_ID,
    payload,
  };
}

export function updateHmacClientToken(payload) {
  return {
    type: UPDATE_HMAC_CLIENT_TOKEN,
    payload,
  };
}

export function updateHmacClientTimestamp(payload) {
  return {
    type: UPDATE_HMAC_CLIENT_TIMESTAMP,
    payload,
  };
}
