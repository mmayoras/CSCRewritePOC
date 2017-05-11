/* eslint-disable import/prefer-default-export */

import {
  SET_ACCESS_TOKEN,
} from './actionTypes';

const defaultState = {
  accessToken: {},
};

export function authenticationDataReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return Object.assign({}, state, { accessToken: action.accessToken });
    default:
      return state;
  }
}
