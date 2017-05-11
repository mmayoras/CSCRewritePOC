import {
  UPDATE_CUSTOMER_NAME,
  UPDATE_CUSTOMER_PHONE,
} from './actionTypes';

export function updateCustomerName(payload) {
  return {
    type: UPDATE_CUSTOMER_NAME,
    payload,
  };
}

export function updateCustomerPhone(payload) {
  return {
    type: UPDATE_CUSTOMER_PHONE,
    payload,
  };
}
