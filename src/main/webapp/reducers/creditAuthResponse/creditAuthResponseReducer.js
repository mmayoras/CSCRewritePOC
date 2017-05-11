/* eslint-disable import/prefer-default-export */
import {
  UPDATE_CREDIT_AUTH_RESPONSE,
} from './actionTypes';

export function creditAuthResponseReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_CREDIT_AUTH_RESPONSE:
      return action.payload;
    default:
      return state;
  }
}
