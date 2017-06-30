import {UPDATE_PIN_PAD_REQUEST, RESET_PINPAD_DATA} from './actionTypes';

const defaultState = {
  requestType: '',
};

export const pinPadReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PIN_PAD_REQUEST:
      return Object.assign({}, state, {requestType: action.payload});
    case RESET_PINPAD_DATA:
      return defaultState;
    default:
      return state;
  }
};
