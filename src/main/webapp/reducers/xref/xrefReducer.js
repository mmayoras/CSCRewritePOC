/* eslint-disable import/prefer-default-export */
import {
  UPDATE_XREF,
} from './actionTypes';

export function xrefReducer(state = '', action) {
  switch (action.type) {
    case UPDATE_XREF:
      return action.payload;
    default:
      return state;
  }
}
