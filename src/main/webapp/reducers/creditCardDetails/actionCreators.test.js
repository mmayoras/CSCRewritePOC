/* eslint-disable arrow-body-style */
import {
  RECEIVE_CREDIT_AUTH_FAILURE,
  RECEIVE_CREDIT_AUTH_SUCCESS,
  RECEIVE_XREF_FAILURE,
  RECEIVE_XREF_SUCCESS,
  MAKING_CREDIT_AUTH_REQUEST,
  MAKING_XREF_REQUEST,
  UPDATE_BUYER_ID,
  UPDATE_PURCHASE_ORDER,
  UPDATE_EXPIRY_DATE,
  UPDATE_ZIP_CODE,
  UPDATE_SECURITY_CODE,
  UPDATE_PRIMARY_ACCOUNT_NUMBER,
  RESET_CARD_DETAILS,
  RESET_CARD_DETAILS_EXCEPT_PAN,
} from './actionTypes';
import {
  updatePrimaryAccountNumber,
  updateExpiryDate,
  updateSecurityCode,
  updateBuyerId,
  updatePurchaseOrder,
  updateZipCode,
  makingXrefRequest,
  receiveXrefSuccess,
  receiveXrefFailure,
  makingCreditAuthRequest,
  receiveCreditAuthSuccess,
  receiveCreditAuthFailure,
  resetCardDetails,
  resetCardDetailsExceptPAN,
} from './actionCreators';

test('primary account number can be updated', () => {
  const actual = updatePrimaryAccountNumber('4012000011113333');
  expect(actual).toEqual({
    payload: '4012000011113333',
    type: UPDATE_PRIMARY_ACCOUNT_NUMBER,
  });
});

test('card expiration date can be updated', () => {
  const actual = updateExpiryDate('10 / 19');
  expect(actual).toEqual({
    payload: '10 / 19',
    type: UPDATE_EXPIRY_DATE,
  });
});

test('card security code can be updated', () => {
  const actual = updateSecurityCode('123');
  expect(actual).toEqual({
    payload: '123',
    type: UPDATE_SECURITY_CODE,
  });
});

test('buyer id can be updated', () => {
  const actual = updateBuyerId('101010');
  expect(actual).toEqual({
    payload: '101010',
    type: UPDATE_BUYER_ID,
  });
});

test('purchase order number can be updated', () => {
  const actual = updatePurchaseOrder('101010');
  expect(actual).toEqual({
    payload: '101010',
    type: UPDATE_PURCHASE_ORDER,
  });
});

test('card zip code can be updated', () => {
  const actual = updateZipCode('30318');
  expect(actual).toEqual({
    payload: '30318',
    type: UPDATE_ZIP_CODE,
  });
});

test('making xref request sends this action', () => {
  const actual = makingXrefRequest();
  expect(actual).toEqual({
    type: MAKING_XREF_REQUEST,
  });
});

test('receiving a successful xref response sends this action', () => {
  const actual = receiveXrefSuccess('xrefNumber', 'HD', 'HR');
  expect(actual).toEqual({
    xref: 'xrefNumber',
    paymtMethCode: 'HD',
    rptPaymtMethCode: 'HR',
    type: RECEIVE_XREF_SUCCESS,
  });
});

test('receiving a failed xref response sends this action', () => {
  const actual = receiveXrefFailure();
  expect(actual).toEqual({
    type: RECEIVE_XREF_FAILURE,
  });
});

test('making xref request sends this action', () => {
  const actual = makingCreditAuthRequest();
  expect(actual).toEqual({
    type: MAKING_CREDIT_AUTH_REQUEST,
  });
});

test('receiving a successful xref response sends this action', () => {
  const actual = receiveCreditAuthSuccess();
  expect(actual).toEqual({
    type: RECEIVE_CREDIT_AUTH_SUCCESS,
  });
});

test('receiving a failed xref response sends this action', () => {
  const actual = receiveCreditAuthFailure();
  expect(actual).toEqual({
    type: RECEIVE_CREDIT_AUTH_FAILURE,
  });
});

test('executing resetCardDetails sends this action', () => {
  const actual = resetCardDetails();
  expect(actual).toEqual({
    type: RESET_CARD_DETAILS,
  });
});

test('executing resetCardDetailsExceptPAN sends this action', () => {
  const actual = resetCardDetailsExceptPAN();
  expect(actual).toEqual({
    type: RESET_CARD_DETAILS_EXCEPT_PAN,
  });
});
