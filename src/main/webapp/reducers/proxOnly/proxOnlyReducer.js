/* eslint-disable import/prefer-default-export */
import {
  SET_PROX_ONLY_TRUE,
  SET_PROX_ONLY_FALSE,
} from './actionTypes';

export const proxOnlyReducer = (state = false, action) => {
  switch (action.type) {
    case SET_PROX_ONLY_TRUE:
      return true;
    case SET_PROX_ONLY_FALSE:
      return false;
    default:
      return state;
  }
};
