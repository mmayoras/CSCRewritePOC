/* eslint-disable max-len */
import {
  updatePinPadRequestType,
  updateEntryMethod,
  setCardSwipedTrue,
  setCardSwipedFalse,
  setCardInsertedTrue,
  setCardInsertedFalse,
  setEMVCardRemovedEarlyTrue,
  setEMVCardRemovedEarlyFalse,
  resetCardActionStatus,
  incrementEMVFallbackCounter,
  resetEMVFallbackCounter,
  setEMVFallbackIndicatorTrue,
  setEMVFallbackIndicatorFalse,
  incrementMSRFallbackCounter,
  resetMSRFallbackCounter,
  setMSRFallbackIndicatorTrue,
  setMSRFallbackIndicatorFalse,
  setSignatureRequiredTrue,
  setSignatureRequiredFalse,
  updateSignatureArray,
  showWaitingForSignatureScreen,
  setSignatureApprovalStatus,
  resetPinPadData,
} from './actionCreators';
import { pinPadReducer } from './pinpadReducer';

const defaultState = {
  entryMethod: '',
  isEmv: false,
  cardSwiped: false,
  cardInserted: false,
  requestType: '',
  emvCardRemovedEarly: false,
  emvFallbackCounter: 0,
  emvFallbackIndicator: false,
  msrFallbackCounter: 0,
  msrFallbackIndicator: false,
  signatureRequired: false,
  signatureArray: [],
  showWaitingForSignatureScreen: false,
  signatureApprovalStatus: 'PENDING',
};

const exampleState = {
  entryMethod: '4',
  isEmv: true,
  cardSwiped: false,
  cardInserted: true,
  requestType: 'DEBIT',
  emvCardRemovedEarly: true,
  emvFallbackCounter: 0,
  emvFallbackIndicator: false,
  msrFallbackCounter: 0,
  msrFallbackIndicator: false,
  signatureRequired: false,
  signatureArray: [],
  showWaitingForSignatureScreen: false,
  signatureApprovalStatus: 'PENDING',
};

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = pinPadReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = {
    entryMethod: 'entrymethod',
    requestType: 'MSRRequest',
    cardSwiped: true,
    cardInserted: true,
    emvCardRemovedEarly: true,
    emvFallbackCounter: 2,
    emvFallbackIndicator: true,
    msrFallbackCounter: 0,
    msrFallbackIndicator: false,
    signatureRequired: false,
    showWaitingForSignatureScreen: false,
    signatureApprovalStatus: 'PENDING',
  };
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = pinPadReducer(state, action);
  expect(value).toEqual(state);
});

test('update request type, returns a new state with updated request type', () => {
  const state = {
    requestType: '',
  };
  const action = updatePinPadRequestType('MSRRequest');
  const value = pinPadReducer(state, action);
  const expectedState = {
    requestType: 'MSRRequest',
  };
  expect(value).toEqual(expectedState);
});

test('update entryMethod with value 1, returns a new state with updated entryMethod and isEmv false', () => {
  const state = {
    entryMethod: '',
  };
  const action = updateEntryMethod('1');
  const value = pinPadReducer(state, action);
  const expectedState = {
    entryMethod: '1',
    isEmv: false,
  };
  expect(value).toEqual(expectedState);
});

test('update entryMethod with value 4, returns a new state with updated entryMethod and isEmv true', () => {
  const state = {
    entryMethod: '',
  };
  const action = updateEntryMethod('4');
  const value = pinPadReducer(state, action);
  const expectedState = {
    entryMethod: '4',
    isEmv: true,
  };
  expect(value).toEqual(expectedState);
});

test('execute setCardInsertedTrue, returns a new state with cardInserted: true', () => {
  const state = {
    cardInserted: false,
  };
  const action = setCardInsertedTrue();
  const value = pinPadReducer(state, action);
  const expectedState = {
    cardInserted: true,
  };
  expect(value).toEqual(expectedState);
});

test('execute setCardInsertedFalse, returns a new state with cardInserted: false', () => {
  const state = {
    cardInserted: true,
  };
  const action = setCardInsertedFalse();
  const value = pinPadReducer(state, action);
  const expectedState = {
    cardInserted: false,
  };
  expect(value).toEqual(expectedState);
});

