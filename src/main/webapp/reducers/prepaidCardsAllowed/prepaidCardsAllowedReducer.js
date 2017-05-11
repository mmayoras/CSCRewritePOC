/* eslint-disable import/prefer-default-export */
import {
  SET_PREPAID_CARDS_ALLOWED,
  SET_PREPAID_CARDS_DISALLOWED,
} from './actionTypes';

const defaultState = true;

export const prepaidCardsAllowedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PREPAID_CARDS_ALLOWED:
      return true;
    case SET_PREPAID_CARDS_DISALLOWED:
      return false;
    default:
      return state;
  }
};
