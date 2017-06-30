import {UPDATE_PIN_PAD_REQUEST, RESET_PINPAD_DATA} from './actionTypes';

export function updatePinPadRequestType(payload) {
  return {
    type: UPDATE_PIN_PAD_REQUEST,
    payload,
  };
}

export function resetPinPadData() {
  return {
    type: RESET_PINPAD_DATA,
  };
}
