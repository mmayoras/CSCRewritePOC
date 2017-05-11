/* eslint-disable import/prefer-default-export */
import R from 'ramda';

import {
  UPDATE_ADDRESS__LINE_1,
  UPDATE_ADDRESS__LINE_2,
  UPDATE_ADDRESS__CITY,
  UPDATE_ADDRESS__STATE,
  UPDATE_ADDRESS__ZIP_CODE,
  UPDATE_ADDRESS__COUNTRY_CODE,
} from './actionTypes';

const defaultState = {
  addressLine1: '',
  addressLine2: '',
  city: '',
  countryCode: 'US',
  state: '',
  zipCode: '',
};

export function billingAddressReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_ADDRESS__LINE_1:
      return R.assoc('addressLine1', action.payload, state);
    case UPDATE_ADDRESS__LINE_2:
      return R.assoc('addressLine2', action.payload, state);
    case UPDATE_ADDRESS__CITY:
      return R.assoc('city', action.payload, state);
    case UPDATE_ADDRESS__STATE:
      return R.assoc('state', action.payload, state);
    case UPDATE_ADDRESS__ZIP_CODE:
      return R.assoc('zipCode', action.payload, state);
    case UPDATE_ADDRESS__COUNTRY_CODE:
      return R.assoc('countryCode', action.payload, state);
    default:
      return state;
  }
}
