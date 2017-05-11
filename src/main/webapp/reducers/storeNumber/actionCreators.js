/* eslint-disable import/prefer-default-export */
import {
  UPDATE_STORE_NUMBER,
} from './actionTypes';

export function updateStoreNumber(payload) {
  return {
    type: UPDATE_STORE_NUMBER,
    payload,
  };
}
