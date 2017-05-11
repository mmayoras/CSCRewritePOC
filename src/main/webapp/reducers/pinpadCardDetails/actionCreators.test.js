/* eslint-disable quote-props */

import {
  resetCardDetails,
  updatePrimaryAccountNumber,
  updateExpiryDate,
  updateSecurityCode,
  updateBuyerId,
  updateZipCode,
  updatePurchaseOrder,
  makingXrefRequest,
  receiveXrefSuccess,
  receiveXrefFailure,
  makingCreditAuthRequest,
  makingCreditAuthSimpleReversalRequest,
  receiveCreditAuthReversalSuccess,
  receiveCreditAuthReversalFailure,
  receiveCreditAuthSuccess,
  receiveCreditAuthFailure,
  updateEncryptedPin,
  updateDukptSmid,
  updatePOSEntryMode,
  updateCardSequenceNumber,
  updateEMVTagsGoOnline,
  updateEMVTagsFromHost,
  // isDebitCard,
  updateEtbString,
  updateTrack1Data,
  updateTrack2Data,
} from './actionCreators';

import {
  MAKING_PINPAD_XREF_REQUEST,
  RECEIVE_PINPAD_XREF_SUCCESS,
  RECEIVE_PINPAD_XREF_FAILURE,
  MAKING_PINPAD_CREDIT_AUTH_REQUEST,
  MAKING_PINPAD_CREDIT_AUTH_SIMPLE_REVERSAL_REQUEST,
  RECEIVE_PINPAD_CREDIT_AUTH_REVERSAL_SUCCESS,
  RECEIVE_PINPAD_CREDIT_AUTH_REVERSAL_FAILURE,
  RECEIVE_PINPAD_CREDIT_AUTH_SUCCESS,
  RECEIVE_PINPAD_CREDIT_AUTH_FAILURE,
  RESET_CARD_DETAILS,
  UPDATE_BUYER_ID,
  UPDATE_EXPIRY_DATE,
  UPDATE_ZIP_CODE,
  UPDATE_SECURITY_CODE,
  UPDATE_PRIMARY_ACCOUNT_NUMBER,
  UPDATE_ENCRYPTED_PIN,
  UPDATE_DUKPT_SMID,
  UPDATE_POS_ENTRY_MODE,
  UPDATE_CARD_SEQUENCE_NUMBER,
  UPDATE_EMV_TAGS_GO_ONLINE,
  UPDATE_EMV_TAGS_FROM_HOST,
  UPDATE_ETB_STRING,
  UPDATE_TRACK1_DATA,
  UPDATE_TRACK2_DATA,
  UPDATE_PURCHASE_ORDER,
} from './actionTypes';

// const module = require('./actionCreators');

test('executing resetCardDetails returns this action', () => {
  const actual = resetCardDetails();
  expect(actual).toEqual({
    type: RESET_CARD_DETAILS,
  });
});

test('primary account number can be updated', () => {
  const actual = updatePrimaryAccountNumber('4012000011113333');
  expect(actual).toEqual({
    primaryAccountNumber: '4012000011113333',
    type: UPDATE_PRIMARY_ACCOUNT_NUMBER,
  });
});

test('card expiration date can be updated', () => {
  const actual = updateExpiryDate('10 / 19');
  expect(actual).toEqual({
    expiry: '10 / 19',
    type: UPDATE_EXPIRY_DATE,
  });
});

test('card security code can be updated', () => {
  const actual = updateSecurityCode('123');
  expect(actual).toEqual({
    securityCode: '123',
    type: UPDATE_SECURITY_CODE,
  });
});

test('buyer id can be updated', () => {
  const actual = updateBuyerId('101010');
  expect(actual).toEqual({
    buyerId: '101010',
    type: UPDATE_BUYER_ID,
  });
});

test('card zip code can be updated', () => {
  const actual = updateZipCode('30318');
  expect(actual).toEqual({
    zipCode: '30318',
    type: UPDATE_ZIP_CODE,
  });
});

test('updating encrypted pin sends this action', () => {
  const actual = updateEncryptedPin('encryptedpin');
  expect(actual).toEqual({
    type: UPDATE_ENCRYPTED_PIN,
    encryptedPin: 'encryptedpin',
  });
});

test('updating dukpt smid sends this action', () => {
  const actual = updateDukptSmid('dukptsmid');
  expect(actual).toEqual({
    type: UPDATE_DUKPT_SMID,
    dukptSmid: 'dukptsmid',
  });
});

