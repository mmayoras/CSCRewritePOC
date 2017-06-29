import {
  UPDATE_BUYER_ID,
  UPDATE_EXPIRY_DATE,
  UPDATE_PRIMARY_ACCOUNT_NUMBER,
  UPDATE_SECURITY_CODE,
  UPDATE_ZIP_CODE,
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
  MAKING_PINPAD_CREDIT_AUTH_SIMPLE_REVERSAL_REQUEST,
  RECEIVE_PINPAD_CREDIT_AUTH_SUCCESS,
  RECEIVE_PINPAD_CREDIT_AUTH_FAILURE,
  RECEIVE_PINPAD_CREDIT_AUTH_REVERSAL_SUCCESS,
  RECEIVE_PINPAD_CREDIT_AUTH_REVERSAL_FAILURE,
  RESET_CARD_DETAILS,
} from './actionTypes';

export function resetCardDetails() {
  return {
    type: RESET_CARD_DETAILS,
  };
}

export function updatePrimaryAccountNumber(primaryAccountNumber) {
  return {
    type: UPDATE_PRIMARY_ACCOUNT_NUMBER,
    primaryAccountNumber,
  };
}

export function updateExpiryDate(expiry) {
  return {
    type: UPDATE_EXPIRY_DATE,
    expiry,
  };
}

export function updateSecurityCode(securityCode) {
  return {
    type: UPDATE_SECURITY_CODE,
    securityCode,
  };
}
export function updateBuyerId(buyerId) {
  return {
    type: UPDATE_BUYER_ID,
    buyerId,
  };
}
export function updateZipCode(zipCode) {
  return {
    type: UPDATE_ZIP_CODE,
    zipCode,
  };
}

export function updateEncryptedPin(encryptedPin) {
  return {
    type: UPDATE_ENCRYPTED_PIN,
    encryptedPin,
  };
}

export function updateDukptSmid(dukptSmid) {
  return {
    type: UPDATE_DUKPT_SMID,
    dukptSmid,
  };
}

export function updatePOSEntryMode(posEntryMode) {
  return {
    type: UPDATE_POS_ENTRY_MODE,
    posEntryMode,
  };
}

export function updateCardSequenceNumber(cardSequenceNumber) {
  return {
    type: UPDATE_CARD_SEQUENCE_NUMBER,
    cardSequenceNumber,
  };
}

export function updateEMVTagsGoOnline(emvTagsGoOnline) {
  return {
    type: UPDATE_EMV_TAGS_GO_ONLINE,
    emvTagsGoOnline,
  };
}

export function updateEtbString(etb) {
  return {
    type: UPDATE_ETB_STRING,
    etb,
  };
}

export function updateTrack1Data(track1Data) {
  return {
    type: UPDATE_TRACK1_DATA,
    track1Data,
  };
}

export function updateTrack2Data(track2Data) {
  return {
    type: UPDATE_TRACK2_DATA,
    track2Data,
  };
}

export function updatePurchaseOrder(purchaseOrder) {
  return {
    type: UPDATE_PURCHASE_ORDER,
    purchaseOrder,
  };
}

export function makingXrefRequest() {
  return {
    type: MAKING_PINPAD_XREF_REQUEST,
  };
}

export function receiveXrefSuccess(paymtMethCode, rptPaymtMethCode, xref, crHostId, isPrepaidCard) {
  return {
    type: RECEIVE_PINPAD_XREF_SUCCESS,
    paymtMethCode,
    rptPaymtMethCode,
    xref,
    crHostId,
    isPrepaidCard,
  };
}

export function receiveXrefFailure() {
  return {
    type: RECEIVE_PINPAD_XREF_FAILURE,
  };
}

export function makingCreditAuthRequest() {
  return {
    type: MAKING_PINPAD_CREDIT_AUTH_REQUEST,
  };
}

export function makingCreditAuthSimpleReversalRequest() {
  return {
    type: MAKING_PINPAD_CREDIT_AUTH_SIMPLE_REVERSAL_REQUEST,
  };
}

export function receiveCreditAuthReversalSuccess() {
  return {
    type: RECEIVE_PINPAD_CREDIT_AUTH_REVERSAL_SUCCESS,
  };
}

export function receiveCreditAuthReversalFailure() {
  return {
    type: RECEIVE_PINPAD_CREDIT_AUTH_REVERSAL_FAILURE,
  };
}

export function receiveCreditAuthSuccess() {
  return {
    type: RECEIVE_PINPAD_CREDIT_AUTH_SUCCESS,
  };
}

export function receiveCreditAuthFailure() {
  return {
    type: RECEIVE_PINPAD_CREDIT_AUTH_FAILURE,
  };
}

export function updateEMVTagsFromHost(emvTagsFromHost) {
  return {
    type: UPDATE_EMV_TAGS_FROM_HOST,
    emvTagsFromHost,
  };
}