test('execute setCardSwipedTrue, returns a new state with cardSwiped: true', () => {
  const state = {
    cardSwiped: false,
  };
  const action = setCardSwipedTrue();
  const value = pinPadReducer(state, action);
  const expectedState = {
    cardSwiped: true,
  };
  expect(value).toEqual(expectedState);
});

test('execute setCardSwipedFalse, returns a new state with cardSwiped: false', () => {
  const state = {
    cardSwiped: false,
  };
  const action = setCardSwipedFalse();
  const value = pinPadReducer(state, action);
  const expectedState = {
    cardSwiped: false,
  };
  expect(value).toEqual(expectedState);
});

test('execute setEMVCardRemovedEarlyTrue, returns a new state with ' +
     'emvCardRemovedEarly: true', () => {
  const state = {
    emvCardRemovedEarly: false,
  };
  const action = setEMVCardRemovedEarlyTrue();
  const value = pinPadReducer(state, action);
  const expectedState = {
    emvCardRemovedEarly: true,
  };
  expect(value).toEqual(expectedState);
});

test('execute setEMVCardRemovedEarlyFalse, returns a new state with ' +
     'emvCardRemovedEarly: false', () => {
  const state = {
    emvCardRemovedEarly: true,
  };
  const action = setEMVCardRemovedEarlyFalse();
  const value = pinPadReducer(state, action);
  const expectedState = {
    emvCardRemovedEarly: false,
  };
  expect(value).toEqual(expectedState);
});

test('execute resetCardActionStatus, returns a new state with ' +
     'cardInserted: false, cardSwiped: false, emvFallbackCounter: 0 and msrFallbackCounter: 0', () => {
  const state = {
    cardInserted: true,
    cardSwiped: true,
    emvFallbackCounter: 3,
    msrFallbackCounter: 2,
  };
  const action = resetCardActionStatus();
  const value = pinPadReducer(state, action);
  const expectedState = {
    cardInserted: false,
    cardSwiped: false,
    emvFallbackCounter: 0,
    msrFallbackCounter: 0,
  };
  expect(value).toEqual(expectedState);
});

test('execute incrementEMVFallbackCounter, returns a new state with ' +
     'emvFallbackCounter one higher than before', () => {
  const state = {
    emvFallbackCounter: 0,
  };
  const action = incrementEMVFallbackCounter();
  const value = pinPadReducer(state, action);
  const expectedState = {
    emvFallbackCounter: 1,
  };
  expect(value).toEqual(expectedState);
});

test('execute resetEMVFallbackCounter, returns a new state with ' +
     'emvFallbackCounter set to zero', () => {
  const state = {
    emvFallbackCounter: 3,
  };
  const action = resetEMVFallbackCounter();
  const value = pinPadReducer(state, action);
  const expectedState = {
    emvFallbackCounter: 0,
  };
  expect(value).toEqual(expectedState);
});

test('execute setEMVFallbackIndicatorTrue, returns a new state with ' +
     'emvFallbackIndicator: true', () => {
  const state = {
    emvFallbackIndicator: false,
  };
  const action = setEMVFallbackIndicatorTrue();
  const value = pinPadReducer(state, action);
  const expectedState = {
    emvFallbackIndicator: true,
  };
  expect(value).toEqual(expectedState);
});

test('execute setEMVFallbackIndicatorFalse, returns a new state with ' +
     'emvFallbackIndicator: false', () => {
  const state = {
    emvFallbackIndicator: true,
  };
  const action = setEMVFallbackIndicatorFalse();
  const value = pinPadReducer(state, action);
  const expectedState = {
    emvFallbackIndicator: false,
  };
  expect(value).toEqual(expectedState);
});

test('execute incrementMSRFallbackCounter, returns a new state with ' +
     'msrFallbackCounter one higher than before', () => {
  const state = {
    msrFallbackCounter: 0,
  };
  const action = incrementMSRFallbackCounter();
  const value = pinPadReducer(state, action);
  const expectedState = {
    msrFallbackCounter: 1,
  };
  expect(value).toEqual(expectedState);
});

test('execute resetMSRFallbackCounter, returns a new state with ' +
     'msrFallbackCounter set to zero', () => {
  const state = {
    msrFallbackCounter: 2,
  };
  const action = resetMSRFallbackCounter();
  const value = pinPadReducer(state, action);
  const expectedState = {
    msrFallbackCounter: 0,
  };
  expect(value).toEqual(expectedState);
});

