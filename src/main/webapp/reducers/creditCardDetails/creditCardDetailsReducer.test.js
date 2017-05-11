/* eslint-disable max-len */
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
import { creditCardDetailsReducer } from './creditCardDetailsReducer';

const defaultState = {
  buyerId: '',
  purchaseOrder: '',
  expiry: '',
  primaryAccountNumber: '',
  securityCode: '',
  zipCode: '',
  xref: '',
  isFetchingXref: false,
  isFetchingCreditAuth: false,
  paymtMethCode: '',
  rptPaymtMethCode: '',
};

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = creditCardDetailsReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = {
    buyerId: '123',
    purchaseOrder: 'PO',
    expiry: '12/24',
    primaryAccountNumber: '10123013497928234',
    securityCode: '123',
    zipCode: '',
    xref: '',
    isFetchingXref: false,
    isFetchingCreditAuth: false,
    paymtMethCode: 'HD',
    rptPaymtMethCode: 'HR',
  };
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = creditCardDetailsReducer(state, action);
  expect(value).toEqual(state);
});

test('update PAN, returns a new state with updated PAN', () => {
  const state = {
    primaryAccountNumber: '',
  };
  const action = updatePrimaryAccountNumber('4012000077777777');
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    primaryAccountNumber: '4012000077777777',
  };
  expect(value).toEqual(expectedState);
});

test('update card expiry date, returns a new state with updated card expiry date', () => {
  const state = {
    expiry: '',
  };
  const action = updateExpiryDate('12 / 20');
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    expiry: '12 / 20',
  };
  expect(value).toEqual(expectedState);
});

test('update security code, returns a new state with updated security code', () => {
  const state = {
    securityCode: '',
  };
  const action = updateSecurityCode('123');
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    securityCode: '123',
  };
  expect(value).toEqual(expectedState);
});

test('update buyer id, returns a new state with updated buyer id', () => {
  const state = {
    buyerId: '',
  };
  const action = updateBuyerId('11110');
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    buyerId: '11110',
  };
  expect(value).toEqual(expectedState);
});

test('update purchase order, returns a new state with updated purchase order', () => {
  const state = {
    purchaseOrder: '',
  };
  const action = updatePurchaseOrder('PO');
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    purchaseOrder: 'PO',
  };
  expect(value).toEqual(expectedState);
});

test('update card zip code, returns a new state with updated card zip code', () => {
  const state = {
    zipCode: '',
  };
  const action = updateZipCode('30318');
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    zipCode: '30318',
  };
  expect(value).toEqual(expectedState);
});

// TODO: Write tests for Xref and Credit Auth Reducers
test('making an xrefRequest updates the isFetchingXref value to true', () => {
  const state = {
    isFetchingXref: false,
  };
  const action = makingXrefRequest();
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingXref: true,
  };
  expect(value).toEqual(expectedState);
});

test('a successful xref response updates the isFetchingXref to false and sets xref, paymtMethCode, and rptPaymtMethCode values', () => {
  const state = {
    isFetchingXref: true,
    paymtMethCode: '',
    rptPaymtMethCode: '',
  };
  const action = receiveXrefSuccess('1012000077777777', 'HD', 'HR');
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingXref: false,
    xref: '1012000077777777',
    paymtMethCode: 'HD',
    rptPaymtMethCode: 'HR',
  };
  expect(value).toEqual(expectedState);
});

test('a failed xref response updates the isFetchingXref to false', () => {
  const state = {
    isFetchingXref: true,
  };
  const action = receiveXrefFailure();
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingXref: false,
  };
  expect(value).toEqual(expectedState);
});

test('making a creditAuth request updates the isFetchingCreditAuth value to true', () => {
  const state = {
    isFetchingCreditAuth: false,
  };
  const action = makingCreditAuthRequest();
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingCreditAuth: true,
  };
  expect(value).toEqual(expectedState);
});

test('a successful creditAuth response sets isFetchingCreditAuth to false', () => {
  const state = {
    isFetchingCreditAuth: true,
  };
  const action = receiveCreditAuthSuccess();
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingCreditAuth: false,
  };
  expect(value).toEqual(expectedState);
});

test('a failed creditAuth response updates the isFetchingCreditAuth to false', () => {
  const state = {
    isFetchingCreditAuth: true,
  };
  const action = receiveCreditAuthFailure();
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingCreditAuth: false,
  };
  expect(value).toEqual(expectedState);
});

test('resetCardDetails should set state to defaultState', () => {
  const state = {
    buyerId: '123',
    purchaseOrder: 'PO',
    expiry: '12/24',
    primaryAccountNumber: '10123013497928234',
    securityCode: '123',
    zipCode: '',
    xref: '',
    isFetchingXref: false,
    isFetchingCreditAuth: false,
    paymtMethCode: 'HD',
    rptPaymtMethCode: 'HR',
  };
  const action = resetCardDetails();
  const value = creditCardDetailsReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('resetCardDetailsExceptPAN should set state to defaultState without changing PAN', () => {
  const state = {
    buyerId: '123',
    purchaseOrder: 'PO',
    expiry: '12/24',
    primaryAccountNumber: '10123013497928234',
    securityCode: '123',
    zipCode: '',
    xref: '',
    isFetchingXref: false,
    isFetchingCreditAuth: false,
    paymtMethCode: 'HD',
    rptPaymtMethCode: 'HR',
  };
  const action = resetCardDetailsExceptPAN();
  const value = creditCardDetailsReducer(state, action);
  const expectedState = {
    buyerId: '',
    purchaseOrder: '',
    expiry: '',
    primaryAccountNumber: '10123013497928234',
    securityCode: '',
    zipCode: '',
    xref: '',
    isFetchingXref: false,
    isFetchingCreditAuth: false,
    paymtMethCode: '',
    rptPaymtMethCode: '',
  };
  expect(value).toEqual(expectedState);
});
