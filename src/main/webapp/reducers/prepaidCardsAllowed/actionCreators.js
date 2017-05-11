import {
  SET_PREPAID_CARDS_ALLOWED,
  SET_PREPAID_CARDS_DISALLOWED,
} from './actionTypes';

export function setPrepaidCardsAllowed() {
  return {
    type: SET_PREPAID_CARDS_ALLOWED,
  };
}

export function setPrepaidCardsDisallowed() {
  return {
    type: SET_PREPAID_CARDS_DISALLOWED,
  };
}
