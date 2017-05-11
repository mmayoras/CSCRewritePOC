/* eslint-disable import/prefer-default-export */
import {
  UPDATE_UUID,
} from './actionTypes';

export function updateUUID(payload) {
  return {
    type: UPDATE_UUID,
    payload,
  };
}
