import {
  RESET_TRANSACTION_STATUS,
  SET_TRANSACTION_COMPLETE,
} from './actionTypes';

export function resetTransactionStatus() {
  return {
    type: RESET_TRANSACTION_STATUS,
  };
}

export function setTransactionComplete() {
  return {
    type: SET_TRANSACTION_COMPLETE,
  };
}
