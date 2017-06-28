import {
  UPDATE_PIN_PAD_REQUEST,
  UPDATE_ENTRY_METHOD,
  SET_CARD_SWIPED_TRUE,
  SET_CARD_SWIPED_FALSE,
  SET_CARD_INSERTED_TRUE,
  SET_CARD_INSERTED_FALSE,
  RESET_CARD_ACTION_STATUS,
  SET_EMV_CARD_REMOVED_EARLY_TRUE,
  SET_EMV_CARD_REMOVED_EARLY_FALSE,
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

export const pinPadReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PIN_PAD_REQUEST:
      return Object.assign({}, state, { requestType: action.payload });
    case UPDATE_ENTRY_METHOD:
      return Object.assign({}, state, {
        entryMethod: action.entryMethod,
        isEmv: (action.entryMethod === '4'), // If entryMethod === 4, is EMV
      });
    case SET_CARD_SWIPED_TRUE:
      return Object.assign({}, state, { cardSwiped: true });
    case SET_CARD_SWIPED_FALSE:
      return Object.assign({}, state, { cardSwiped: false });
    case SET_CARD_INSERTED_TRUE:
      return Object.assign({}, state, { cardInserted: true });
    case SET_CARD_INSERTED_FALSE:
      return Object.assign({}, state, { cardInserted: false });
    case SET_EMV_CARD_REMOVED_EARLY_TRUE:
      return Object.assign({}, state, { emvCardRemovedEarly: true });
    case SET_EMV_CARD_REMOVED_EARLY_FALSE:
      return Object.assign({}, state, { emvCardRemovedEarly: false });
    case RESET_CARD_ACTION_STATUS:
      return Object.assign({}, state, {
        cardSwiped: false,
        cardInserted: false,
        emvFallbackCounter: 0,
        msrFallbackCounter: 0,
      });
    case INCREMENT_EMV_FALLBACK_COUNTER:
      return Object.assign({}, state, { emvFallbackCounter: state.emvFallbackCounter + 1 });
    case RESET_EMV_FALLBACK_COUNTER:
      return Object.assign({}, state, { emvFallbackCounter: 0 });
    case SET_EMV_FALLBACK_INDICATOR_TRUE:
      return Object.assign({}, state, { emvFallbackIndicator: true });
    case SET_EMV_FALLBACK_INDICATOR_FALSE:
      return Object.assign({}, state, { emvFallbackIndicator: false });
    case INCREMENT_MSR_FALLBACK_COUNTER:
      return Object.assign({}, state, { msrFallbackCounter: state.msrFallbackCounter + 1 });
    case RESET_MSR_FALLBACK_COUNTER:
      return Object.assign({}, state, { msrFallbackCounter: 0 });
    case SET_MSR_FALLBACK_INDICATOR_TRUE:
      return Object.assign({}, state, { msrFallbackIndicator: true });
    case SET_MSR_FALLBACK_INDICATOR_FALSE:
      return Object.assign({}, state, { msrFallbackIndicator: false });
    case SET_SIGNATURE_REQUIRED_TRUE:
      return Object.assign({}, state, { signatureRequired: true });
    case SET_SIGNATURE_REQUIRED_FALSE:
      return Object.assign({}, state, { signatureRequired: false });
    case UPDATE_SIGNATURE_ARRAY:
      return Object.assign({}, state, { signatureArray: action.payload });
    case SHOW_WAITING_FOR_SIGNATURE_SCREEN:
      return Object.assign({}, state, { showWaitingForSignatureScreen: action.payload });
    case SET_SIGNATURE_APPROVAL:
      return Object.assign({}, state, { signatureApprovalStatus: action.payload });
    case RESET_PINPAD_DATA:
      return defaultState;
    default:
      return state;
  }
};
