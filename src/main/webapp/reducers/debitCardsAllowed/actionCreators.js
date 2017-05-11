import {
  SET_DEBIT_CARDS_ALLOWED,
  SET_DEBIT_CARDS_DISALLOWED,
} from './actionTypes';

export function setDebitCardsAllowed() {
  return {
    type: SET_DEBIT_CARDS_ALLOWED,
  };
}

export function setDebitCardsDisallowed() {
  return {
    type: SET_DEBIT_CARDS_DISALLOWED,
  };
}
