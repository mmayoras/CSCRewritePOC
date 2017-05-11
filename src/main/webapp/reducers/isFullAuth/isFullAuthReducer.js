/* eslint-disable import/prefer-default-export */
import {
  IS_FULL_AUTH,
  IS_NOT_FULL_AUTH,
} from './actionTypes';

export const isFullAuthReducer = (state = false, action) => {
  switch (action.type) {
    case IS_FULL_AUTH:
      return true;
    case IS_NOT_FULL_AUTH:
      return false;
    default:
      return state;
  }
};
