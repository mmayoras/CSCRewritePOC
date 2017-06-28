import {
  pinpadCardDetailsReducer,
} from './pinpadCardDetailsReducer';
import {
  UPDATE_PRIMARY_ACCOUNT_NUMBER,
  UPDATE_SECURITY_CODE,
  UPDATE_ZIP_CODE,
  UPDATE_BUYER_ID,
  UPDATE_EXPIRY_DATE,
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
  MAKING_PINPAD_XREF_REQUEST,
  RECEIVE_PINPAD_XREF_FAILURE,
  RECEIVE_PINPAD_XREF_SUCCESS,
  MAKING_PINPAD_CREDIT_AUTH_REQUEST,
  RECEIVE_PINPAD_CREDIT_AUTH_SUCCESS,
  RECEIVE_PINPAD_CREDIT_AUTH_FAILURE,
  RESET_CARD_DETAILS,
} from './actionTypes';

const defaultState = {
  buyerId: '',
  expiry: '',
  emvTagsGoOnline: '',
  emvTagsFromHost: '',
  etb: '',
  primaryAccountNumber: '',
  securityCode: '',
  zipCode: '',
  dukptSmid: '',
  posEntryMode: '',
  cardSequenceNumber: '',
  encryptedPin: '',
  isFetchingCreditAuth: false,
  isFetchingXref: false,
  isPrepaidCard: false,
  paymtMethCode: '',
  rptPaymtMethCode: '',
  xref: '',
  crHostId: '',
  track1Data: '',
  track2Data: '',
  purchaseOrder: '',
};

const exampleState = {
  buyerId: '11110',
  expiry: '12 / 20',
  emvTagsGoOnline: 'emvtags',
  emvTagsFromHost: 'emvTagsFromHost',
  etb: 'etb',
  primaryAccountNumber: '4012000077777777',
  securityCode: '123',
  zipCode: '30339',
  dukptSmid: 'dukpt',
  posEntryMode: 'posentrymode',
  cardSequenceNumber: 'cardsequencenumber',
  encryptedPin: '654',
  isFetchingCreditAuth: false,
  isFetchingXref: false,
  isPrepaidCard: false,
  paymtMethCode: 'VI',
  rptPaymtMethCode: 'VD',
  xref: '1025456321777777',
  crHostId: 'CRHOST',
  track1Data: 'track1data',
  track2Data: 'track2data',
  purchaseOrder: '12345',
};

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = pinpadCardDetailsReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = exampleState;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = pinpadCardDetailsReducer(state, action);
  expect(value).toEqual(state);
});

