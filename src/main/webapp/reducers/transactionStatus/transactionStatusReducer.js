/* eslint-disable import/prefer-default-export */
import {
  RESET_TRANSACTION_STATUS,
  SET_TRANSACTION_COMPLETE,
} from './actionTypes';

const defaultState = 'INCOMPLETE';

export const transactionStatusReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RESET_TRANSACTION_STATUS:
      return 'INCOMPLETE';
    case SET_TRANSACTION_COMPLETE:
      return 'COMPLETE';
    default:
      return state;
  }
};
