/* eslint-disable import/prefer-default-export */
import {
  UPDATE_CREDIT_AUTH_RESPONSE,
} from './actionTypes';

export function updateCreditAuthResponse(payload) {
  return {
    type: UPDATE_CREDIT_AUTH_RESPONSE,
    payload,
  };
}
