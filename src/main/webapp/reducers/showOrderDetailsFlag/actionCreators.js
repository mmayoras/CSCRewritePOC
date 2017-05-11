import {
  SHOW_ORDER_DETAILS,
  HIDE_ORDER_DETAILS,
} from './actionTypes';

export function showOrderDetails() {
  return {
    type: SHOW_ORDER_DETAILS,
  };
}

export function hideOrderDetails() {
  return {
    type: HIDE_ORDER_DETAILS,
  };
}
