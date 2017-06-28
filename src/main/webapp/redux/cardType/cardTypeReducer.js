/* eslint-disable import/prefer-default-export */
import { UPDATE_CARD_TYPE } from './actionTypes';

export function cardTypeReducer(state = '', action) {
  switch (action.type) {
    case UPDATE_CARD_TYPE:
      return action.payload;
    default:
      return state;
  }
}
