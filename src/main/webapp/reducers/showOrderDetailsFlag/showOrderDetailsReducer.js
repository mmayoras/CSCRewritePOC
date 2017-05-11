/* eslint-disable import/prefer-default-export */
import {
  SHOW_ORDER_DETAILS,
  HIDE_ORDER_DETAILS,
} from './actionTypes';

export const showOrderDetailsReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_ORDER_DETAILS:
      return true;
    case HIDE_ORDER_DETAILS:
      return false;
    default:
      return state;
  }
};
