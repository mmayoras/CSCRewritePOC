/* eslint-disable import/prefer-default-export */
import {
  UPDATE_XREF,
} from './actionTypes';

export function updateXref(payload) {
  return {
    type: UPDATE_XREF,
    payload,
  };
}
