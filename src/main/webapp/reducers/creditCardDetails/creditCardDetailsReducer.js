/* eslint-disable import/prefer-default-export */
import R from 'ramda';
import {
  UPDATE_PRIMARY_ACCOUNT_NUMBER,
  UPDATE_SECURITY_CODE,
  UPDATE_ZIP_CODE,
  UPDATE_BUYER_ID,
  UPDATE_PURCHASE_ORDER,
  UPDATE_EXPIRY_DATE,
  MAKING_CREDIT_AUTH_REQUEST,
  MAKING_XREF_REQUEST,
  RECEIVE_XREF_FAILURE,
  RECEIVE_XREF_SUCCESS,
  RECEIVE_CREDIT_AUTH_SUCCESS,
  RECEIVE_CREDIT_AUTH_FAILURE,
  RESET_CARD_DETAILS,
  RESET_CARD_DETAILS_EXCEPT_PAN,
} from './actionTypes';

const defaultState = {
  buyerId: '',
  expiry: '',
  purchaseOrder: '',
  securityCode: '',
  zipCode: '',
  xref: '',
  primaryAccountNumber: '',
  isFetchingXref: false,
  isFetchingCreditAuth: false,
  paymtMethCode: '',
  rptPaymtMethCode: '',
};

// defaultState and defaultStateWithoutPAN are seperate since when users are
//   changing their card number we want to reset all card data without hindering
//   them from typing. Resetting PAN would make every change that doesn't pass
//   Luhn result in a blank field - never allowing user input.
const defaultStateWithoutPAN = {
  buyerId: '',
  expiry: '',
  purchaseOrder: '',
  securityCode: '',
  zipCode: '',
  xref: '',
  isFetchingXref: false,
  isFetchingCreditAuth: false,
  paymtMethCode: '',
  rptPaymtMethCode: '',
};

export function creditCardDetailsReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_PRIMARY_ACCOUNT_NUMBER:
      return R.assoc('primaryAccountNumber', action.payload, state);
    case UPDATE_EXPIRY_DATE:
      return R.assoc('expiry', action.payload, state);
    case UPDATE_SECURITY_CODE:
      return R.assoc('securityCode', action.payload, state);
    case UPDATE_BUYER_ID:
      return R.assoc('buyerId', action.payload, state);
    case UPDATE_PURCHASE_ORDER:
      return R.assoc('purchaseOrder', action.payload, state);
    case UPDATE_ZIP_CODE:
      return R.assoc('zipCode', action.payload, state);
    case MAKING_XREF_REQUEST:
      return R.assoc('isFetchingXref', true, state);
    case RECEIVE_XREF_SUCCESS:
      return Object.assign({}, state, {
        isFetchingXref: false,
        xref: action.xref,
        paymtMethCode: action.paymtMethCode,
        rptPaymtMethCode: action.rptPaymtMethCode,
      });
    case RECEIVE_XREF_FAILURE:
      return R.assoc('isFetchingXref', false, state);
    case MAKING_CREDIT_AUTH_REQUEST:
      return R.assoc('isFetchingCreditAuth', true, state);
    case RECEIVE_CREDIT_AUTH_SUCCESS:
      return R.assoc('isFetchingCreditAuth', false, state);
    case RECEIVE_CREDIT_AUTH_FAILURE:
      return R.assoc('isFetchingCreditAuth', false, state);
    case RESET_CARD_DETAILS:
      return Object.assign({}, state, defaultState);
    case RESET_CARD_DETAILS_EXCEPT_PAN:
      return Object.assign({}, state, defaultStateWithoutPAN);
    default:
      return state;
  }
}
