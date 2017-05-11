/* eslint-disable import/prefer-default-export */
import {
  UPDATE_AUTHORIZATION_IDENTIFICATION_RESPONSE,
} from './actionTypes';

export function updateAuthorizationIdentificationResponse(payload) {
  return {
    type: UPDATE_AUTHORIZATION_IDENTIFICATION_RESPONSE,
    payload,
  };
}