test('execute setMSRFallbackIndicatorTrue, returns a new state with ' +
     'msrFallbackIndicator: true', () => {
  const state = {
    msrFallbackIndicator: false,
  };
  const action = setMSRFallbackIndicatorTrue();
  const value = pinPadReducer(state, action);
  const expectedState = {
    msrFallbackIndicator: true,
  };
  expect(value).toEqual(expectedState);
});

test('execute setMSRFallbackIndicatorFalse, returns a new state with ' +
     'msrFallbackIndicator: false', () => {
  const state = {
    msrFallbackIndicator: true,
  };
  const action = setMSRFallbackIndicatorFalse();
  const value = pinPadReducer(state, action);
  const expectedState = {
    msrFallbackIndicator: false,
  };
  expect(value).toEqual(expectedState);
});

test('execute setSignatureRequiredTrue, returns a new state with ' +
     'signatureRequired: true', () => {
  const state = {
    signatureRequired: false,
  };
  const action = setSignatureRequiredTrue();
  const value = pinPadReducer(state, action);
  const expectedState = {
    signatureRequired: true,
  };
  expect(value).toEqual(expectedState);
});

test('execute setSignatureRequiredFalse, returns a new state with ' +
     'signatureRequired: false', () => {
  const state = {
    signatureRequired: true,
  };
  const action = setSignatureRequiredFalse();
  const value = pinPadReducer(state, action);
  const expectedState = {
    signatureRequired: false,
  };
  expect(value).toEqual(expectedState);
});

test('execute updateSignatureArray, returns a new state with ' +
     'signature array', () => {
  const state = {
    signatureArray: [],
  };
  const action = updateSignatureArray([{ x: 1, y: 2 }, { x: 5, y: 9 }]);
  const value = pinPadReducer(state, action);
  const expectedState = {
    signatureArray: [{ x: 1, y: 2 }, { x: 5, y: 9 }],
  };
  expect(value).toEqual(expectedState);
});

test('execute showWaitingForSignatureScreen with true, returns a new state with ' +
    'showWaitingForSignatureScreen: true', () => {
  const state = {
    showWaitingForSignatureScreen: false,
  };
  const action = showWaitingForSignatureScreen(true);
  const value = pinPadReducer(state, action);
  const expectedState = {
    showWaitingForSignatureScreen: true,
  };
  expect(value).toEqual(expectedState);
});

test('execute showWaitingForSignatureScreen with false, returns a new state with ' +
    'showWaitingForSignatureScreen: false', () => {
  const state = {
    showWaitingForSignatureScreen: true,
  };
  const action = showWaitingForSignatureScreen(false);
  const value = pinPadReducer(state, action);
  const expectedState = {
    showWaitingForSignatureScreen: false,
  };
  expect(value).toEqual(expectedState);
});

test('execute setSignatureApprovalStatus with APPROVED, returns a new state with ' +
    'signatureApprovalStatus: APPROVED', () => {
  const state = {
    signatureApprovalStatus: 'PENDING',
  };
  const action = setSignatureApprovalStatus('APPROVED');
  const value = pinPadReducer(state, action);
  const expectedState = {
    signatureApprovalStatus: 'APPROVED',
  };
  expect(value).toEqual(expectedState);
});

test('execute setSignatureApprovalStatus with DECLINED, returns a new state with ' +
    'signatureApprovalStatus: DECLINED', () => {
  const state = {
    signatureApprovalStatus: 'PENDING',
  };
  const action = setSignatureApprovalStatus('DECLINED');
  const value = pinPadReducer(state, action);
  const expectedState = {
    signatureApprovalStatus: 'DECLINED',
  };
  expect(value).toEqual(expectedState);
});

test('execute setSignatureApprovalStatus with PENDING, returns a new state with ' +
    'signatureApprovalStatus: PENDNG', () => {
  const state = {
    signatureApprovalStatus: 'DECLINED',
  };
  const action = setSignatureApprovalStatus('PENDING');
  const value = pinPadReducer(state, action);
  const expectedState = {
    signatureApprovalStatus: 'PENDING',
  };
  expect(value).toEqual(expectedState);
});

test('resetting pinpad data results in default state being set', () => {
  const state = exampleState;
  const action = resetPinPadData();
  const value = pinPadReducer(state, action);
  expect(value).toEqual(defaultState);
});
