import {
  UPDATE_PIN_PAD_REQUEST,
  UPDATE_ENTRY_METHOD,
  SET_CARD_SWIPED_TRUE,
  SET_CARD_SWIPED_FALSE,
  SET_CARD_INSERTED_TRUE,
  SET_CARD_INSERTED_FALSE,
  SET_EMV_CARD_REMOVED_EARLY_TRUE,
  SET_EMV_CARD_REMOVED_EARLY_FALSE,
  RESET_CARD_ACTION_STATUS,
  INCREMENT_EMV_FALLBACK_COUNTER,
  RESET_EMV_FALLBACK_COUNTER,
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

test('pinpad request type is changed', () => {
  const actual = updatePinPadRequestType('TEST_MSR');
  expect(actual).toEqual({
    type: UPDATE_PIN_PAD_REQUEST,
    payload: 'TEST_MSR',
  });
});

test('update entryMethod', () => {
  const actual = updateEntryMethod('entrymethod');
  expect(actual).toEqual({
    type: UPDATE_ENTRY_METHOD,
    entryMethod: 'entrymethod',
  });
});

test('execute setCardSwipedTrue', () => {
  const actual = setCardSwipedTrue();
  expect(actual).toEqual({
    type: SET_CARD_SWIPED_TRUE,
  });
});

test('execute setCardSwipedfalse', () => {
  const actual = setCardSwipedFalse();
  expect(actual).toEqual({
    type: SET_CARD_SWIPED_FALSE,
  });
});

test('execute setCardInsertedTrue', () => {
  const actual = setCardInsertedTrue();
  expect(actual).toEqual({
    type: SET_CARD_INSERTED_TRUE,
  });
});

test('execute setCardInsertedfalse', () => {
  const actual = setCardInsertedFalse();
  expect(actual).toEqual({
    type: SET_CARD_INSERTED_FALSE,
  });
});

test('updating setEMVCardRemovedEarlyTrue sends this action', () => {
  const actual = setEMVCardRemovedEarlyTrue();
  expect(actual).toEqual({
    type: SET_EMV_CARD_REMOVED_EARLY_TRUE,
  });
});

test('updating setEMVCardRemovedEarlyFalse sends this action', () => {
  const actual = setEMVCardRemovedEarlyFalse();
  expect(actual).toEqual({
    type: SET_EMV_CARD_REMOVED_EARLY_FALSE,
  });
});

test('executing resetCardActionStatus sends this action', () => {
  const actual = resetCardActionStatus();
  expect(actual).toEqual({
    type: RESET_CARD_ACTION_STATUS,
  });
});

test('executing incrementEMVFallbackCounter sends this action', () => {
  const actual = incrementEMVFallbackCounter();
  expect(actual).toEqual({
    type: INCREMENT_EMV_FALLBACK_COUNTER,
  });
});

test('executing resetEMVFallbackCounter sends this action', () => {
  const actual = resetEMVFallbackCounter();
  expect(actual).toEqual({
    type: RESET_EMV_FALLBACK_COUNTER,
  });
});

test('updating setEMVFallbackIndicatorTrue sends this action', () => {
  const actual = setEMVFallbackIndicatorTrue();
  expect(actual).toEqual({
    type: SET_EMV_FALLBACK_INDICATOR_TRUE,
  });
});

test('updating setEMVFallbackIndicatorFalse sends this action', () => {
  const actual = setEMVFallbackIndicatorFalse();
  expect(actual).toEqual({
    type: SET_EMV_FALLBACK_INDICATOR_FALSE,
  });
});


test('executing incrementMSRFallbackCounter sends this action', () => {
  const actual = incrementMSRFallbackCounter();
  expect(actual).toEqual({
    type: INCREMENT_MSR_FALLBACK_COUNTER,
  });
});

test('executing resetMSRFallbackCounter sends this action', () => {
  const actual = resetMSRFallbackCounter();
  expect(actual).toEqual({
    type: RESET_MSR_FALLBACK_COUNTER,
  });
});

test('updating setMSRFallbackIndicatorTrue sends this action', () => {
  const actual = setMSRFallbackIndicatorTrue();
  expect(actual).toEqual({
    type: SET_MSR_FALLBACK_INDICATOR_TRUE,
  });
});

test('updating setMSRFallbackIndicatorFalse sends this action', () => {
  const actual = setMSRFallbackIndicatorFalse();
  expect(actual).toEqual({
    type: SET_MSR_FALLBACK_INDICATOR_FALSE,
  });
});

test('updating setSignatureRequiredTrue sends this action', () => {
  const actual = setSignatureRequiredTrue();
  expect(actual).toEqual({
    type: SET_SIGNATURE_REQUIRED_TRUE,
  });
});

test('updating setSignatureRequiredFalse sends this action', () => {
  const actual = setSignatureRequiredFalse();
  expect(actual).toEqual({
    type: SET_SIGNATURE_REQUIRED_FALSE,
  });
});

test('updating signatureArray sends this action', () => {
  const actual = updateSignatureArray('somePayload');
  expect(actual).toEqual({
    type: UPDATE_SIGNATURE_ARRAY,
    payload: 'somePayload',
  });
});

test('executing showWaitingForSignatureScreen with true sends this action', () => {
  const actual = showWaitingForSignatureScreen(true);
  expect(actual).toEqual({
    type: SHOW_WAITING_FOR_SIGNATURE_SCREEN,
    payload: true,
  });
});

test('executing showWaitingForSignatureScreen with false sends this action', () => {
  const actual = showWaitingForSignatureScreen(false);
  expect(actual).toEqual({
    type: SHOW_WAITING_FOR_SIGNATURE_SCREEN,
    payload: false,
  });
});

test('executing setSignatureApprovalStatus with APPROVED sends this action', () => {
  const actual = setSignatureApprovalStatus('APPROVED');
  expect(actual).toEqual({
    type: SET_SIGNATURE_APPROVAL,
    payload: 'APPROVED',
  });
});

test('executing setSignatureApprovalStatus with DECLINED sends this action', () => {
  const actual = setSignatureApprovalStatus('DECLINED');
  expect(actual).toEqual({
    type: SET_SIGNATURE_APPROVAL,
    payload: 'DECLINED',
  });
});

test('executing setSignatureApprovalStatus with PENDING sends this action', () => {
  const actual = setSignatureApprovalStatus('PENDING');
  expect(actual).toEqual({
    type: SET_SIGNATURE_APPROVAL,
    payload: 'PENDING',
  });
});

test('executing resetPinPadData returns this action', () => {
  const actual = resetPinPadData();
  expect(actual).toEqual({
    type: RESET_PINPAD_DATA,
  });
});
