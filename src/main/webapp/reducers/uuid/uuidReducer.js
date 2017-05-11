/* eslint-disable import/prefer-default-export */
import {
  UPDATE_UUID,
} from './actionTypes';

export function uuidReducer(state = '', action) {
  switch (action.type) {
    case UPDATE_UUID:
      return action.payload;
    default:
      return state;
  }
}