test('resetting card details results in default state being set', () => {
  const state = exampleState;
  const action = {
    type: RESET_CARD_DETAILS,
  };
  const value = pinpadCardDetailsReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('update PAN, returns a new state with updated PAN', () => {
  const state = {
    primaryAccountNumber: '',
  };
  const action = {
    type: UPDATE_PRIMARY_ACCOUNT_NUMBER,
    primaryAccountNumber: '4012000077777777',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    primaryAccountNumber: '4012000077777777',
  };
  expect(value).toEqual(expectedState);
});

test('update card expiry date, returns a new state with updated card expiry date', () => {
  const state = {
    expiry: '',
  };
  const action = {
    type: UPDATE_EXPIRY_DATE,
    expiry: '12 / 20',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    expiry: '12 / 20',
  };
  expect(value).toEqual(expectedState);
});

test('update security code, returns a new state with updated security code', () => {
  const state = {
    securityCode: '',
  };
  const action = {
    type: UPDATE_SECURITY_CODE,
    securityCode: '123',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    securityCode: '123',
  };
  expect(value).toEqual(expectedState);
});

test('update buyer id, returns a new state with updated buyer id', () => {
  const state = {
    buyerId: '',
  };
  const action = {
    type: UPDATE_BUYER_ID,
    buyerId: '11110',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    buyerId: '11110',
  };
  expect(value).toEqual(expectedState);
});

test('update card zip code, returns a new state with updated card zip code', () => {
  const state = {
    zipCode: '',
  };
  const action = {
    type: UPDATE_ZIP_CODE,
    zipCode: '30339',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    zipCode: '30339',
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action UPDATE_ENCRYPTED_PIN', () => {
  const state = {
    encryptedPin: '',
  };
  const action = {
    type: UPDATE_ENCRYPTED_PIN,
    encryptedPin: 'testpin',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    encryptedPin: 'testpin',
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action UPDATE_DUKPT_SMID', () => {
  const state = {
    dukptSmid: '',
  };
  const action = {
    type: UPDATE_DUKPT_SMID,
    dukptSmid: 'dukptsmid',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    dukptSmid: 'dukptsmid',
  };
  expect(value).toEqual(expectedState);
});

test('update etb, returns a new state with updated etb', () => {
  const state = {
    etb: '',
  };
  const action = {
    type: UPDATE_ETB_STRING,
    etb: 'etb',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    etb: 'etb',
  };
  expect(value).toEqual(expectedState);
});


test('update track1Data, returns a new state with updated track1Data', () => {
  const state = {
    track1Data: '',
  };
  const action = {
    type: UPDATE_TRACK1_DATA,
    track1Data: 'track1data',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    track1Data: 'track1data',
  };
  expect(value).toEqual(expectedState);
});


test('update track2Data, returns a new state with updated track2Data', () => {
  const state = {
    track2Data: '',
  };
  const action = {
    type: UPDATE_TRACK2_DATA,
    track2Data: 'track2data',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    track2Data: 'track2data',
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action MAKING_PINPAD_XREF_REQUEST', () => {
  const state = {
    isFetchingXref: false,
    paymtMethCode: '',
    xref: '',
    crHostId: '',
    isPrepaidCard: false,
  };
  const action = {
    type: MAKING_PINPAD_XREF_REQUEST,
    payload: null,
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingXref: true,
    paymtMethCode: '',
    xref: '',
    crHostId: '',
    isPrepaidCard: false,
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action RECEIVE_PINPAD_XREF_FAILURE', () => {
  const state = {
    isFetchingXref: true,
    paymtMethCode: '',
    xref: '',
    crHostId: '',
    isPrepaidCard: false,
  };
  const action = {
    type: RECEIVE_PINPAD_XREF_FAILURE,
    payload: null,
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingXref: false,
    paymtMethCode: '',
    xref: '',
    crHostId: '',
    isPrepaidCard: false,
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action RECEIVE_PINPAD_XREF_SUCCESS', () => {
  const state = {
    isFetchingXref: true,
    paymtMethCode: '',
    rptPaymtMethCode: '',
    xref: '',
    crHostId: '',
    isPrepaidCard: false,
  };
  const action = {
    type: RECEIVE_PINPAD_XREF_SUCCESS,
    paymtMethCode: 'VI',
    rptPaymtMethCode: 'VD',
    xref: '1012220303033944',
    crHostId: 'VC',
    isPrepaidCard: true,
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingXref: false,
    paymtMethCode: 'VI',
    rptPaymtMethCode: 'VD',
    xref: '1012220303033944',
    crHostId: 'VC',
    isPrepaidCard: true,
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action MAKING_PINPAD_CREDIT_AUTH_REQUEST', () => {
  const state = {
    isFetchingCreditAuth: false,
  };
  const action = {
    type: MAKING_PINPAD_CREDIT_AUTH_REQUEST,
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingCreditAuth: true,
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action RECEIVE_PINPAD_CREDIT_AUTH_SUCCESS', () => {
  const state = {
    isFetchingCreditAuth: true,
  };
  const action = {
    type: RECEIVE_PINPAD_CREDIT_AUTH_SUCCESS,
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingCreditAuth: false,
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action RECEIVE_PINPAD_CREDIT_AUTH_FAILURE', () => {
  const state = {
    isFetchingCreditAuth: true,
  };
  const action = {
    type: RECEIVE_PINPAD_CREDIT_AUTH_FAILURE,
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    isFetchingCreditAuth: false,
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action UPDATE_POS_ENTRY_MODE', () => {
  const state = {
    posEntryMode: '',
  };
  const action = {
    type: UPDATE_POS_ENTRY_MODE,
    posEntryMode: 'posentrymode',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    posEntryMode: 'posentrymode',
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action UPDATE_CARD_SEQUENCE_NUMBER', () => {
  const state = {
    cardSequenceNumber: '',
  };
  const action = {
    type: UPDATE_CARD_SEQUENCE_NUMBER,
    cardSequenceNumber: 'cardsequencenumber',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    cardSequenceNumber: 'cardsequencenumber',
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action UPDATE_EMV_TAGS_GO_ONLINE', () => {
  const state = {
    emvTagsGoOnline: '',
  };
  const action = {
    type: UPDATE_EMV_TAGS_GO_ONLINE,
    emvTagsGoOnline: 'emvtags',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    emvTagsGoOnline: 'emvtags',
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action UPDATE_EMV_TAGS_FROM_HOST', () => {
  const state = {
    emvTagsFromHost: '',
  };
  const action = {
    type: UPDATE_EMV_TAGS_FROM_HOST,
    emvTagsFromHost: 'emvTagsFromHost',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    emvTagsFromHost: 'emvTagsFromHost',
  };
  expect(value).toEqual(expectedState);
});

test('testing pinpadCardDetailsReducer action UPDATE_PURCHASE_ORDER', () => {
  const state = {
    purchaseOrder: '',
  };
  const action = {
    type: UPDATE_PURCHASE_ORDER,
    purchaseOrder: 'purchaseOrder',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    purchaseOrder: 'purchaseOrder',
  };
  expect(value).toEqual(expectedState);
});
