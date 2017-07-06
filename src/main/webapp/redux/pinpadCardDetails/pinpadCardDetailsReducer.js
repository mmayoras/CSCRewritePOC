import {UPDATE_ZIP_CODE, UPDATE_DOB, RESET_CARD_DETAILS} from './actionTypes';

const defaultState = {
  zipCode: '',
  dob: '',
};

export function pinpadCardDetailsReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_ZIP_CODE:
      return Object.assign({}, state, {zipCode: action.zipCode});
    case UPDATE_DOB:
      return Object.assign({}, state, {dob: action.dob});
    case RESET_CARD_DETAILS:
      return Object.assign({}, state, defaultState);
    default:
      return state;
  }
}
