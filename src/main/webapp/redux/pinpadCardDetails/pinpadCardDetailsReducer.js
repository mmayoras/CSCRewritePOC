/* eslint-disable import/prefer-default-export */
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
  paymtMethCode: '',
  rptPaymtMethCode: '',
  xref: '',
  crHostId: '',
  encryptedPin: '',
  dukptSmid: '',
  posEntryMode: '',
  cardSequenceNumber: '',
  isFetchingCreditAuth: false,
  isFetchingXref: false,
  track1Data: '',
  track2Data: '',
  isPrepaidCard: false,
  purchaseOrder: '',
};

export function pinpadCardDetailsReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_PRIMARY_ACCOUNT_NUMBER:
      return Object.assign({}, state, { primaryAccountNumber: action.primaryAccountNumber });
    case UPDATE_EXPIRY_DATE:
      return Object.assign({}, state, { expiry: action.expiry });
    case UPDATE_SECURITY_CODE:
      return Object.assign({}, state, { securityCode: action.securityCode });
    case UPDATE_BUYER_ID:
      return Object.assign({}, state, { buyerId: action.buyerId });
    case UPDATE_ZIP_CODE:
      return Object.assign({}, state, { zipCode: action.zipCode });
    case UPDATE_ENCRYPTED_PIN:
      return Object.assign({}, state, { encryptedPin: action.encryptedPin });
    case UPDATE_DUKPT_SMID:
      return Object.assign({}, state, { dukptSmid: action.dukptSmid });
    case UPDATE_POS_ENTRY_MODE:
      return Object.assign({}, state, { posEntryMode: action.posEntryMode });
    case UPDATE_CARD_SEQUENCE_NUMBER:
      return Object.assign({}, state, { cardSequenceNumber: action.cardSequenceNumber });
    case UPDATE_EMV_TAGS_GO_ONLINE:
      return Object.assign({}, state, { emvTagsGoOnline: action.emvTagsGoOnline });
    case UPDATE_EMV_TAGS_FROM_HOST:
      return Object.assign({}, state, { emvTagsFromHost: action.emvTagsFromHost });
    case UPDATE_ETB_STRING:
      return Object.assign({}, state, { etb: action.etb });
    case UPDATE_TRACK1_DATA:
      return Object.assign({}, state, { track1Data: action.track1Data });
    case UPDATE_TRACK2_DATA:
      return Object.assign({}, state, { track2Data: action.track2Data });
    case UPDATE_PURCHASE_ORDER:
      return Object.assign({}, state, { purchaseOrder: action.purchaseOrder });
    case MAKING_PINPAD_XREF_REQUEST:
      return Object.assign({}, state, { isFetchingXref: true });
    case RECEIVE_PINPAD_XREF_SUCCESS:
      return Object.assign({}, state, {
        isFetchingXref: false,
        paymtMethCode: action.paymtMethCode,
        rptPaymtMethCode: action.rptPaymtMethCode,
        xref: action.xref,
        crHostId: action.crHostId,
        isPrepaidCard: action.isPrepaidCard,
      });
    case RECEIVE_PINPAD_XREF_FAILURE:
      return Object.assign({}, state, { isFetchingXref: false });
    case MAKING_PINPAD_CREDIT_AUTH_REQUEST:
      return Object.assign({}, state, { isFetchingCreditAuth: true });
    case RECEIVE_PINPAD_CREDIT_AUTH_SUCCESS:
      return Object.assign({}, state, { isFetchingCreditAuth: false });
    case RECEIVE_PINPAD_CREDIT_AUTH_FAILURE:
      return Object.assign({}, state, { isFetchingCreditAuth: false });
    case RESET_CARD_DETAILS:
      return Object.assign({}, state, defaultState);
    default:
      return state;
  }
}
