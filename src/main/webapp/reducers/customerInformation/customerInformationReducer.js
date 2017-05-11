/* eslint-disable import/prefer-default-export */
import R from 'ramda';

import {
  UPDATE_CUSTOMER_NAME,
  UPDATE_CUSTOMER_PHONE,
} from './actionTypes';

const defaultState = {
  customerName: '',
  customerPhone: '',
};

export function customerInformationReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_CUSTOMER_NAME:
      return R.assoc('customerName', action.payload, state);
    case UPDATE_CUSTOMER_PHONE:
      return R.assoc('customerPhone', action.payload, state);
    default:
      return state;
  }
}