test('updating posEntryMode sends this action', () => {
  const actual = updatePOSEntryMode('posEntryMode');
  expect(actual).toEqual({
    type: UPDATE_POS_ENTRY_MODE,
    posEntryMode: 'posEntryMode',
  });
});

test('updating cardSequenceNumber sends this action', () => {
  const actual = updateCardSequenceNumber('cardSequenceNumber');
  expect(actual).toEqual({
    type: UPDATE_CARD_SEQUENCE_NUMBER,
    cardSequenceNumber: 'cardSequenceNumber',
  });
});

test('updating emvTagsGoOnline sends this action', () => {
  const actual = updateEMVTagsGoOnline('emvtags');
  expect(actual).toEqual({
    type: UPDATE_EMV_TAGS_GO_ONLINE,
    emvTagsGoOnline: 'emvtags',
  });
});

test('updating emvTagsFromHost sends this action', () => {
  const actual = updateEMVTagsFromHost('emvTagsFromHost');
  expect(actual).toEqual({
    type: UPDATE_EMV_TAGS_FROM_HOST,
    emvTagsFromHost: 'emvTagsFromHost',
  });
});

test('update ETB string', () => {
  const actual = updateEtbString('cvghu765rfg');
  expect(actual).toEqual({
    type: UPDATE_ETB_STRING,
    etb: 'cvghu765rfg',
  });
});

test('update track1Data', () => {
  const actual = updateTrack1Data('345678i9oiujhgf');
  expect(actual).toEqual({
    type: UPDATE_TRACK1_DATA,
    track1Data: '345678i9oiujhgf',
  });
});

test('update track2Data', () => {
  const actual = updateTrack2Data('09876543');
  expect(actual).toEqual({
    type: UPDATE_TRACK2_DATA,
    track2Data: '09876543',
  });
});

test('update purchaseOrder', () => {
  const actual = updatePurchaseOrder('12345');
  expect(actual).toEqual({
    type: UPDATE_PURCHASE_ORDER,
    purchaseOrder: '12345',
  });
});

test('making xref request sends this action', () => {
  const actual = makingXrefRequest();
  expect(actual).toEqual({
    type: MAKING_PINPAD_XREF_REQUEST,
  });
});


test('receiving a successful xref response sends this action', () => {
  const actual = receiveXrefSuccess('VI', 'VD', 'xrefNumber', 'VC', true);
  expect(actual).toEqual({
    paymtMethCode: 'VI',
    rptPaymtMethCode: 'VD',
    type: RECEIVE_PINPAD_XREF_SUCCESS,
    xref: 'xrefNumber',
    crHostId: 'VC',
    isPrepaidCard: true,
  });
});

test('receiving a failed xref response sends this action', () => {
  const actual = receiveXrefFailure();
  expect(actual).toEqual({
    type: RECEIVE_PINPAD_XREF_FAILURE,
  });
});

test('making credit auth request sends this action', () => {
  const actual = makingCreditAuthRequest();
  expect(actual).toEqual({
    type: MAKING_PINPAD_CREDIT_AUTH_REQUEST,
  });
});

test('making credit auth simple reversal request sends this action', () => {
  const actual = makingCreditAuthSimpleReversalRequest();
  expect(actual).toEqual({
    type: MAKING_PINPAD_CREDIT_AUTH_SIMPLE_REVERSAL_REQUEST,
  });
});

test('receiving a successful credit auth response sends this action', () => {
  const actual = receiveCreditAuthSuccess();
  expect(actual).toEqual({
    type: RECEIVE_PINPAD_CREDIT_AUTH_SUCCESS,
  });
});

test('receiving a successful credit auth simple reversal response sends this action', () => {
  const actual = receiveCreditAuthReversalSuccess();
  expect(actual).toEqual({
    type: RECEIVE_PINPAD_CREDIT_AUTH_REVERSAL_SUCCESS,
  });
});

test('receiving a failed credit auth response sends this action', () => {
  const actual = receiveCreditAuthFailure();
  expect(actual).toEqual({
    type: RECEIVE_PINPAD_CREDIT_AUTH_FAILURE,
  });
});

test('receiving a failed credit auth simple reversal response sends this action', () => {
  const actual = receiveCreditAuthReversalFailure();
  expect(actual).toEqual({
    type: RECEIVE_PINPAD_CREDIT_AUTH_REVERSAL_FAILURE,
  });
});
