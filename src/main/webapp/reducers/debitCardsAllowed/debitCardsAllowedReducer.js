/* eslint-disable import/prefer-default-export */
import {
  SET_DEBIT_CARDS_ALLOWED,
  SET_DEBIT_CARDS_DISALLOWED,
} from './actionTypes';

const defaultState = true;

export const debitCardsAllowedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DEBIT_CARDS_ALLOWED:
      return true;
    case SET_DEBIT_CARDS_DISALLOWED:
      return false;
    default:
      return state;
  }
};
