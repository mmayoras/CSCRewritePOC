/* eslint-disable import/prefer-default-export */
import {
  UPDATE_AUTHORIZATION_IDENTIFICATION_RESPONSE,
} from './actionTypes';

export function authorizationIdentificationResponseReducer(state = '', action) {
  switch (action.type) {
    case UPDATE_AUTHORIZATION_IDENTIFICATION_RESPONSE:
      return action.payload;
    default:
      return state;
  }
}
