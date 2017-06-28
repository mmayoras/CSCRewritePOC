import {
  UPDATE_PIN_PAD_REQUEST,
  UPDATE_ENTRY_METHOD,
  SET_CARD_SWIPED_TRUE,
  SET_CARD_SWIPED_FALSE,
  SET_CARD_INSERTED_TRUE,
  SET_CARD_INSERTED_FALSE,
  SET_EMV_CARD_REMOVED_EARLY_TRUE,
  SET_EMV_CARD_REMOVED_EARLY_FALSE,
  INCREMENT_EMV_FALLBACK_COUNTER,
  RESET_EMV_FALLBACK_COUNTER,
  RESET_CARD_ACTION_STATUS,
  SET_EMV_FALLBACK_INDICATOR_TRUE,
  SET_EMV_FALLBACK_INDICATOR_FALSE,
  INCREMENT_MSR_FALLBACK_COUNTER,
  RESET_MSR_FALLBACK_COUNTER,
  SET_MSR_FALLBACK_INDICATOR_TRUE,
  SET_MSR_FALLBACK_INDICATOR_FALSE,
  SET_SIGNATURE_REQUIRED_TRUE,
  SET_SIGNATURE_REQUIRED_FALSE,
  UPDATE_SIGNATURE_ARRAY,
  SHOW_WAITING_FOR_SIGNATURE_SCREEN,
  SET_SIGNATURE_APPROVAL,
  RESET_PINPAD_DATA,
} from './actionTypes';

export function updatePinPadRequestType(payload) {
  return {
    type: UPDATE_PIN_PAD_REQUEST,
    payload,
  };
}

export function setCardSwipedTrue() {
  return {
    type: SET_CARD_SWIPED_TRUE,
  };
}

export function setCardSwipedFalse() {
  return {
    type: SET_CARD_SWIPED_FALSE,
  };
}

export function setCardInsertedTrue() {
  return {
    type: SET_CARD_INSERTED_TRUE,
  };
}

export function setCardInsertedFalse() {
  return {
    type: SET_CARD_INSERTED_FALSE,
  };
}

export function updateEntryMethod(entryMethod) {
  return {
    type: UPDATE_ENTRY_METHOD,
    entryMethod,
  };
}

export function setEMVCardRemovedEarlyTrue() {
  return {
    type: SET_EMV_CARD_REMOVED_EARLY_TRUE,
  };
}

export function setEMVCardRemovedEarlyFalse() {
  return {
    type: SET_EMV_CARD_REMOVED_EARLY_FALSE,
  };
}

export function resetCardActionStatus() {
  return {
    type: RESET_CARD_ACTION_STATUS,
  };
}

export function incrementEMVFallbackCounter() {
  return {
    type: INCREMENT_EMV_FALLBACK_COUNTER,
  };
}

export function resetEMVFallbackCounter() {
  return {
    type: RESET_EMV_FALLBACK_COUNTER,
  };
}

export function setEMVFallbackIndicatorTrue() {
  return {
    type: SET_EMV_FALLBACK_INDICATOR_TRUE,
  };
}

export function setEMVFallbackIndicatorFalse() {
  return {
    type: SET_EMV_FALLBACK_INDICATOR_FALSE,
  };
}

export function incrementMSRFallbackCounter() {
  return {
    type: INCREMENT_MSR_FALLBACK_COUNTER,
  };
}

export function resetMSRFallbackCounter() {
  return {
    type: RESET_MSR_FALLBACK_COUNTER,
  };
}

export function setMSRFallbackIndicatorTrue() {
  return {
    type: SET_MSR_FALLBACK_INDICATOR_TRUE,
  };
}

export function setMSRFallbackIndicatorFalse() {
  return {
    type: SET_MSR_FALLBACK_INDICATOR_FALSE,
  };
}

export function setSignatureRequiredTrue() {
  return {
    type: SET_SIGNATURE_REQUIRED_TRUE,
  };
}

export function setSignatureRequiredFalse() {
  return {
    type: SET_SIGNATURE_REQUIRED_FALSE,
  };
}

export function updateSignatureArray(payload) {
  return {
    type: UPDATE_SIGNATURE_ARRAY,
    payload,
  };
}

export function showWaitingForSignatureScreen(payload) {
  return {
    type: SHOW_WAITING_FOR_SIGNATURE_SCREEN,
    payload,
  };
}

export function setSignatureApprovalStatus(payload) {
  return {
    type: SET_SIGNATURE_APPROVAL,
    payload,
  };
}

export function resetPinPadData() {
  return {
    type: RESET_PINPAD_DATA,
  };
}
