/* eslint-disable import/prefer-default-export */
import {
  UPDATE_STORE_NUMBER,
} from './actionTypes';

export function storeNumberReducer(state = '0091', action) {
  switch (action.type) {
    case UPDATE_STORE_NUMBER:
      return action.payload;
    default:
      return state;
  }
}
