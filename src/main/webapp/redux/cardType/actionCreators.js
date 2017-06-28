/* eslint-disable import/prefer-default-export */
import { UPDATE_CARD_TYPE } from './actionTypes';

export function setCardTypeDebit() {
  return {
    type: UPDATE_CARD_TYPE,
    payload: 'DEBIT',
  };
}

export function setCardTypeCredit() {
  return {
    type: UPDATE_CARD_TYPE,
    payload: 'CREDIT',
  };
}

export function resetCardType() {
  return {
    type: UPDATE_CARD_TYPE,
    payload: '',
  };
}
