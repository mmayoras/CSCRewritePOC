/* eslint-disable no-console, arrow-body-style */
import {
  UPDATE_BUYER_ID,
  UPDATE_PURCHASE_ORDER,
  UPDATE_EXPIRY_DATE,
  UPDATE_PRIMARY_ACCOUNT_NUMBER,
  UPDATE_SECURITY_CODE,
  UPDATE_ZIP_CODE,
  MAKING_XREF_REQUEST,
  RECEIVE_XREF_SUCCESS,
  RECEIVE_XREF_FAILURE,
  MAKING_CREDIT_AUTH_REQUEST,
  RECEIVE_CREDIT_AUTH_SUCCESS,
  RECEIVE_CREDIT_AUTH_FAILURE,
  RESET_CARD_DETAILS,
  RESET_CARD_DETAILS_EXCEPT_PAN,
} from './actionTypes';

export function updatePrimaryAccountNumber(payload) {
  return {
    type: UPDATE_PRIMARY_ACCOUNT_NUMBER,
    payload,
  };
}
export function updateExpiryDate(payload) {
  return {
    type: UPDATE_EXPIRY_DATE,
    payload,
  };
}
export function updateSecurityCode(payload) {
  return {
    type: UPDATE_SECURITY_CODE,
    payload,
  };
}
export function updatePurchaseOrder(payload) {
  return {
    type: UPDATE_PURCHASE_ORDER,
    payload,
  };
}
export function updateBuyerId(payload) {
  return {
    type: UPDATE_BUYER_ID,
    payload,
  };
}
export function updateZipCode(payload) {
  return {
    type: UPDATE_ZIP_CODE,
    payload,
  };
}
export function makingXrefRequest() {
  return {
    type: MAKING_XREF_REQUEST,
  };
}
export function receiveXrefSuccess(xref, paymtMethCode, rptPaymtMethCode) {
  return {
    type: RECEIVE_XREF_SUCCESS,
    xref,
    paymtMethCode,
    rptPaymtMethCode,
  };
}
export function receiveXrefFailure() {
  return {
    type: RECEIVE_XREF_FAILURE,
  };
}
export function makingCreditAuthRequest() {
  return {
    type: MAKING_CREDIT_AUTH_REQUEST,
  };
}
export function receiveCreditAuthSuccess() {
  return {
    type: RECEIVE_CREDIT_AUTH_SUCCESS,
  };
}
export function receiveCreditAuthFailure() {
  return {
    type: RECEIVE_CREDIT_AUTH_FAILURE,
  };
}

export function resetCardDetails() {
  return {
    type: RESET_CARD_DETAILS,
  };
}

export function resetCardDetailsExceptPAN() {
  // This is useful for if a user changes PAN of an entered card. If all details
  //   are reset, user can't enter card number.
  return {
    type: RESET_CARD_DETAILS_EXCEPT_PAN,
  };
}
